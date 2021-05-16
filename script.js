
var answer= -1;
var score = 0;
var gameStart = false;

document.addEventListener ("DOMContentLoaded",start);
document.getElementById('startgame').addEventListener('click', playRandomKey);
document.addEventListener("keydown",userInput,false);
function start(){
	alert( 'Hello');
}
	var key = ['KeyC','KeyD','KeyE','KeyF','KeyG','KeyA','KeyB'];
	var guess;
	var guessText;
	var score=0;
	var answer=-1;
	var gameStart = false;
localStorage.setItem("pitchPerfectScore",0);


function playRandomKey(){
	document.getElementById("answer").innerHTML = "<br> Guese:" +"<br>Answer:";
	answer = Math.floor(Math.random()*7)


	var answerAudio = "sound/sound"+answer+".m4a";
	answerAudio= new Audio(answerAudio);
	answerAudio.play();
	gameStart = true;
}

function userInput(event){
	console.log(event);

	if(gameStart){
		document.getElementById("answer").innerHTML = event.code;
	switch(event.code){
		case"KeyC":
			guess=0;
			break;
		case"KeyD":
			guess=1;
			break;
		case"KeyE":
			guess=2;
			break;
		case"KeyF":
			guess=3;
			break;
		case"KeyG":
			guess=4;
			break;
		case"KeyA":
			guess=5;
			break;
		case"KeyB":
			guess=6;
			break;

	}
	answerCheck(event.code);

	gameStart =! gameStart;

	}


}

function answerCheck(){

}
