
var styleArray = ["matt","matt1","matt2","matt3","matt4","matt5"]

document.onkeydown = function () {

	setTimeout(function () {
		var text = document.getElementById("text").value;
		var letter = text[text.length - 1];
		var randomNum = Math.random() * 5;

		randomNum = Math.round(randomNum);

		document.getElementById("out-put").innerHTML += "<span class = " + styleArray[randomNum] + ">" + letter + "</span>";
	}, 1)

}