function stressLevel(stressAmount)
{
	sessionStorage.setItem("stress", stressAmount);
	sessionStorage.setItem("box1", "false");
	sessionStorage.setItem("box2", "false");
	sessionStorage.setItem("box3", "false");
	window.location.href = 'data/main.html';
}

