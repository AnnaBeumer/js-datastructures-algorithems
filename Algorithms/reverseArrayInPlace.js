function reverseArrayInPlace(arr) {
    var rechterIndex = arr.length - 1;
    for (var linkerIndex = 0; linkerIndex <= rechterIndex; linkerIndex++) {
        var temp = arr[linkerIndex];

        arr[linkerIndex] = arr[rechterIndex];
        arr[rechterIndex] = temp;

        rechterIndex--;
    }
    return arr;
}

console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));