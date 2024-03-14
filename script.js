let i = 0;
let images = [];
let time = 3000;

images[0] = "assets/dishantniger.png";
images[1] = "assets/dishantniger2.png";

function changeImg() {
	document.slide.src = images[i];

	if (i < images.length - 1) {
		i++;
	} else {
		i = 0;
	}

	setTimeout("changeImg()", time);
}

window.onload = changeImg;

/////////////////////////////////////

const form = document.querySelector("form");

const sendEmail = function () {
	Email.send({
		Host: "smtp.elasticmail.com",
		Username: "dishantkharel011@gmail.com",
		Password: "FD57165BC413A92F3E12823EE81423DE0B80",
		To: "aayush21605@gmail.com",
		From: "aaryanthakur442@gmail.com",
		Subject: "This is the subject",
		Body: "And this is the body",
	}).then((message) => alert(message));
};

form.addEventListener("submit", function (e) {
	e.preventDefault();

	sendEmail();
});
