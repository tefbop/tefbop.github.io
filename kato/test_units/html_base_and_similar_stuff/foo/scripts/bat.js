var enable_table_column_alignment = function() {
	$('colgroup').each(function(a_idx, a_elt) {
		let $colgroup = $(a_elt);
		let $table = $colgroup.parent();
		$table
			.find('>tbody>tr>td:lt('+ $colgroup.attr('span')+ ')')
			.css({
				'align': $colgroup.attr('align'),
				'vertical-align': $colgroup.attr('valign'),
			})
		;
	});
};
var bat_load_images = function() {
	// Refer to the 3 common images all .js files must refer to.
	$('div#js_bat__tibetan').css({
		'background':'url("img/Tenzin%20Kunsang.jpg")',
		'width':'100px', 'height':'100px',
		'background-size':'contain',
		'outline':'magenta 1px solid',
		'border-radius':'1em',
	});
	$('div#js_bat__bady').css({
		'background':'url("https://tefbop.github.io/kato/test_units/html_base_and_similar_stuff/foo/images/baby.jpg")', // relative URI: "../foo/images/baby.jpg"
		'width':'100px', 'height':'100px',
		'background-size':'contain',
		'outline':'magenta 1px solid',
		'border-radius':'1em',
	});
	$('div#js_bat__lady_on_sofa').css({
		'background':'url("../qux/say-hello-450px._V251249381_.jpg")',
		'width':'225px', 'height':'215px',
		'background-size':'contain',
		'outline':'magenta 1px solid',
		'border-radius':'1em',
	});
	// Refer to an embedded image.
	$('div#js_bat__keeley_hazell').css({
		/* The origin of the base64 code is file `Keeley Hazell/d11.jpg` in our local file-system. */
		'background':"url('data:image/jpeg;base64,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')",
		'width':'109px', 'height':'164px',
		'background-size':'contain',
		'transform':'scaleX(-1)', // flip horizontally
	});
	// Refer to the exclusive image only this .js file has.
	$('div#js_bat__exclusive').css({
		'background':'url("../baz/pic/a230_h8.jpg")',
		'width':'165px', 'height':'190px',
		'background-size':'contain',
	});
	// Refer to an exclusive image with an absolute full URI.
	$('div#a11').css({
		'background':'url("https://tefbop.github.io/kato/test_units/html_base_and_similar_stuff/baz/pic/a11.png")', // relative URI: "../baz/pic/a11.png"
		'width':'106px', 'height':'178px',
		'background-size':'contain',
	});
};
