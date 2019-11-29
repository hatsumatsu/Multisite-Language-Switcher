<?php
/**
 * MslsCustomColumn
 * @author Dennis Ploetner <re@lloc.de>
 * @since 0.9.8
 */

namespace lloc\Msls;

/**
 * Handling of existing/not existing translations in the backend listings of
 * various post types
 * @package Msls
 */
class MslsCustomColumn extends MslsMain {

	/**
	 * Factory
	 *
	 * @codeCoverageIgnore
	 *
	 * @return MslsCustomColumn
	 */
	public static function init() {
		$options    = MslsOptions::instance();
		$collection = MslsBlogCollection::instance();
		$obj        = new static( $options, $collection );

		if ( ! $options->is_excluded() ) {
			$post_type = MslsPostType::instance()->get_request();

			if ( ! empty( $post_type ) ) {
				add_filter( "manage_{$post_type}_posts_columns", [ $obj, 'th' ] );
				add_action( "manage_{$post_type}_posts_custom_column", [ $obj, 'td' ], 10, 2 );
				add_action( 'trashed_post', [ $obj, 'delete' ] );
			}
		}

		return $obj;
	}

	/**
	 * Table header
	 * @param array $columns
	 * @return array
	 */
	public function th( $columns ) {
		$blogs = $this->collection->get();
		if ( $blogs ) {
			$arr = array();
			foreach ( $blogs as $blog ) {
				$language = $blog->get_language();
				$flag_url = $this->options->get_flag_url( $language );

				$icon = new MslsAdminIcon( null );
				$icon->set_language( $language );

				if ( $post_id = get_the_ID() ) {
					$icon->set_id( $post_id );
					$icon->set_origin_language( 'it_IT' );
				}

				$icon->set_icon_type( 'flag' );

				$arr[] = $icon->get_icon();
			}
			$columns['mslscol'] = implode( '&nbsp;', $arr );
		}

		return $columns;
	}

	/**
	 * Table body
	 *
	 * @param string $column_name
	 * @param int $item_id
	 *
	 * @codeCoverageIgnore
	 */
	public function td( $column_name, $item_id ) {
		if ( 'mslscol' == $column_name ) {
			$blogs           = $this->collection->get();
			$origin_language = MslsBlogCollection::get_blog_language();
			if ( $blogs ) {
				$mydata = MslsOptions::create( $item_id );
				foreach ( $blogs as $blog ) {
					switch_to_blog( $blog->userblog_id );

					$language = $blog->get_language();

					$icon = MslsAdminIcon::create();
					$icon->set_language( $language );
					$icon->set_id( $item_id );
					$icon->set_origin_language( $origin_language );

					if ( $mydata->has_value( $language ) ) {
						$icon->set_href( $mydata->$language );
					}
					else {

					}

					echo $icon->get_a();

					restore_current_blog();
				}
			}
		}
	}

}
