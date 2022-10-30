/**
 * The character encoding of this source code file must be BIG5 so as to comply
 * with the .html file that loads this .js file. Both .html and .js files use
 * BIG5 to display CJK characters.
 */
var append_message_into = function(a_sSelector) {
	$('<p/>', {
		text: '現在時間:'+ (new Date()).toLocaleTimeString(),
	}).appendTo($(a_sSelector));
};
