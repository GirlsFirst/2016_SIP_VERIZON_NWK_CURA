var metus = {
	name: "Bob",
	stressLevel: 10,
	images: {"../img/metus1.jpg", "../img/metus2.jpg", "../img/metus3.jpg", 
	"../img/metus4.jpg", "../img/metus5.jpg"},
	pickImg: function (){
		var img;
		//choose img
		var index = (stressLevel + (stressLevel%2))/2 - 1
		img = images[index];
		return img;
	}
}



