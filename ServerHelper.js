var Ricardo = {};
Ricardo.knownWords = [];

Ricardo.init = function(){
    console.log('Server Helperrrrr!');
    Ricardo.knownWords = (''+fs.readFileSync('database/englishwords.txt')).split('\n');
    console.log(Ricardo.knownWords.length + ' words found');
};

Ricardo.handleApi = function(req, res){
    if(req.query.cmd === 'wallet_and_balance'){
        var val = Number(req.query.mp);
        
    }
    else{
        
    }
};

