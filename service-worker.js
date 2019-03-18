/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7461fea756e67b6b74baa92eb119279b"
  },
  {
    "url": "advanced-settings.png",
    "revision": "a9bbfb730315784ab305f5ae4b86dc06"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.AttachmentPathFinder.html",
    "revision": "ecbc79bc7e4a074876bcc5a2ff9a652c"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.ContentImporter.html",
    "revision": "dda459b141513c1e94b957f04bd876fa"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.ImportCoordinates.html",
    "revision": "e641dfaf7e034dd6a0934edce00e42cc"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.Importers.Attachments.Linking.html",
    "revision": "fb46474ab0a814dbe55112db086da9f7"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.Importers.AttachmentsImporters.html",
    "revision": "9b43f3a8b3b8f0d7671c0fb13d90c08c"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.Importers.BaseImporter.html",
    "revision": "75d86be45dc6b46eb2ee2678a716832c"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.Importers.Importer.html",
    "revision": "8708e3a453f55910943181f080b0ccf8"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.Importers.ImportersBaseFactory.html",
    "revision": "551f2321fef58bce74f05becac69e2c4"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.Importers.ImportersFactory.html",
    "revision": "a0d3ad40bb96c41accd659ed76027984"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.Importers.Map.html",
    "revision": "a648fc97b3873cc7af0a7c0eb5158238"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.Importers.PostFields.Duplicating.html",
    "revision": "9532a0f3188a048d63da52c33635d98e"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.Importers.PostFieldsImporters.html",
    "revision": "803d09cb4f7e9d6978f82196fb72aeba"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.Importers.PostMeta.Duplicating.html",
    "revision": "1a82e36906a6fe327ec82b0aa3be0bde"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.Importers.PostMetaImporters.html",
    "revision": "63365c0ca734f6f4f38b94136378f7f3"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.Importers.PostThumbnail.Linking.html",
    "revision": "dd25d4f3cf62b893fc5be78f28338879"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.Importers.PostThumbnailImporters.html",
    "revision": "57165e8b392d3db422a3e38a65cf9776"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.Importers.Terms.ShallowDuplicating.html",
    "revision": "94a743791853aa73b5608da8afb709b4"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.Importers.TermsImporters.html",
    "revision": "39fd7c436ca3f76deb2af2d09203c12d"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.ImportLogger.html",
    "revision": "5de663b9ffa84b96f569ce3ed96fea49"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.LogWriters.AdminNoticeLogger.html",
    "revision": "e206c4d3a434a3e8eebcd774558fdd65"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.LogWriters.LogWriter.html",
    "revision": "92351f1716bf27cd244751bee51c41d4"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.MetaBox.html",
    "revision": "77450d1e1805654e4c406b3c6db659ee"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.Relations.html",
    "revision": "92ef09447400d9f410ed2019f5ddeac8"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.Service.html",
    "revision": "45d7d6d9d4cb4e34d0002633cfd548c5"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsAdmin.html",
    "revision": "2d917f1a07110d65b0588630f197f357"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsAdminIcon.html",
    "revision": "9f179ff4b1441b5c4ec952f431254e39"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsAdminIconTaxonomy.html",
    "revision": "7d5a340a0d91d7ca1327559dc2929c4c"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsBlog.html",
    "revision": "87a0d1894edd22d746356f17838dcc72"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsBlogCollection.html",
    "revision": "24473a2abe2f11536eab01260d9b41a0"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsContentTypes.html",
    "revision": "e4360f9f57ea4ff26bd3982ebfcabaa6"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsCustomColumn.html",
    "revision": "97eeea509cb503c3920ebcf05139b6b7"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsCustomColumnTaxonomy.html",
    "revision": "719d042224b1a4ae69173dcbcdaa0e60"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsCustomFilter.html",
    "revision": "88bd4f28366ecd87a0cd3e813b2d50a7"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsGetSet.html",
    "revision": "73d31d74eebc1a1cc34272eef7fc2ede"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsJson.html",
    "revision": "8b50a2595606c66e3b88876556660499"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsLanguageArray.html",
    "revision": "5ac250245b2b56173584a2822006c92d"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsLink.html",
    "revision": "a102ed763eec0daa726be0992860c6bf"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsLinkImageOnly.html",
    "revision": "1fe006d8a0dd21bb59419f9afc5c2fd4"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsLinkTextImage.html",
    "revision": "ed64756beb0de64ea415bd04e491ca10"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsLinkTextOnly.html",
    "revision": "a429997e1b5827713a35707a0ac75579"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsMain.html",
    "revision": "2df24e7dafc7bb4cab77c85c9a65c6ea"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsMetaBox.html",
    "revision": "0b3e3803a46e5c792778cec912c82f65"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsOptions.html",
    "revision": "7b1e109cf7e406fb9446041d3d414b40"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsOptionsPost.html",
    "revision": "26ca45bb0f409b1b7e88074f32eb5c6b"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsOptionsQuery.html",
    "revision": "5c8b8bf3f46c5822226c472d08b5e8aa"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsOptionsQueryAuthor.html",
    "revision": "23c257bd4745ecc2349f0b5519895bf0"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsOptionsQueryDay.html",
    "revision": "355a97d11532d6db37b8e681dd0fd694"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsOptionsQueryMonth.html",
    "revision": "806d8152dd5ae288efd28eaefe55059c"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsOptionsQueryPostType.html",
    "revision": "0335fe709887f784fe62babfccb2e0cf"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsOptionsQueryYear.html",
    "revision": "6685622ba8e85547dc2198453050547c"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsOptionsTax.html",
    "revision": "199109529b544b152bcc41b97c379616"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsOptionsTaxTerm.html",
    "revision": "729e7c62f15dc9b0bd0f5f063e9b115a"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsOptionsTaxTermCategory.html",
    "revision": "0e6e0565b1680d118d393d602e04cb29"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsOutput.html",
    "revision": "4b7731a276ddd559f5be7873f8c0273e"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsPlugin.html",
    "revision": "0f6ab4923198b7d553187f04b065eb26"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsPostTag.html",
    "revision": "6bdfc7225d4daf6207501a213d394397"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsPostTagClassic.html",
    "revision": "59a05c5cb9d4ec77fe2de25185fac904"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsPostType.html",
    "revision": "c6000524dae41570dd06eccf6c9ee5b4"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsRegistry.html",
    "revision": "11efc9ebe7a7d81216c21273d2c9eefb"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsRegistryInstance.html",
    "revision": "09927750a96d4f3229e5da73e8a25bfe"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsSqlCacher.html",
    "revision": "c50045d66b967556eeec67842eb894a8"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsTaxonomy.html",
    "revision": "d963adc556167544ebbb490f75f31a69"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsWidget.html",
    "revision": "22cf4514864b0e95edfb5b0d40f36eda"
  },
  {
    "url": "api-documentation/css/bootstrap-combined.no-icons.min.css",
    "revision": "3f13279317ad7da1178553ff245ab56d"
  },
  {
    "url": "api-documentation/css/font-awesome.min.css",
    "revision": "7fbe76cdac6093784895bb4989203e5a"
  },
  {
    "url": "api-documentation/css/jquery.iviewer.css",
    "revision": "d20200e0756e987d27f500e3bdfbf9ce"
  },
  {
    "url": "api-documentation/css/phpdocumentor-clean-icons/fonts/phpdocumentor-clean-icons.dev.svg",
    "revision": "ed8e764380d8299157971ca67649cb18"
  },
  {
    "url": "api-documentation/css/phpdocumentor-clean-icons/fonts/phpdocumentor-clean-icons.eot",
    "revision": "da18d5fd73abdf146f8c87456036816c"
  },
  {
    "url": "api-documentation/css/phpdocumentor-clean-icons/fonts/phpdocumentor-clean-icons.svg",
    "revision": "777ef8255044405de75d1e3737aaee21"
  },
  {
    "url": "api-documentation/css/phpdocumentor-clean-icons/fonts/phpdocumentor-clean-icons.ttf",
    "revision": "71e82562f326128febbd76f851aa98df"
  },
  {
    "url": "api-documentation/css/phpdocumentor-clean-icons/fonts/phpdocumentor-clean-icons.woff",
    "revision": "e00348037b5d4433d0ecac450c15d22e"
  },
  {
    "url": "api-documentation/css/phpdocumentor-clean-icons/lte-ie7.js",
    "revision": "ee536c1e7557c04c8d49623c49b37dfa"
  },
  {
    "url": "api-documentation/css/phpdocumentor-clean-icons/style.css",
    "revision": "821bf9f8aada8f5965b5604cfa70c383"
  },
  {
    "url": "api-documentation/css/prism.css",
    "revision": "3c9bc5860787973d163251bd381b404d"
  },
  {
    "url": "api-documentation/css/template.css",
    "revision": "7465b0a3a1f21a853ace06b5de96b2c1"
  },
  {
    "url": "api-documentation/files/ContentImport.AttachmentPathFinder.html",
    "revision": "a5bd0280658bab3a9a79654e1e759ed6"
  },
  {
    "url": "api-documentation/files/ContentImport.ContentImporter.html",
    "revision": "81406559550ba57c267d1a6a51864910"
  },
  {
    "url": "api-documentation/files/ContentImport.ImportCoordinates.html",
    "revision": "411419f9dc5a983e603578b01c30c088"
  },
  {
    "url": "api-documentation/files/ContentImport.Importers.Attachments.Linking.html",
    "revision": "eb2860c5c4a213dd2bb7514f6ff0bcd2"
  },
  {
    "url": "api-documentation/files/ContentImport.Importers.AttachmentsImporters.html",
    "revision": "809036970fc06c762d71f9acd1951187"
  },
  {
    "url": "api-documentation/files/ContentImport.Importers.BaseImporter.html",
    "revision": "03a72ff8eddc0e9c0d3d3125df696e7e"
  },
  {
    "url": "api-documentation/files/ContentImport.Importers.Importer.html",
    "revision": "d8f30a8dc4911247c07e2c517b5e6269"
  },
  {
    "url": "api-documentation/files/ContentImport.Importers.ImportersBaseFactory.html",
    "revision": "ac0b16335de13d55be684fb02f299024"
  },
  {
    "url": "api-documentation/files/ContentImport.Importers.ImportersFactory.html",
    "revision": "e5491b9d4a877518b3b222b62e5f2820"
  },
  {
    "url": "api-documentation/files/ContentImport.Importers.Map.html",
    "revision": "f556b2489eeef0b5da2b713e199102ef"
  },
  {
    "url": "api-documentation/files/ContentImport.Importers.PostFields.Duplicating.html",
    "revision": "913d4feaca1f38f97391a52ca1558cc3"
  },
  {
    "url": "api-documentation/files/ContentImport.Importers.PostFieldsImporters.html",
    "revision": "8b0a1a22441e61934795c0efb32c2758"
  },
  {
    "url": "api-documentation/files/ContentImport.Importers.PostMeta.Duplicating.html",
    "revision": "c7c2ecc092a3f3ac1473ccd6d4ec75ba"
  },
  {
    "url": "api-documentation/files/ContentImport.Importers.PostMetaImporters.html",
    "revision": "ec4229615a028ee139ff58b6e44d5b37"
  },
  {
    "url": "api-documentation/files/ContentImport.Importers.PostThumbnail.Linking.html",
    "revision": "530dc30944511a3a2a66091f2518652f"
  },
  {
    "url": "api-documentation/files/ContentImport.Importers.PostThumbnailImporters.html",
    "revision": "dc9703b40279182bb214974dcf5910dd"
  },
  {
    "url": "api-documentation/files/ContentImport.Importers.Terms.ShallowDuplicating.html",
    "revision": "7dc57b87cfa49fd9f8076f706df2e5b7"
  },
  {
    "url": "api-documentation/files/ContentImport.Importers.TermsImporters.html",
    "revision": "d27680194ef3c4827b65a9add0f73502"
  },
  {
    "url": "api-documentation/files/ContentImport.ImportLogger.html",
    "revision": "e0d579b07ced9b93293a182f95ade7d1"
  },
  {
    "url": "api-documentation/files/ContentImport.LogWriters.AdminNoticeLogger.html",
    "revision": "07cdffbb1a7cf29ea2196839f5a45c81"
  },
  {
    "url": "api-documentation/files/ContentImport.LogWriters.LogWriter.html",
    "revision": "336eac14c87744c9a0cbab4dd851eab7"
  },
  {
    "url": "api-documentation/files/ContentImport.MetaBox.html",
    "revision": "61b736db6290410394de15c9d11b35dd"
  },
  {
    "url": "api-documentation/files/ContentImport.Relations.html",
    "revision": "86538b710b5efae00378d603f900f279"
  },
  {
    "url": "api-documentation/files/ContentImport.Service.html",
    "revision": "82ed49ff774e09ed26490b42e84e2c43"
  },
  {
    "url": "api-documentation/files/index.html",
    "revision": "ee2f6e4f1ef0ba6fc47844ede538dc39"
  },
  {
    "url": "api-documentation/files/MslsAdmin.html",
    "revision": "6c6f5e4d45e11a3b5a887bef0d22a35d"
  },
  {
    "url": "api-documentation/files/MslsAdminIcon.html",
    "revision": "9b310e2fa4f78aa812a4e0dda594207e"
  },
  {
    "url": "api-documentation/files/MslsAdminIconTaxonomy.html",
    "revision": "b470517e98f03ff5375119f82cd3adb6"
  },
  {
    "url": "api-documentation/files/MslsBlog.html",
    "revision": "c5b66135f49c4608ac169b0550ec6ebb"
  },
  {
    "url": "api-documentation/files/MslsBlogCollection.html",
    "revision": "1e565bc7fa8550ea7b016fa12437f03c"
  },
  {
    "url": "api-documentation/files/MslsContentTypes.html",
    "revision": "c5a0b1935afb20340e630baeebf9db47"
  },
  {
    "url": "api-documentation/files/MslsCustomColumn.html",
    "revision": "a24d6aa444f33f2e85be205d0cdacef8"
  },
  {
    "url": "api-documentation/files/MslsCustomColumnTaxonomy.html",
    "revision": "668bffe68ed036c5c3603ddd0f393256"
  },
  {
    "url": "api-documentation/files/MslsCustomFilter.html",
    "revision": "f37b345de634197714585360545d880e"
  },
  {
    "url": "api-documentation/files/MslsGetSet.html",
    "revision": "9def4b1cc7db319774a1fe061a3ec6ae"
  },
  {
    "url": "api-documentation/files/MslsJson.html",
    "revision": "5ca2c6679ca5c5102e59c9cd32148616"
  },
  {
    "url": "api-documentation/files/MslsLanguageArray.html",
    "revision": "8d7834a0ee6a5ee83939c94675f5844c"
  },
  {
    "url": "api-documentation/files/MslsLink.html",
    "revision": "0ae21b01b0a13a4fc0d76e4c0edf0d8c"
  },
  {
    "url": "api-documentation/files/MslsLinkImageOnly.html",
    "revision": "28a0500caafed3060a653dcd48029498"
  },
  {
    "url": "api-documentation/files/MslsLinkTextImage.html",
    "revision": "dd1bdaeb4f355728726b9ba7dbe00451"
  },
  {
    "url": "api-documentation/files/MslsLinkTextOnly.html",
    "revision": "030679fae3ebc703e7a635eaf659b74f"
  },
  {
    "url": "api-documentation/files/MslsMain.html",
    "revision": "a3abfad906cd2f592092be7668a75ea6"
  },
  {
    "url": "api-documentation/files/MslsMetaBox.html",
    "revision": "5f34d29ddffae11ff487c68c8b627cb3"
  },
  {
    "url": "api-documentation/files/MslsOptions.html",
    "revision": "62dac231779e65035c71ba55801c970e"
  },
  {
    "url": "api-documentation/files/MslsOptionsPost.html",
    "revision": "ae870adb02ddc346fe242dfc7cdbb137"
  },
  {
    "url": "api-documentation/files/MslsOptionsQuery.html",
    "revision": "e4f8c0711c7c5462f1c148a86ef19b7d"
  },
  {
    "url": "api-documentation/files/MslsOptionsQueryAuthor.html",
    "revision": "5ed9ee10166b32a052d2a7fb10b396ef"
  },
  {
    "url": "api-documentation/files/MslsOptionsQueryDay.html",
    "revision": "37c38f489bf1fc2c1945b0be390c1ad2"
  },
  {
    "url": "api-documentation/files/MslsOptionsQueryMonth.html",
    "revision": "b0b2fab3ffb0eaefce4aed431475180a"
  },
  {
    "url": "api-documentation/files/MslsOptionsQueryPostType.html",
    "revision": "788aa9457d1fc5931efe8fa404459fff"
  },
  {
    "url": "api-documentation/files/MslsOptionsQueryYear.html",
    "revision": "a5a1714e39bef4514d88bbe0378ec9a7"
  },
  {
    "url": "api-documentation/files/MslsOptionsTax.html",
    "revision": "3e3ad8165905fdbecca13e7843dac60b"
  },
  {
    "url": "api-documentation/files/MslsOptionsTaxTerm.html",
    "revision": "9d797005273e980e981a64abafa25313"
  },
  {
    "url": "api-documentation/files/MslsOptionsTaxTermCategory.html",
    "revision": "348a7d6dfd900e31028a2c92496578af"
  },
  {
    "url": "api-documentation/files/MslsOutput.html",
    "revision": "1d2d2cda36c98f2e680e81d75fbc495a"
  },
  {
    "url": "api-documentation/files/MslsPlugin.html",
    "revision": "e224d84842f51967e4d7771e0fdb76f9"
  },
  {
    "url": "api-documentation/files/MslsPostTag.html",
    "revision": "756913cdcdc8ae06ec64a4495d20cbf9"
  },
  {
    "url": "api-documentation/files/MslsPostTagClassic.html",
    "revision": "0702a0971b96708c3f3d22768322952c"
  },
  {
    "url": "api-documentation/files/MslsPostType.html",
    "revision": "7769aff822d1e8371b12f02547ca9c1c"
  },
  {
    "url": "api-documentation/files/MslsRegistry.html",
    "revision": "4fdb1d2fb0031c78813852692a404d21"
  },
  {
    "url": "api-documentation/files/MslsRegistryInstance.html",
    "revision": "1c4b8d59a7500c2b26af379a61fb592a"
  },
  {
    "url": "api-documentation/files/MslsSqlCacher.html",
    "revision": "e9e38e1073cfa5440e9bccbfa5f05d0b"
  },
  {
    "url": "api-documentation/files/MslsTaxonomy.html",
    "revision": "99b7136632bd5f60b3f94303dc3d70a7"
  },
  {
    "url": "api-documentation/files/MslsWidget.html",
    "revision": "6760ca0f4ed3bd8cf6ac3d133bd6798f"
  },
  {
    "url": "api-documentation/font/fontawesome-webfont.eot",
    "revision": "90186830c9c50a0fed932494581761d9"
  },
  {
    "url": "api-documentation/font/fontawesome-webfont.svg",
    "revision": "776d58f453c8fe5d6a89e9c31ee223ff"
  },
  {
    "url": "api-documentation/font/fontawesome-webfont.ttf",
    "revision": "4f0022f25672c7f501c339cbf98d9117"
  },
  {
    "url": "api-documentation/font/fontawesome-webfont.woff",
    "revision": "fdf491ce5ff5b2da02708cd0e9864719"
  },
  {
    "url": "api-documentation/font/FontAwesome.otf",
    "revision": "3b15120c304688379525c9f3c15cc4c2"
  },
  {
    "url": "api-documentation/graphs/class.html",
    "revision": "8e335740d41e8a9103c4da3b8906f8b1"
  },
  {
    "url": "api-documentation/graphs/classes.svg",
    "revision": "926f2a158939b442e262af5c4471b68c"
  },
  {
    "url": "api-documentation/images/apple-touch-icon-114x114.png",
    "revision": "a88f04df36a78d3a481211ce21ce0e60"
  },
  {
    "url": "api-documentation/images/apple-touch-icon-72x72.png",
    "revision": "5a7e1222cab85b4cec71aed67ff637ac"
  },
  {
    "url": "api-documentation/images/apple-touch-icon.png",
    "revision": "7bad7e9b405020e6e59caba1f6009ae0"
  },
  {
    "url": "api-documentation/images/custom-icons.svg",
    "revision": "35e786d557046ba93192e47d0999b29f"
  },
  {
    "url": "api-documentation/images/hierarchy-item.png",
    "revision": "0a0859d151d06e7bb05c33e08935f6b9"
  },
  {
    "url": "api-documentation/images/icon-class-13x13.png",
    "revision": "90fdd04cf8cc989932b69f381ca90c5d"
  },
  {
    "url": "api-documentation/images/icon-class.svg",
    "revision": "6399d8f77dac3f973d15c900fdbe68dd"
  },
  {
    "url": "api-documentation/images/icon-interface-13x13.png",
    "revision": "7a178646801f9087f1de9d5406cbc823"
  },
  {
    "url": "api-documentation/images/icon-interface.svg",
    "revision": "249deb62bdbd723a9f212d6de8363753"
  },
  {
    "url": "api-documentation/images/icon-trait-13x13.png",
    "revision": "0efd7bd5f682ad9469f73fb20a1101a0"
  },
  {
    "url": "api-documentation/images/icon-trait.svg",
    "revision": "c56a25b9b5b096f8133f41ff8c367341"
  },
  {
    "url": "api-documentation/images/iviewer/iviewer.rotate_left.png",
    "revision": "76f2b0ced5a3a64aae4179d13874787b"
  },
  {
    "url": "api-documentation/images/iviewer/iviewer.rotate_right.png",
    "revision": "3acdbd5dece2e19ed13a693ad3c92098"
  },
  {
    "url": "api-documentation/images/iviewer/iviewer.zoom_fit.png",
    "revision": "2a6f0d6f6619f7f68d0be0b8f4976355"
  },
  {
    "url": "api-documentation/images/iviewer/iviewer.zoom_in.png",
    "revision": "37c857d20554941ac14fbe9a9d25715e"
  },
  {
    "url": "api-documentation/images/iviewer/iviewer.zoom_out.png",
    "revision": "5aa2c0b6f696389c6f25123396bf1c42"
  },
  {
    "url": "api-documentation/images/iviewer/iviewer.zoom_zero.png",
    "revision": "184693b7dc7cd7d201188458ec209b61"
  },
  {
    "url": "api-documentation/index.html",
    "revision": "640b5dbf256d154500f66da8381d94cf"
  },
  {
    "url": "api-documentation/js/bootstrap.min.js",
    "revision": "be1c5898c4332c8e7f9906011e005bb0"
  },
  {
    "url": "api-documentation/js/html5.js",
    "revision": "0ce8f355891c26c28f057e195e97dcd5"
  },
  {
    "url": "api-documentation/js/jquery-1.11.0.min.js",
    "revision": "8fc25e27d42774aeae6edbc0a18b72aa"
  },
  {
    "url": "api-documentation/js/jquery.dotdotdot-1.5.9.js",
    "revision": "46034235be90f7905b86d65d7818457c"
  },
  {
    "url": "api-documentation/js/jquery.dotdotdot-1.5.9.min.js",
    "revision": "d4bc241987ae345461c3dd53651f7b98"
  },
  {
    "url": "api-documentation/js/jquery.iviewer.js",
    "revision": "d232f5c7145ad91268854b0f413a2bf2"
  },
  {
    "url": "api-documentation/js/jquery.iviewer.min.js",
    "revision": "75a69290d4ad6533cd63b06ab859fecc"
  },
  {
    "url": "api-documentation/js/jquery.mousewheel.js",
    "revision": "6e0c8755583bd92cd20f4fb1ffe984f6"
  },
  {
    "url": "api-documentation/js/jquery.smooth-scroll.js",
    "revision": "adb720781feba8c000f1d6e2ef2fee0f"
  },
  {
    "url": "api-documentation/js/prism.min.js",
    "revision": "7999e842de1cb54713abed7aa2edb8e1"
  },
  {
    "url": "api-documentation/js/ui/1.10.4/jquery-ui.min.js",
    "revision": "a631873e0f4be6f476465b7c2ad35745"
  },
  {
    "url": "api-documentation/namespaces/default.html",
    "revision": "165377070a991e55f28409126e3947b4"
  },
  {
    "url": "api-documentation/namespaces/lloc.html",
    "revision": "e92b7312a162286fae9f2eefad428d95"
  },
  {
    "url": "api-documentation/namespaces/lloc.Msls.ContentImport.html",
    "revision": "ca3940a30181170c8cc296bbc368c777"
  },
  {
    "url": "api-documentation/namespaces/lloc.Msls.ContentImport.Importers.Attachments.html",
    "revision": "049c7e314cc40df79e2a0ace5a34b2c1"
  },
  {
    "url": "api-documentation/namespaces/lloc.Msls.ContentImport.Importers.html",
    "revision": "6a0f4f3c5979d4f94018fcc525b15607"
  },
  {
    "url": "api-documentation/namespaces/lloc.Msls.ContentImport.Importers.PostFields.html",
    "revision": "1b354d2aa4de6f87332f2d30f73521ef"
  },
  {
    "url": "api-documentation/namespaces/lloc.Msls.ContentImport.Importers.PostMeta.html",
    "revision": "fa8e0ff291de9faf157deeb0f6e7368c"
  },
  {
    "url": "api-documentation/namespaces/lloc.Msls.ContentImport.Importers.PostThumbnail.html",
    "revision": "079059a681e1208c6493409174678651"
  },
  {
    "url": "api-documentation/namespaces/lloc.Msls.ContentImport.Importers.Terms.html",
    "revision": "bca358b70574ff7f9dde42c4969bb561"
  },
  {
    "url": "api-documentation/namespaces/lloc.Msls.ContentImport.LogWriters.html",
    "revision": "f86bef2cb9fc2afe0a04f1a1c3b94c18"
  },
  {
    "url": "api-documentation/namespaces/lloc.Msls.html",
    "revision": "39e378c3ae261c5f51fac9075a6ec9ad"
  },
  {
    "url": "api-documentation/reports/deprecated.html",
    "revision": "ffee674cabf97fc54e3af52558483d97"
  },
  {
    "url": "api-documentation/reports/errors.html",
    "revision": "12f2f4c42d2331d84914c66851ca9c28"
  },
  {
    "url": "api-documentation/reports/markers.html",
    "revision": "b69945585d7fcb09eb6fdb8dabb327e2"
  },
  {
    "url": "appendices/acknowledgment.html",
    "revision": "4c2f101262f6088ff522d7481d3aa4f5"
  },
  {
    "url": "appendices/faq.html",
    "revision": "f171ae8a15ab84bfe04718a75c919db3"
  },
  {
    "url": "appendices/help-donations.html",
    "revision": "6fa43ccc93ced1997cff81fb606ecb12"
  },
  {
    "url": "appendices/license.html",
    "revision": "6128135182b2d17e603a9d295a0e972d"
  },
  {
    "url": "assets/css/0.styles.7605b712.css",
    "revision": "59e007b312dd70610323d7cc2abd850e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.df4e6c23.js",
    "revision": "a14b3d796bfa412276f516e4e5c0e438"
  },
  {
    "url": "assets/js/11.117a3252.js",
    "revision": "6153237e64d4da5cb3cfb64c37dbc4bd"
  },
  {
    "url": "assets/js/12.f630d96f.js",
    "revision": "7e79039cb55765736212133d93ca428e"
  },
  {
    "url": "assets/js/13.e5a08207.js",
    "revision": "d934e6a77df3d9530ccd6e9074ee21dc"
  },
  {
    "url": "assets/js/14.95cd96e1.js",
    "revision": "57ef68f063545aa4ed3765048ff8105b"
  },
  {
    "url": "assets/js/15.3d194d65.js",
    "revision": "651fc5190c7dbe9ac609ac2a4894115f"
  },
  {
    "url": "assets/js/2.95391202.js",
    "revision": "0261a6bc917685de8d0db98c0b7d5b5b"
  },
  {
    "url": "assets/js/3.e147c853.js",
    "revision": "2f61c13ccae7c9a4174986f6fd62db82"
  },
  {
    "url": "assets/js/4.e7323231.js",
    "revision": "ea651dc0f76792ea62b5ca7cb32e1e5a"
  },
  {
    "url": "assets/js/5.54396494.js",
    "revision": "1bc9300ca889bee24342b7e334b3e781"
  },
  {
    "url": "assets/js/6.738b8620.js",
    "revision": "524c885203727fb464417b3dd95a4093"
  },
  {
    "url": "assets/js/7.31aa6e47.js",
    "revision": "b27de4cc315898d339f828351b218155"
  },
  {
    "url": "assets/js/8.831879e1.js",
    "revision": "1e1a72bd291c983b24e6fbfbdf911262"
  },
  {
    "url": "assets/js/9.4dc40ef7.js",
    "revision": "f396788fb731ec67818ccc71682b54b5"
  },
  {
    "url": "assets/js/app.2e488f22.js",
    "revision": "ff3cecab8137ba022721ef5c0caa6cd4"
  },
  {
    "url": "banner-1544x500.png",
    "revision": "5e903c91f73eb5e48c1ddbce5756edb6"
  },
  {
    "url": "banner-772x250.png",
    "revision": "e1c141d365fca77bd803ff076929827d"
  },
  {
    "url": "block-editor.png",
    "revision": "815571a245f775c31a63d9a648b0787c"
  },
  {
    "url": "choose-language.png",
    "revision": "402e788bfb23b6241eb926c34d4e5843"
  },
  {
    "url": "connected-contents.png",
    "revision": "ada881102a811c54b24aa3e1e260d4e5"
  },
  {
    "url": "coverage/ContentImport/AttachmentPathFinder.php.html",
    "revision": "6dd9a494a3ecdfcc7c53ef1e717e9936"
  },
  {
    "url": "coverage/ContentImport/ContentImporter.php.html",
    "revision": "4084b733f7c713babb10b93434f7b137"
  },
  {
    "url": "coverage/ContentImport/dashboard.html",
    "revision": "097f4159b2e3cfd078f9b72be638d185"
  },
  {
    "url": "coverage/ContentImport/ImportCoordinates.php.html",
    "revision": "1aba5e143829ce7f9dd674ca10ae7bbd"
  },
  {
    "url": "coverage/ContentImport/Importers/Attachments/dashboard.html",
    "revision": "f8f3170c5a7f652e40903faf18b87e68"
  },
  {
    "url": "coverage/ContentImport/Importers/Attachments/index.html",
    "revision": "edbd4fedab301081300f514b90233b1c"
  },
  {
    "url": "coverage/ContentImport/Importers/Attachments/Linking.php.html",
    "revision": "842f41a5817e984cc722acb421e6bebd"
  },
  {
    "url": "coverage/ContentImport/Importers/AttachmentsImporters.php.html",
    "revision": "90562e01f3c4960bc6c7888197d2203c"
  },
  {
    "url": "coverage/ContentImport/Importers/BaseImporter.php.html",
    "revision": "acc96d2cc20dd160aa5a07c8a33e5208"
  },
  {
    "url": "coverage/ContentImport/Importers/dashboard.html",
    "revision": "54fccc697067830eb6bd3ff6777a46f7"
  },
  {
    "url": "coverage/ContentImport/Importers/Importer.php.html",
    "revision": "27ae1e3324a9052196c5810748c721fd"
  },
  {
    "url": "coverage/ContentImport/Importers/ImportersBaseFactory.php.html",
    "revision": "19f30004d4ba1ddad0d46ea25b8d1aed"
  },
  {
    "url": "coverage/ContentImport/Importers/ImportersFactory.php.html",
    "revision": "a6ba5c2c3a87988c038e185191b13b59"
  },
  {
    "url": "coverage/ContentImport/Importers/index.html",
    "revision": "90fb7599eda164f034554c06921c3ca0"
  },
  {
    "url": "coverage/ContentImport/Importers/Map.php.html",
    "revision": "ff193e44b55565e4badee593e70b8a73"
  },
  {
    "url": "coverage/ContentImport/Importers/PostFields/dashboard.html",
    "revision": "f36c3fb9a9d1e331ff4ac5485e949f37"
  },
  {
    "url": "coverage/ContentImport/Importers/PostFields/Duplicating.php.html",
    "revision": "68f004db8464fe7f0adb0b37f5c3b2a4"
  },
  {
    "url": "coverage/ContentImport/Importers/PostFields/index.html",
    "revision": "91537496aa04daed7d935bd275d211a2"
  },
  {
    "url": "coverage/ContentImport/Importers/PostFieldsImporters.php.html",
    "revision": "5804666f4e34da46705a890239f3923b"
  },
  {
    "url": "coverage/ContentImport/Importers/PostMeta/dashboard.html",
    "revision": "4e639be655181cb4345d98b614c7ec86"
  },
  {
    "url": "coverage/ContentImport/Importers/PostMeta/Duplicating.php.html",
    "revision": "f04c78dee039d57ae4780586de5cb547"
  },
  {
    "url": "coverage/ContentImport/Importers/PostMeta/index.html",
    "revision": "4de0056599c344956e55345b5b57f11a"
  },
  {
    "url": "coverage/ContentImport/Importers/PostMetaImporters.php.html",
    "revision": "8013a1f76542138e72e7eff8a1eed542"
  },
  {
    "url": "coverage/ContentImport/Importers/PostThumbnail/dashboard.html",
    "revision": "da10c90cac6435a80ccd641e58432ba8"
  },
  {
    "url": "coverage/ContentImport/Importers/PostThumbnail/index.html",
    "revision": "cbded4ce1288abfb84b31ed9fff10dad"
  },
  {
    "url": "coverage/ContentImport/Importers/PostThumbnail/Linking.php.html",
    "revision": "23621608e9c77e3231fa4d1723803c22"
  },
  {
    "url": "coverage/ContentImport/Importers/PostThumbnailImporters.php.html",
    "revision": "997a3f39bddbcb5fe9c0ba99db2f2e45"
  },
  {
    "url": "coverage/ContentImport/Importers/Terms/dashboard.html",
    "revision": "6a259a43a6f189af44c1351e19162d61"
  },
  {
    "url": "coverage/ContentImport/Importers/Terms/index.html",
    "revision": "2ac2452e2083b8bf4f0e28f537247b77"
  },
  {
    "url": "coverage/ContentImport/Importers/Terms/ShallowDuplicating.php.html",
    "revision": "9bd39ac4d75d835d625595c471c6cf2f"
  },
  {
    "url": "coverage/ContentImport/Importers/TermsImporters.php.html",
    "revision": "d94925cafa9ea4811b4f5205f0baeae1"
  },
  {
    "url": "coverage/ContentImport/ImportLogger.php.html",
    "revision": "a8b19e686e4716d9347c1ac291b175cd"
  },
  {
    "url": "coverage/ContentImport/index.html",
    "revision": "6e4faf169e5d63c0e921cad5dae397d8"
  },
  {
    "url": "coverage/ContentImport/LogWriters/AdminNoticeLogger.php.html",
    "revision": "745deb3e4f951444778667f82df6103b"
  },
  {
    "url": "coverage/ContentImport/LogWriters/dashboard.html",
    "revision": "e8f1d0724effe71ba4f09beb3a82cd7a"
  },
  {
    "url": "coverage/ContentImport/LogWriters/index.html",
    "revision": "1299d900ee7b81c15956f8efdb493d63"
  },
  {
    "url": "coverage/ContentImport/LogWriters/LogWriter.php.html",
    "revision": "6f332de12c9d15560ae86f0d5ab19f8f"
  },
  {
    "url": "coverage/ContentImport/MetaBox.php.html",
    "revision": "a90a0d2524be4d2ba6835e7e098cdb41"
  },
  {
    "url": "coverage/ContentImport/Relations.php.html",
    "revision": "f32addcb7ade6183d68f3f0a8f3bbbd4"
  },
  {
    "url": "coverage/ContentImport/Service.php.html",
    "revision": "f8d140c75835343c741c0869414fc562"
  },
  {
    "url": "coverage/dashboard.html",
    "revision": "ea0bd4faa54484e87a7f263a8ae410df"
  },
  {
    "url": "coverage/index.html",
    "revision": "c3a307e51c71960546fbdf869195470b"
  },
  {
    "url": "coverage/index.php.html",
    "revision": "75aa0ed43b9b0977cb2697284fb046e7"
  },
  {
    "url": "coverage/MslsAdmin.php.html",
    "revision": "28b54b877e0acc0da22c10834a52d96d"
  },
  {
    "url": "coverage/MslsAdminIcon.php.html",
    "revision": "d2c060c34149060b394a2189586073be"
  },
  {
    "url": "coverage/MslsAdminIconTaxonomy.php.html",
    "revision": "7fb28737d7bc928ac2114863c08daf97"
  },
  {
    "url": "coverage/MslsBlog.php.html",
    "revision": "4a592376e8123fafcba9fdde07f472d5"
  },
  {
    "url": "coverage/MslsBlogCollection.php.html",
    "revision": "1de3a60944c8a7f7ddaf44b556559bb9"
  },
  {
    "url": "coverage/MslsContentTypes.php.html",
    "revision": "6c9679bf0799477f9e44ec9cd569d8b8"
  },
  {
    "url": "coverage/MslsCustomColumn.php.html",
    "revision": "90fac6b23858c2349cf71e1f12e87a9f"
  },
  {
    "url": "coverage/MslsCustomColumnTaxonomy.php.html",
    "revision": "f2c0e0933b30799fc7dd3c8e0b1c838a"
  },
  {
    "url": "coverage/MslsCustomFilter.php.html",
    "revision": "ab29fc4b8cd5031c3b5195abb41e64d1"
  },
  {
    "url": "coverage/MslsGetSet.php.html",
    "revision": "397cd4a9a0a737c463923c6f8f7e8640"
  },
  {
    "url": "coverage/MslsJson.php.html",
    "revision": "c2159505309e8cb027457e9dcfde7034"
  },
  {
    "url": "coverage/MslsLanguageArray.php.html",
    "revision": "973e7ce86f67b3c6fce45f210253494e"
  },
  {
    "url": "coverage/MslsLink.php.html",
    "revision": "551119f72a0afaf3f7a82888410bfbdf"
  },
  {
    "url": "coverage/MslsLinkImageOnly.php.html",
    "revision": "55e5e6aec862361b834e817e16de5245"
  },
  {
    "url": "coverage/MslsLinkTextImage.php.html",
    "revision": "24e34fa5e946006f20f76aa938416dbb"
  },
  {
    "url": "coverage/MslsLinkTextOnly.php.html",
    "revision": "b41a7cb635aaf94d6a93e46dc1d025c6"
  },
  {
    "url": "coverage/MslsMain.php.html",
    "revision": "506437b013c8a3a60ff801c0be6d1082"
  },
  {
    "url": "coverage/MslsMetaBox.php.html",
    "revision": "b6ea62906a32ae2b91253f2c863cb37c"
  },
  {
    "url": "coverage/MslsOptions.php.html",
    "revision": "ae259682737a24aa023daba8dea56ca8"
  },
  {
    "url": "coverage/MslsOptionsPost.php.html",
    "revision": "3a3a1f147978da169804f473aeaded48"
  },
  {
    "url": "coverage/MslsOptionsQuery.php.html",
    "revision": "35ed1fb24e586f1a13c1729ed9b11a67"
  },
  {
    "url": "coverage/MslsOptionsQueryAuthor.php.html",
    "revision": "38896230708b9847b899b0dda6313a6b"
  },
  {
    "url": "coverage/MslsOptionsQueryDay.php.html",
    "revision": "dbfe8ed0b83b2b39f2a729fae15dfdc1"
  },
  {
    "url": "coverage/MslsOptionsQueryMonth.php.html",
    "revision": "07b09419ead2f78f745c70b9579ad6f1"
  },
  {
    "url": "coverage/MslsOptionsQueryPostType.php.html",
    "revision": "283c192fa07df8868c9f0a7806a4c25a"
  },
  {
    "url": "coverage/MslsOptionsQueryYear.php.html",
    "revision": "ee202ce5d775730f21e6fbc3c38bc49b"
  },
  {
    "url": "coverage/MslsOptionsTax.php.html",
    "revision": "a89a3747122b146b5eaffb3ac8add7a4"
  },
  {
    "url": "coverage/MslsOptionsTaxTerm.php.html",
    "revision": "e82a521a853e702c394e8618b321b5af"
  },
  {
    "url": "coverage/MslsOptionsTaxTermCategory.php.html",
    "revision": "51a8babfcff89a3f43ccb7905627b4db"
  },
  {
    "url": "coverage/MslsOutput.php.html",
    "revision": "6fa205290879c421a13a83bf0540c99c"
  },
  {
    "url": "coverage/MslsPlugin.php.html",
    "revision": "4cd7bac79ab8c5ed6ee06220e4ed7a46"
  },
  {
    "url": "coverage/MslsPostTag.php.html",
    "revision": "596de65ae56d7ab41943c5079d1b422a"
  },
  {
    "url": "coverage/MslsPostTagClassic.php.html",
    "revision": "a0567f8dc26ed41500ab8b8be89112c2"
  },
  {
    "url": "coverage/MslsPostType.php.html",
    "revision": "80d8d6652ae4845a3e4e45f07cc49b1f"
  },
  {
    "url": "coverage/MslsRegistry.php.html",
    "revision": "80f4eb80154953c75ba5ac4ed0350f51"
  },
  {
    "url": "coverage/MslsRegistryInstance.php.html",
    "revision": "b5c9c614ff35f65c8f6a492962224061"
  },
  {
    "url": "coverage/MslsSqlCacher.php.html",
    "revision": "40f3c1662c4fb6dbbcb409c1cea93ece"
  },
  {
    "url": "coverage/MslsTaxonomy.php.html",
    "revision": "050abae10d96eb31374511c20e97584e"
  },
  {
    "url": "coverage/MslsWidget.php.html",
    "revision": "3af728fd6a60ff02477f3bf6e5648be0"
  },
  {
    "url": "developer-docs/hook-reference.html",
    "revision": "6ff820159a20e5fc99977ad0071eb5aa"
  },
  {
    "url": "developer-docs/snippets-examples.html",
    "revision": "56d4490cd02f5691c7d10e9609c7d3b7"
  },
  {
    "url": "editor-taxonomies.png",
    "revision": "4c4a8c03da97af0d94ee7617149d3ae9"
  },
  {
    "url": "editor.png",
    "revision": "e59f717fb975bca11c1844c1a40069ef"
  },
  {
    "url": "favicon.png",
    "revision": "04c1a0c2a730b9dd8fe8bc7be5febbe9"
  },
  {
    "url": "icon-128x128.png",
    "revision": "561835a9159b574e131ab3919b4b0ad1"
  },
  {
    "url": "icon-256x256.png",
    "revision": "395835eea4bdae80ff9ddc02738aa0d1"
  },
  {
    "url": "index.html",
    "revision": "159eb25bc21ae6f872ecfce29ef688e6"
  },
  {
    "url": "logo.png",
    "revision": "561835a9159b574e131ab3919b4b0ad1"
  },
  {
    "url": "main-settings.png",
    "revision": "986b4bd2f60e38c7603f433191a4a73c"
  },
  {
    "url": "settings.png",
    "revision": "99b6619dec325076ae6766da500c1d23"
  },
  {
    "url": "user-docs/editing-association-contents.html",
    "revision": "6e441eba23910971b9e53bb89ffa467f"
  },
  {
    "url": "user-docs/index.html",
    "revision": "2428b5bf3b4d86eaacdaae683f8c3ecc"
  },
  {
    "url": "user-docs/install-multisite.html",
    "revision": "8b683e08995229cd2791870a26d5812e"
  },
  {
    "url": "user-docs/integration-website.html",
    "revision": "f8763449c64a8bcc30caf24f1c925c0e"
  },
  {
    "url": "user-docs/plugin-configuration.html",
    "revision": "6e1a31ca944a8f2e07f22fa2a1c05adf"
  },
  {
    "url": "widget-output.png",
    "revision": "50a87a476855be43813cb5d999c227d6"
  },
  {
    "url": "widgets-admin.png",
    "revision": "b112ccda5116f43196e0456abc0a634a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
