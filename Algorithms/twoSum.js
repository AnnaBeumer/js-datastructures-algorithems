function twoSum(numArr, sum){
    var retVal = [];
    for(var i = numArr.length-1; i >= 0; i--){
        var basis = numArr[i];
        for(var j = i-1; j >= 0; j--){
            var basisMinEen = numArr[j];
            console.log(basisMinEen);
            if(basis + basisMinEen === sum){
                var uitkomst = [];
                uitkomst.push(basis);
                uitkomst.push(basisMinEen);
                retVal.unshift(uitkomst);

            }
        }
    }
    return retVal;
}

console.log(twoSum([1,6,4,5,3,3] , 7));
console.log('klaar');