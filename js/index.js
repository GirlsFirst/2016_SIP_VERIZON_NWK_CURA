function stressLevel(stressAmount)
{
	sessionStorage.setItem("stress", stressAmount);
	window.location.href = 'data/main.html';
}