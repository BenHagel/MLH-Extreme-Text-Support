var Menu = {};

Menu.phrases = [];
Menu.phraseIndex = 0;
Menu.currentChar = 0;
Menu.phraseTick = 0;
Menu.hangTime = 70;
Menu.homephrases = [
	'The new EZ text editor!',
	'Ricardo = Helpful!',
	'NEW! Force assistance!',
	'Helpful suggestions and a little bit of life advice....'
];
Menu.ricardoPhrases = [
	"Hey man I'm Ricardo! Here to help, brother ;)!",
	'Keep trying! You can get this thing finished on time!',
	'I believe in you!',
	"With just a little more confidence, I'm sure you can get this one out there!",
	'I think you just need to believe in yourself more. You got this!',
	'What would I say here? Hmm, try expressing yourself!',
	"Hey! I'm Ricardo, your personal typing assistant. I'm here to help you succeed!"
];
Menu.ricardoGifs = [
	'Ricardo1.gif',
	'Ricardo2.gif',
	'Ricardo3.gif'
];
Menu.tickPhrases = function(){
	Menu.phraseTick++;
	//Std looper
	if(Menu.currentChar < Menu.phrases[Menu.phraseIndex].length-1){
		Menu.currentChar++;
	}
	else{
		Menu.currentChar = Menu.phrases[Menu.phraseIndex].length - 1;
		Menu.hangTime--;
	}
	//Switcher
	if(Menu.hangTime < 1){
		Menu.hangTime = 70;
		Menu.currentChar = 0;
		Menu.phraseIndex = (Menu.phraseIndex + 1) % Menu.phrases.length;
	}
	document.getElementById('speechBubble').innerHTML = '' + Menu.phrases[Menu.phraseIndex].substring(0, Menu.currentChar);
	setTimeout(Menu.tickPhrases, 80);
};



//Ricardo Queries and timings
Menu.init = function(){
	
	Ric.init();
    Menu.phrases = Menu.homephrases;

    Menu.ticker();
    //Menu.tickPhrases();
};

//Hide the intitial overlay and start Ricardo's awakeneing from his slumber
Menu.hideOverlay = function(){
	document.getElementById('welcomeBox').classList.add('hidden');
	Ric.sleep = 4;
};

//Hide the intitial overlay and start Ricardo's awakeneing from his slumber
Menu.hideSpeech = function(){
	document.getElementById('ricardoDiv').classList.add('hidden');
	Ric.sleep = 5 + Math.random() * 10;
	Ric.sleeping = true;
};

Menu.ricardoIntercept = function(){

};

Menu.ticker = function(){

    Ric.update();

    setTimeout(Menu.ticker, 500);
};
