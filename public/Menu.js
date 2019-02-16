var Menu = {};

Menu.sessionInfo = {};
Menu.quill = {};

Menu.init = function(){
    Menu.sessionInfo.count = 0;

    Menu.ticker();
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