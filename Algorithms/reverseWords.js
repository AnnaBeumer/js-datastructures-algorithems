function reverseWords(string){
    var revzin = '';
    var eachWord = string.split(' ');
    for (var i = 0; i < eachWord.length; i++){
        var word = eachWord[i];
        var revword = '';
        for (var j = word.length-1; j >= 0; j--){
            revword+=word[j];
        }
        revzin+=revword+' ';
    };
    return revzin;
}

console.log(reverseWords('The quick brown fox jumpes over the lazy dog'));
console.log('klaar');