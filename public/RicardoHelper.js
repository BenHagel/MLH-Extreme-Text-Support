var Ric = {};
Ric.count = 0;

Ric.baseURL = 'http://localhost:80/api';///'http://www.nimiqgames.ca/api';//
Ric.baseURL_res = 'http://localhost:80/res';
Ric.entities = [];

Ric.createNewEntity = function(entityType, lifeForce){
    var obj = {};
    obj.type = entityType;
    obj.points = lifeForce;
    return obj;
};

//Update game
Ric.update = function(){
    Ric.count++;

    //RICARDO GETS UPDATED HERE
    //ONCEW EVERY 500 MS
    if(Ric.count > 8 && Ric.entities.length < 1){
        Ric.createNewEntity('ric', 3000);
    }

    var workingOn = editor.getText(0, 10);
    console.log(workingOn);
};

//Standard xml request func
Ric.xmlRequest = function(type, req, to){
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(this.readyState === 4 && this.status === 200){
			to(JSON.parse(this.response));
		}
	};

	xhr.open(type, Ric.baseURL + req, true);
	xhr.send(null);
};

//Get english words
Ric.getAllEnglishWordsStartingWith = function(beginningOfWord){
	var possibleWords = function(data){
		if(data.error){
            console.log('ERROR getting words beginning with...');
        }
        else{

        }
    };
    
    var command = '?word=' + beginningOfWord;
    command += '&hits=50';
    Ric.xmlRequest('POST', command, possibleWords);
};

