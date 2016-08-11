var minutes = 0;
var seconds = 0;
var done = false;

function getMinutes()
{
	minutes = prompt("Enter how many minutes you want to walk","");
	//while minutes isn't a number
	//ask again

}

function timer()
{
	var time = document.getElementById("time");
	var run = setInterval(changeTime, 1000);
	function changeTime()
	{
		var newTime = "";
		if (seconds >= 0)
		{
			if (seconds < 10)
				newTime = minutes+":0"+seconds;
			else
				newTime = minutes+":"+seconds;
			seconds--;
		}
		else
		{
			if (minutes > 0)
			{
				minutes--;
				seconds = 59;
				newTime = minutes+":"+seconds;
				seconds--;

			}
			else
			{
				newTime = "Done! Good job!";
				done = true;
				clearInterval(run);
			}
		}

		time.innerHTML = newTime;
	}
}

//loads exercise.html and if they walked (done=true), 
//  calls a method that changes things accordingly 
function goBack()
{
	window.location.href = 'exercise.html';
	if(done)
		walked();
}

