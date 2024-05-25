<?php

namespace lloc\Msls;

use lloc\Msls\Query\TranslatedPostsQuery;

/**
 * Adding custom filter to posts/pages table.
 *
 * @package Msls
 */
class MslsCustomFilter extends MslsMain {

	/**
	 * Init
	 *
	 * @codeCoverageIgnore
	 *
	 * @return MslsCustomFilter
	 */
	public static function init() {
		$options    = msls_options();
		$collection = msls_blog_collection();
		$obj        = new static( $options, $collection );

		if ( ! $options->is_excluded() ) {
			$post_type = MslsPostType::instance()->get_request();
			if ( ! empty( $post_type ) ) {
				add_action( 'restrict_manage_posts', array( $obj, 'add_filter' ) );
				add_filter( 'parse_query', array( $obj, 'execute_filter' ) );
			}
		}

		return $obj;
	}

	/**
	 * Echo's select tag with list of blogs
	 *
	 * @uses selected
	 */
	public function add_filter(): void {
		$id = (
			filter_has_var( INPUT_GET, 'msls_filter' ) ?
			filter_input( INPUT_GET, 'msls_filter', FILTER_SANITIZE_NUMBER_INT ) :
			'0'
		);

		$blogs = $this->collection->get();
		if ( $blogs ) {
			echo '<select name="msls_filter" id="msls_filter">';
			echo '<option value="">' . esc_html( __( 'Show all blogs', 'multisite-language-switcher' ) ) . '</option>';
			foreach ( $blogs as $blog ) {
				printf(
					'<option value="%d" %s>%s</option>',
					$blog->userblog_id,
					selected( intval( $id ), $blog->userblog_id, false ),
					sprintf(
						__( 'Not translated in the %s-blog', 'multisite-language-switcher' ),
						$blog->get_description()
					)
				);
			}
			echo '</select>';
		}
	}

	/**
	 * Executes filter, excludes translated posts from WP_Query
	 *
	 * @param \WP_Query $query
	 *
	 * @return bool|\WP_Query
	 */
	public function execute_filter( \WP_Query $query ) {
		if ( ! filter_has_var( INPUT_GET, 'msls_filter' ) ) {
			return false;
		}

		$id   = filter_input( INPUT_GET, 'msls_filter', FILTER_SANITIZE_NUMBER_INT );
		$blog = $this->collection->get_object( intval( $id ) );

		if ( $blog ) {
			$sql_cache = MslsSqlCacher::create( __CLASS__, __METHOD__ );

			// load post we need to exclude (they already have a translation) from search query
			$translated_posts = ( new TranslatedPostsQuery( $sql_cache ) )( $blog->get_language() );

			$exclude_ids = array();
			foreach ( $translated_posts as $post ) {
				$exclude_ids[] = substr( $post->option_name, 5 );
			}
			$query->query_vars['post__not_in'] = $exclude_ids;

			return $query;
		}

		return false;
	}
}
