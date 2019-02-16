var Ricardo = {};
Ricardo.knownWords = [];

Ricardo.init = function(){
    console.log('Server Helperrrrr!');
    Ricardo.knownWords = (''+fs.readFileSync('database/englishwords.txt')).split('\n');
    console.log(Ricardo.knownWords.length + ' words found');
};

Ricardo.handleApi = function(req, res){
    
};

