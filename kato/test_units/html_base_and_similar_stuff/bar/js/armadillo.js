var armadillo = function() {
	$('div#hgoOoI').css({
		/**
		 * The URI of the background image is
		 * "https://tefbop.github.io/略/bar/img/Tenzin%20Kunsang.jpg" instead of
		 * "https://tefbop.github.io/略/bar/js/img/Tenzin%20Kunsang.jpg" because
		 * all relative paths in a .js file are relative to the .html file that
		 * contains the URL of the .js file instead of the .js file itself.
		 */
		'background': 'url("img/Tenzin%20Kunsang.jpg")', // the relative URL for our test case
		'width': '100px',
		'height': '100px',
	});
};
