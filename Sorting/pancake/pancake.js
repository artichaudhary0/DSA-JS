function pancakeSort(arr) {
    function flip(subArray, k) {
        for (let i = 0; i < Math.floor(k / 2); i++) {
            [subArray[i], subArray[k - i - 1]] = [subArray[k - i - 1], subArray[i]];
        }
    }

    for (let i = arr.length; i > 1; i--) {
        let maxIdx = 0;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[maxIdx]) maxIdx = j;
        }
        if (maxIdx !== i - 1) {
            flip(arr, maxIdx + 1);
            flip(arr, i);
        }
    }
    return arr;
}

console.log(pancakeSort([3, 6, 1, 5, 2, 4])); // [1, 2, 3, 4, 5, 6]
