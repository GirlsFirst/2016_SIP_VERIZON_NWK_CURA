var stressLevel = sessionStorage.stress;

//on load, set stress level
function setup()
{
	stressLevel = sessionStorage.stress;
}

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
	var width = stressLevel*10;
	elem.style.width = width + '%';
}

//updates the progress bar by moving it down 10%
//  and updates the metus image
function updateProgress() {
	//subtracts 1 from the current stress level and stores the value
	stressLevel = sessionStorage.stress - 1;
    sessionStorage.setItem("stress", stressLevel);

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
    //changes metus image
    pickImg();
}

