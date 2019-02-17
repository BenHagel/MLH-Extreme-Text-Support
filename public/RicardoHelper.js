var Ric = {};
Ric.count = 0;

Ric.baseURL = 'http://extremetextsupport.com/api';//'http://localhost:80/api';//    /'http://www.nimiqgames.ca/api';//
Ric.baseURL_res = 'http://extremetextsupport.com/res/';//'http://localhost:80/res/';//http://localhost:80/res/';

//World variables to control Ricardo's movement and rayn of terror
Ric.entities = [];

//Initer function runs once on setup
Ric.init = function(){
    //Rico's sleep left
    Ric.sleep = 84390123;
    Ric.sleeping = true;
    Ric.count = 0;
    Ric.entities.push(
        Ric.createNewEntity('ric', 3000)
    );
};

//Return new entity, and type
Ric.createNewEntity = function(entityType, lifeForce){
    var obj = {};
    obj.type = entityType;
    obj.points = lifeForce;
    obj.container = document.createElement('div');
    if(entityType === 'ric'){
        obj.container.classList.add("ricardo-main-avatar");
        obj.container.setAttribute('id', 'ricardoDiv');
        var ricardoGif = document.createElement('img');
        ricardoGif.setAttribute('src', Ric.baseURL_res + 'Ricardo2.gif');
        obj.container.appendChild(ricardoGif);
    }
    obj.container.classList.add("hidden");
    var x = document.getElementsByTagName("BODY")[0];
    x.appendChild(obj.container);
    return obj;
};

//Update game
Ric.update = function(){
    Ric.count++;

    //RICARDO GETS UPDATED HERE
    //If Ric is sleeping, count down his sleep
    if(Ric.sleeping === true){
        Ric.sleep--;
        if(Ric.sleep < 1){
            Ric.sleeping = false;
            Menu.phraseTick = 0;
            Menu.currentChar = 0;
            Menu.tickPhrases();
            SOUND.RicardoOne.play();
            //SOUND.RicardoVoice.play();
            document.getElementById('ricardoDiv').classList.remove('hidden');
            document.getElementById('ricardoGifDance').setAttribute('src', Ric.baseURL_res + Menu.ricardoGifs[Math.floor(Math.random() * Menu.ricardoGifs.length)])
            document.getElementById('ricardoSpeechBubble').innerText = Menu.ricardoPhrases[Math.floor(Math.random() * Menu.ricardoPhrases.length)];
            //setTimeout(SOUND.CowBell.play(), 2000);
        }
    }
    //RIc is not sleeping
    else{
        //10% chance Ricardo looks for new words
        if(Math.random() < 0.1){
            var g = document.getElementsByClassName('ql-editor')[0].childNodes;

            var usable = [];
            for(var y = 0;y < g.length;y++){
                if(g[y].innerText.length > 2){
                    var ttt = (''+g[y].innerText).split(' ');
                    for(var j = 0;j < ttt.length;j++){
                        usable.push(ttt[j]);
                    }
                }
            }

            for(var h = 0;h < usable.length;h++){
                usable[h] = usable[h].toLowerCase();
            }


            var rrr = usable[Math.floor( Math.random()*usable.length )];
            //var add = rrr.replace(/\n/g, ' ');
            console.log(rrr);
            if(rrr){
                if(rrr.length > 0){
                    Ric.getAllEnglishWordsStartingWith(rrr);
                    //console.log(rrr);
                }
            }
            
            

            
        }
    }

    //Update the rest of the entities
    for(var j = Ric.entities.length-1;j > -1;j--){
        if(Ric.entities[j].update){
            Ric.entities[j].update();
        }
    }
};

Ric.getRic = function(ents){
    for(var i = 0;i < ents.length;i++){
        if(ents[i].type === 'ric') return i;
    }
    return -1;
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
            console.log('New words: ' + JSON.stringify(data));

            //Make sound
            if(data.words.length > 0){
                var newPar = document.createElement('p');
                var val = '';
                for(var p = 0;p < data.words.length;p++){
                    val += data.words[p] + ' ';
                }
                val = data.words[Math.floor(Math.random()*data.words.length)];
                newPar.innerHTML = val;
                var ps = document.getElementsByClassName('ql-editor')[0].childNodes;
                if(ps.length > 0){
                    ps = ps[Math.floor(Math.random()*ps.length)];//editorArea.appendChild(newPar);
                    var newAddition = document.createElement('span');
                    newAddition.classList.add("ql-color-red");
                    //ps.innerHTML += val;
                    newAddition.innerText = val;
                    ps.appendChild(newAddition);
                    Menu.ricardoIntercept(val);
                }
                
            }
            
        }
    };
    
    var command = '?cmd=contains';
    command += '&word=' + beginningOfWord;
    command += '&hits=20';
    Ric.xmlRequest('POST', command, possibleWords);
};


