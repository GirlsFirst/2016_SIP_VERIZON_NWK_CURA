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
	var info = "Dark Chocolate increases your brain’s serotonin and endorphin levels, chemicals that improve your mood, and has been found to reduce levels of cortisol, a hormone that causes stress. A healthy amount of chocolate is great for your mental health.";
	confirm(info);
	ateFood();
}

//gives information and calls ateFood() to decrease stressLevel
function blueberriesInfo()
{
	var info = "Blueberries are full of antioxidants that aid in your brain’s production of dopamine. Dopamine is a chemical that helps improve your mood.";
	confirm(info);
	ateFood();
}

//gives information and calls ateFood() to decrease stressLevel
function avocadoInfo()
{
	var info = "Avocado contains many essential nutrients, and can help regulate blood-sugar levels. Research has also been done that shows avocados satiate your hunger for hours, which all leads to you feeling better and not stress-eating when you’re under pressure.";
	confirm(info);
	ateFood();
}

//gives information and calls ateFood() to decrease stressLevel
function vegesInfo()
{
	var info = "Studies have found that eating vegetables can help calm nerves. Also, leafy vegetables contain folate, which helps your brain produce serotonin and dopamine, chemicals that are essential to your mood.";
	confirm(info);
	ateFood();
}