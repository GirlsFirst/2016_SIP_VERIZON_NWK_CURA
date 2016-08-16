//keeps track of how many times the metus has been fed
var ate = 0;

function showStress()
{
	document.getElementById("test2").innerHTML = sessionStorage.getItem("stress");
}

//decreases stressLevel the first 5 times the metus eats
function ateFood()
{
	if (ate < 5)
	{
		updateProgress();
		ate++;
	}
}

//gives information and calls ateFood() to decrease stressLevel
function chocolateInfo()
{
	var info = "chocolateInfo";
	confirm(info);
	ateFood();
}

//gives information and calls ateFood() to decrease stressLevel
function blueberriesInfo()
{
	var info = "blueberriesInfo";
	confirm(info);
	ateFood();
}

//gives information and calls ateFood() to decrease stressLevel
function avocadoInfo()
{
	var info = "avocadoInfo";
	confirm(info);
	ateFood();
}

//gives information and calls ateFood() to decrease stressLevel
function vegesInfo()
{
	var info = "vegesInfo";
	confirm(info);
	ateFood();
}