var index = 0;
var info = ["1", "2", "3", "4", "5"];

//sets the text to index of info, then increments index
function newText()
{
	if (index == info.length)
	{
		//reduce stress
		//return to main page
	}
	var text = document.getElementById("text")
	text.innerHTML = info[index];
	index++;
}