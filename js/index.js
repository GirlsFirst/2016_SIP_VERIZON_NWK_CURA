function stressLevel(stressAmount)
{
	sessionStorage.setItem("stress", stressAmount);
	sessionStorage.setItem("box1", "false");
	sessionStorage.setItem("box2", "false");
	sessionStorage.setItem("box3", "false");
	sessionStorage.setItem("message", "false");
	window.location.href = 'main.html';
}