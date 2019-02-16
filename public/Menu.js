var Menu = {};

Menu.sessionInfo = {};

Menu.phrases = [];
Menu.phraseIndex = 0;
Menu.currentChar = 0;
Menu.phraseTick = 0;
Menu.hangTime = 70;
Menu.homephrases = ['The new EZ text editor!',
	'Ricardo = Helpful!',
	'NEW! Force assistance!',
	'Helpful suggestions and a little bit of life advice....'];
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
    Menu.sessionInfo.count = 0;
    Menu.phrases = Menu.homephrases;
    
    Menu.ticker();
    Menu.tickPhrases();
};

Menu.ticker = function(){
    Menu.sessionInfo.count++;

    if(Menu.sessionInfo.count % 5 === 0){
        var workingOn = editor.getText(0, 10);
        console.log(workingOn);
        Menu.sendRicardoUpdate();
    }
    setTimeout(Menu.ticker, 500);
};




Menu.sendRicardoUpdate = function(){

};