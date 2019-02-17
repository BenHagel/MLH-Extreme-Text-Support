var Ricardo = {};
Ricardo.knownWords = [];

Ricardo.init = function(){
    console.log('Server Helperrrrr!');
    Ricardo.knownWords = (''+fs.readFileSync('database/englishwords.txt')).split('\n');
    console.log(Ricardo.knownWords.length + ' words found');
};

Ricardo.handleApi = function(req, res){
    if(req.query.cmd === 'contains'){
        var hits = Number(req.query.hits);
        var word = '' + req.query.word;
        console.log(word);
        var results = {};
        results.words = [];
        for(var i = 0;i < Ricardo.knownWords.length;i++){
            if(Ricardo.knownWords[i].includes(word)){
                results.words.push(Ricardo.knownWords[i])
            }
            if(results.words.length > hits) break;
        }
        res.json(results);
    }
    else{
        res.json({"Error":"erroro"});
    }
};

