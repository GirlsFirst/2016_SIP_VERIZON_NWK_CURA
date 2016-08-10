var stressLevel = 10;
//keeps track of how many times the metus has been fed
var ate = 0;

function pickImg(){
	var img;
	//choose img
	var images = ["../img/metus1.jpg", "../img/metus2.jpg", "../img/metus3.jpg", "../img/metus4.jpg", "../img/metus5.jpg"]
	var index = (stressLevel + (stressLevel%2))/2 - 1
	img = images[index];
	document.getElementById("metus").setAttribute("src",img);
}

function updateProgress(){
	var stress = stressLevel * 10;
	document.getElementById("progressBar").setAttribute("style","width:" + stress +"%");
}


function ateFood()
{
	if (ate < 5)
	{
		stressLevel--;
		updateProgress();
		pickImg();
		ate++;
	}
}

function chocolateInfo()
{
	var info = "chocolateInfo";
	confirm(info);
	ateFood();
	updateProgress();
}

function blueberriesInfo()
{
	var info = "blueberriesInfo";
	confirm(info);
	ateFood();
	updateProgress();
}

function avocadoInfo()
{
	var info = "avocadoInfo";
	confirm(info);
	ateFood();
	updateProgress();
}

function vegesInfo()
{
	var info = "vegesInfo";
	confirm(info);
	ateFood();
	updateProgress();
}
