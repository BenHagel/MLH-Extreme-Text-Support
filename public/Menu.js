var Menu = {};

Menu.sessionInfo = {};

Menu.init = function(){
    Menu.sessionInfo.count = 0;


};

Menu.ticker = function(){
    Menu.sessionInfo.count++;

    if(Menu.sessionInfo.count % 5 === 0) Menu.sendRicardoUpdate();
    setTimeout(Menu.ticker, 500);
};

Menu.sendRicardoUpdate = function(){

};