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
	"Hey! I'm Ricardo, your personal typing assistant. I'm here to help you succeed!",
	"Hey, I was just thinking about you. I hope you're doing okay! ;)",
	"Try giving yourself more compliments, you're worth it!",
	"How's your work coming along? Remember to take breaks!",
	"I hope you can finish this on time. Remember, I believe in you!",
	"Once this is done, maybe you and I can dance a while? ;)",
	"RICARDOOOO",
	"You're really great at writing, I'm amazed!",
	"Try writing from your heart!",
	"There's a vast ocean of possibilities out there. Our meeting was fate!",
	"Do you like computers? Yeah, I've never owned one, but they look alright!",
	"Hmm, that's not what I would have done, but I support you.",
	"How often do you visit the gym? I'm on that grind all the time!",
	"Where do you workout? I can give you some pointers on your exercise routine!",
	"Can I help you?",
	"Hey, can I ask you a question? Did it hurt? When you fell from heaven?",
	"Haha yeah I'll just be down here!",
	"Do you have the time? I lost my phone and can't check!",
	"You can do it!",
	"Fight harder! You're almost there!"
];
Menu.ricardoAttention = [
	'Hey brother, just helped you out, some ;)!'
];	
Menu.ricardoGifs = [
	'Ricardo1.gif',
	'Ricardo2.gif',
	'Ricardo3.gif',
	'Ricardo4.gif',
	'Ricardo5.gif',
	'Ricardo6.gif',
	'Ricardo7.gif',
	'Ricardo8.gif'
];
Menu.tickPhrases = function(){
	//var phrase = Menu.ricardoPhrases[Math.floor(Math.random()*Menu.ricardoPhrases.length)];
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
		
		SOUND.RicardoVoice.play();
	}
	document.getElementById('ricardoSpeechBubble').innerHTML = 
		'' + Menu.phrases[Menu.phraseIndex].substring(0, Menu.currentChar);
	setTimeout(Menu.tickPhrases, 80);
};



//Ricardo Queries and timings
Menu.init = function(){
	
	Ric.init();
    Menu.phrases = Menu.ricardoPhrases;

    Menu.ticker();
    Menu.tickPhrases();
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

	//SOUND.CowBell.play();
};

Menu.ticker = function(){

    Ric.update();

    setTimeout(Menu.ticker, 500);
};
