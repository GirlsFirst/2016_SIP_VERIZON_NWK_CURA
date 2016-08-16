<<<<<<< HEAD
var messageTxt = "Good job! You're doing great!";

function setup()
{
	document.getElementById("checkbox1").checked = (sessionStorage.box1 == "true");
	document.getElementById("checkbox2").checked = (sessionStorage.box2 == "true");
	document.getElementById("checkbox3").checked = (sessionStorage.box3 == "true");

	if (sessionStorage.message == "true")
		document.getElementById("message").innerHTML = messageTxt;
}

function changeCheck(index)
{
	var checkbox = "box" + index;
	var value = sessionStorage.getItem(checkbox);
	if (value == "true")
		sessionStorage.setItem(checkbox, "false");
	else
		sessionStorage.setItem(checkbox, "true");

	if(sessionStorage.box1 == "true" && sessionStorage.box2 == "true" && sessionStorage.box3 == "true")
	{
		sessionStorage.setItem("message", "true")
		document.getElementById("message").innerHTML = messageTxt;
	}	
=======
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
>>>>>>> 35c5e30ff238f3777ef83bd2f1ba8de0abc0549c
}