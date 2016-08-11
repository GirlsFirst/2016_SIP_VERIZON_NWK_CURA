var stressLevel = 10;
//keeps track of how many times the metus has been fed
var ate = 0;

// chooses the appropriate metus image for the current stress level
function pickImg(){
	var img;
	//choose img
	var images = ["../img/metus1.jpg", "../img/metus2.jpg", "../img/metus3.jpg", "../img/metus4.jpg", "../img/metus5.jpg"]
	var index = (stressLevel + (stressLevel%2))/2 - 1
	img = images[index];
	document.getElementById("metus").setAttribute("src",img);
}

//sets progress bar initially
function setBar()
{
	var elem = document.getElementById("myBar");
	var width = stressLevel*10
	elem.style.width = width + '%';
}

//updates the progress bar by moving it down 10%
//  and updates the metus image
function updateProgress() {
    var elem = document.getElementById("myBar"); 
    var width = (stressLevel + 1)*10;	//current width of the bar
    var end = width - 10;	//ending width of the bar
    var id = setInterval(frame, 10);
    function frame() {
        if (width <= end) {
            clearInterval(id);
        } else {
            width--; 
            elem.style.width = width + '%'; 
        }
    }
    pickImg();
}

//decreases stressLevel the first 5 times the metus eats
function ateFood()
{
	if (ate < 5)
	{
		stressLevel--;
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

