var index = 0;
var info = ["Meditating is a great relaxation technique. It takes only a few minutes, and leaves you feeling calm and composed. Here, we will guide you through some common meditation practices. Tap 'next' to get started.", 
"First, find a comfortable place to sit. Cushions are recommended, but it’s up to you. Sit with your back straight.", 
"Now that you’re comfortable, start to relax. Begin with your toes, and relax each part of your body, particularly wherever you feel the most tension.", 
"Sit for a minute, relaxed and peaceful, and take some time to be aware of your surroundings.", 
"Take a minute to focus on your breathing. You can simply pay attention to your breaths, or you can follow this easy breathing exercise: <br>Breathe in for 5 seconds <br>Hold your breathe for 5 seconds <br>Release for 5 seconds <br>Hold for 5 seconds <br>Repeat", 
"A mantra is a word or phrase that is repeated out loud or in one’s head, for the purpose of focusing one’s thoughts. Try creating a mantra for yourself, and using it to relax and focus.", 
"Other thoughts might try to intrude on your meditation. When this happens, don’t try to block them out entirely. Imagine them as clouds passing over your head. Acknowledge them, but don’t dwell on them.", 
"When you’re finished with your meditation, slowly start to focus on your surroundings. Start to move, a little at a time, taking your time getting up",
""];


//sets the text to index of info, then increments index
function newText()
{
	if (index == info.length)
	{
		//reduce stress
		var stress = sessionStorage.stress - 2;
		sessionStorage.setItem("stress", stress);
		window.location.href = 'main.html';
	}
	var text = document.getElementById("msg")
	text.innerHTML = info[index];
	index++;
}