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
	'Hey man Im Ricardo! Here to help, brother ;)!',
	'EYY yo I found a new phrasing for you haha!'
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
