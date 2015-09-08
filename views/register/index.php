<?php
/**
 * Created by PhpStorm.
 * User: Digi3
 * Date: 8/9/2015
 * Time: 10:50
 */

Helper_Template::instance()->add_script(
	Helper_Filesearch::get_media(
		$city,
		$language,
		'vendor/react/JSXTransformer.js'
	)
);
Helper_Template::instance()->add_script(
	Helper_Filesearch::get_media(
		$city,
		$language,
		'vendor/react/react.min.js'
	)
);
Helper_Template::instance()->add_script(
	Helper_Filesearch::get_media(
		$city,
		$language,
		'vendor/semantic/semantic.min.js'
	)
);
Helper_Template::instance()->add_style(
	Helper_Filesearch::get_media(
		$city,
		$language,
		'vendor/semantic/semantic.min.css'
	)
);
?>
<script type="text/jsx" src="<?=url::site(Helper_Filesearch::get_media($city,$language,'js/register/index.jsx'))?>"></script>
<div id="main"></div>