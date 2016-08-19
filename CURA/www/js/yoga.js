//returns user to exercise screen
function backToExercise()
{
	window.location.href = 'exercise.html';
}

//returns users to yoga screen
function deStress()
{
	var stress = sessionStorage.stress - 1;
	sessionStorage.setItem("stress", stress);
}



function goToPose(poseNum)
{
	sessionStorage.setItem("poseNum", poseNum);
	window.location.href = 'pose.html';
}


var poses = ["../cura_images/warrior_1.png", "../cura_images/child_pose.png", "../cura_images/downward_dog.png", "../cura_images/cobra.png", "../cura_images/tree_pose.png", "../cura_images/ext_triangle.png",];
var names = ["Warrior Pose", "Child's Pose", "Downward Dog Pose", "Cobra Pose",  "Tree Pose", "Extended Triangle Pose"];

function fillInfo()
{
	poseIndex = sessionStorage.getItem("poseNum");
	var img = poses[poseIndex];
	var name = names[poseIndex];
	document.getElementById("poseImg").setAttribute("src", img);
	document.getElementById("poseName").innerHTML = name;
}


