function setup()
{
	document.getElementById("checkbox1").checked = (sessionStorage.box1 == "true");
	document.getElementById("checkbox2").checked = (sessionStorage.box2 == "true");
	document.getElementById("checkbox3").checked = (sessionStorage.box3 == "true");
}

function changeCheck(index)
{
	var checkbox = "box" + index;
	var value = sessionStorage.getItem(checkbox);
	if (value == "true")
		sessionStorage.setItem(checkbox, "false");
	else
		sessionStorage.setItem(checkbox, "true");
}