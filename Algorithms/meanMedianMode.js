function getMean(array){
    //alles bij elkaar optellen en delen door length
    var totaal = 0;
    array.forEach(num=>{
        totaal= totaal + num;
    });
    var result = totaal / array.length;
    return result;
}

function getMedian(array){
    //eerst op volgorde dan middelste pakken, zijn het er 2 dan die bij elkaar optellen en delen door 2
    array.sort(function(a,b){return a-b});
    var result = 'na';
    if(array.length %2 !== 0){
       var mid = Math.floor(array.length / 2);
       result = array[mid];
    }else{
        var midHigh = array.length / 2;
        var midLow = array.length / 2 - 1; 
        result = (array[midHigh]+ array[midLow]) / 2;
    }
    return result;
}

function getMode(array){
    var modeObj = {};
    array.forEach(num=>{
        if(!modeObj[num]){
            modeObj[num] = 1;
        } else{
            modeObj[num]++;
        }
    });
    var modes = [];
    var hoogsteGetal = 0;
    for(num in modeObj){
        var mode = num;
        var frequentie = modeObj[num];
        if(frequentie > hoogsteGetal){
            modes = [mode];
            hoogsteGetal = frequentie;
        } else if(frequentie=== hoogsteGetal){
            modes.push(mode);
        }
    }
    return modes.join(',');
}

function meanMedianMode(array){
    return{
        mean: getMean(array),
        median: getMedian(array),
        mode: getMode(array)
    }
}

console.log(meanMedianMode([1,2,3,4,6,6,2]));