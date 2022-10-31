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
var camel_load_images = function() {
	// Refer to the 3 common images all .js files must refer to.
	$('div#js_camel__tibetan').css({
		'background':'url("img/Tenzin%20Kunsang.jpg")',
		'width':'100px', 'height':'100px',
		'background-size':'contain',
	});
	$('div#js_camel__bady').css({
		'background':'url("../foo/images/baby.jpg")',
		'width':'100px', 'height':'100px',
		'background-size':'contain',
	});
	$('div#js_camel__lady_on_sofa').css({
		'background':'url("../qux/say-hello-450px._V251249381_.jpg")',
		'width':'225px', 'height':'215px',
		'background-size':'contain',
	});
	// Refer to an embedded image.
	$('div#js_camel__darkstalkers_morrigan').css({
		/* The origin of the base64 code is file `Morrigan Aensland/Darkstalkers_Morrigan.png` in our local file-system. */
		'background':'url("data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAPwAAAGQBAMAAAB4xBDBAAAAMFBMVEUAAABAADBgMEBAQEBwQFBgYGCYUGDIYFDIcHDgiGD4iGCIiIiw4LD4yIj4+PgAAADexeN4AAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfXCw4WNBmTCkTgAAAIXElEQVR42u2djW3rOgyFs4JX8ApewSt0Ba+QFbyCV8gKXeGukBW6gl9OT/lI/cVO21RyQAG310lkfTRAkBRFyafTr7f11k71muMrAdb1D57d8ZXwZQC+727t6U/u+Ar4dS3BBe3418Sv6zCU4MPwB8/u+Ep4gad4C3f8a+EJFbgVQH7pOse/In5d398/PgDRRhHsL08TwPEV8VQwgaaqN0Tt16cZjq+IDx1O3J6seI6vjhcB5vlf0JYlFODJca7jK+Hn+ePWFP3x1awAjn89/LrGUBVF3M5TrZ7jq+GniajY7AAuE40n5jIdXw0vijfPyxLCp4lwOh/Hvy5+Wa5XXl1vbZ4VTiV0/DHxTBhs4+fPNk3Lgk99P89dR6Gu1/D+h8RxfEU8zIYMEN/IyeQ0QeFkYnm5UP0gghijebb3LMsDIji+Gp5o4vF//Os4wqyIAJhwXD8bvhlHMUZqeiAiR3R8y3hB8p/8DXsg1ARWoWzjrV0uNt0gamcfyPFt4i3UXsV9/v2DisVNTY5VPh3N8S3jtTPChvxNDDdoYM63JvBpQrgRJxo5IhWTZsrxreLFQSBFwO55PINJDoxAE2qHoDNNOKhREvzdBSbHV8RTWfpeDUvYWdUL6jZN44hphjU7EAiiYNKpiofPYsruqqDjK+On6Xzu+xTPiUV/a9OEgAPBB+EUAOLgM8NPCMCwBIGIPNAO1XN8Nfy6wpmge5gg5OSCQ0O9+h6BpAYcuFYnxGkne0yT4Hc5HcdXwgNz/mwYPoaHMCYV6Hbw2QpDEfEwULzLBU5sV7LZ8VXxMDtoNkWgoYPClwUihVANQmRZ+fLZ8DC70kuObwLPBcF1xTDXK9OHqmjlJugU/5DqOb4ivu8Vj4Zh4EQELilFxSIMIVyEEDyCD3zeXGB2fEX86TSOxOMWCT85ZBhgfHzwE3+TK2mcWnQd8XQ/u0oLHF8R3/fnszU8EmyI2xHVsoElFQ2FhMPAiQgfQPAPFBU4viK+60I84H3fdWHIYRcTluXt7f3W3t6A572AwnRdvtruciLHN4GH0xEXhIAhdjByTbjg0Z9IKJ/g6cAc3zZeJpl0OtYB2WnmPA+DOCBRPOLRT4IMEQQJht0lBI5vAA+F02sYHkkkLss4AnY+I/QcBqDpcFA6JgKo4jHYdPyx8DLpQKox3AgEfLo1CMtNXYdyshCPYNPxR8Ij0FDV02JwWWbEX6qdbAJkH4YZanQcfxS8qhsEEIejS8NQOlkaCrd/2iVkqK3jj4a3jgZ4C5cNQCwusJt+pdl+KgCNluPbxsfKhwkGCgNCvAQXvBpHKRlnbysAf4HRcvwR8BpmiNqF5YDW3CiCArBshIUk6Enn88BxAI6viFfl4+SAS8EWDiMSqx3hcoUeTCSXDwVzfIv43DFudiiIxXQCCsLmOScARTidOPl8eHeS46vhtxTT4kMBbGOQQQEc/xp4bAURAe7hObn4ZQEcXwUvZgfhiAScW8pHsBgfxx8TL4e5cZFYQg4uM5bwUjTy/v5j5XN8RTyWGAnHFgKrfEwi5/EsPcJS048FcHw1fNdB5dggAJWPZkiBoRpK4RkNz48EcHw1vIVzU5AUgJbxEFJMliw7fFMAx1fDx/BQAJtigFHiVJOOSfBYaP72kZ+Or4YnvOtSAeCELJ5BKN0SBdRgxS43PiSA46vhRe1yeAiA70XpWGoE1RtHOqUYr4cCO751PCeUxFMA+V8FiI0OlxVivCreMDxwBJDjK+ElfUAsFc2qIBBxcKm/2k2FanZYYrRLAMdXwwOog+GTGBqIQNUKgw3B918tp3qlF384vh28GpwQjyZwhBtW+eQOfhNvJo5LTRzfLt4aGAuXUAIqKIGlhJcKR8FIHr9LAMdXw2NYCSQZYqAJGgPzm1hBQ3w4YoovCuD4qnhiwoFFAH0NX6igIT4+KiqHLwjg+Gp4GX5KGgTA9kBtXEa2QQaUNo/PlZc6vjX8VGhINqjiWXy8mBhvBSrhMwI4vhq+DJdEohWATiddRnb88fBQLiaHFMq/9haLh3lKFS/e/pnHZ7OYjq+EZ9G3DR4ErS9bTpUvVbx427csOG+kGBxfGW9djFWiR/DxcQ8hvrik4PiG8PErOAUZTzXiUvH01Q+Obx8vLob/0tcu3xOAfzHNKOGt4XF8u3i2eIuIQu013ZSUB6eHPcT4QuGw46vi00RhzvCEAgCv24LCJcQYr8rn+NbwaUqppHwqAFXPLic6/nh4TDLTlGJJ+USEGH/P7GwI4PiqeC0TEFFC5eu6VID7iaX0Be6ObxHPJURdMkwNTwzXaaZONrfw/Oz49vBcMBbjk6YKYrwsJanp2cYXE4uOr4aH4QkLg3Ov6IwXFCQFWTI7JQEc3xo+LBTMDaUTDPaWwiF78MM2fledouP/EG/Lg/s+7xp0goHFJ3E4LBzIH+OZ4ndUJzv+z/GaYihPBikA8bZYtHSgW4zfVaXq+D/Hi7vh4Q3lfhQhPual/Br3B6tUHf/neFlQAvz+gR3hBgHCy3c4/ih4OJvtrXt6wJ8eBVLuu3tjiOMr4gnfxtPocLlx+w4RwPEt4/du3+LmX3u4Q25a4vhXxAta4Zx8/EgAxzeB32NI7IEumnBy/JHxmwVe/8P1AD9NO9xXPse3jreb9kspA1W8OPHg+CPi7dFc5WkhhYzhNvXwg+d3fEX89pZt6cOjfXNj3Bvd8cfAU5XSHng13/fOjXtI9RxfFZ/eIIf2fffQxo2stuMr4u+X9cnEko7pV84Jd3xz+LyzeYua418F/wh897lhjm8eHyaIc9OHHNzxx8ff267J3/AKB754W1/E9KvP7viK+FxpD9F5N+P418DvEysU7+lwxz8L/x/D/LNlLsZrkQAAAABJRU5ErkJggg==")',
		'width':'126px', 'height':'200px',
		'background-size':'contain',
		'transform':'scaleX(-1)', // flip horizontally
	});
	// Refer to the exclusive image only this .js file has.
	$('div#js_camel__exclusive').css({
		'background':'url("../baz/pic/happy.jpg")',
		'width':'185px', 'height':'355px',
		'background-size':'contain',
	});
};
