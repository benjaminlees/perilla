
var styleArray = ["matt","matt1","matt2","matt3","matt4","matt5"];

var bold = false;
var spacing = false;

document.onkeydown = function (e) {

	console.log(e)

		setTimeout(function () {

			if (e.keyCode === 8) {
				var doc = document.getElementById("out-put").getElementsByTagName('span')
				var elem = doc[doc.length -1];
				document.getElementById("out-put").removeChild(elem);
				return;
			}
			if (e.keyCode === 13) {
				document.getElementById("out-put").innerHTML += "<br />";
				return;
			}

			if (e.keyCode === 187) {
				document.getElementById("out-put").innerHTML += "<span class='tab'></span>";
				return;
			}

			if (document.getElementById("text").value) {7
				var style = '';
				var text = document.getElementById("text").value;
				var letter = text[text.length - 1];
				var randomNum = Math.random() * 5;

				randomNum = Math.round(randomNum);

				if (bold && spacing) { style = "bold spacing "};
				if (bold && !spacing) { style = "bold "};
				if (!bold && spacing) { style = "spacing "};
				if (center) { style = style + " center "};

				style = style + styleArray[randomNum];
				console.log(style)

				document.getElementById("out-put").innerHTML += "<span class = '" + style + "'>" + letter + "</span>";

			}
		}, 1);
}

document.getElementById("bold").addEventListener('click', function () { bold = !bold; });
document.getElementById("spacing").addEventListener('click', function () { spacing = !spacing; });
