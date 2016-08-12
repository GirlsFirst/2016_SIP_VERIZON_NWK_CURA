//returns user to exercise screen
function backToExercise()
{
	window.location.href = 'exercise.html';
}

//returns users to yoga screen
function backToYoga()
{
	window.location.href = 'yoga.html';
}



function goToPose(poseNum)
{
	sessionStorage.setItem("poseNum", poseNum);
	window.location.href = 'pose.html';
}


var poses = ["../img/warrior.jpg", "../img/child.jpg", "../img/tree.jpg", "../img/dog.jpg", "../img/cobra.jpg", "../img/triangle.jpg",];
var names = ["Warrior Pose", "Child's Pose", "Downward Dog Pose", "Cobra Pose",  "Tree Pose", "Extended Triangle Pose"];

function fillInfo()
{
	poseIndex = sessionStorage.getItem("poseNum");
	var img = poses[poseIndex];
	var name = names[poseIndex];
	document.getElementById("poseImg").setAttribute("src", img);
	document.getElementById("poseName").innerHTML = name;
}


