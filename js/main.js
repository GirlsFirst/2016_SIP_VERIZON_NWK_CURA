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
	var images = ["../cura_images/metus-5.png", "../cura_images/metus-4.png", "../cura_images/metus-3.png", "../cura_images/metus-2.png", "../cura_images/metus-1.png"]
	var index = (Number(stressLevel) + (stressLevel%2))/2 - 1
    if (index == -1)
        index = 0;
	img = images[index];
	document.getElementById("metus").setAttribute("src",img);
}

//sets progress bar initially
function setBar(){
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

