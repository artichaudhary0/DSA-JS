function radixSort(arr) {
    let max = Math.max(...arr);
    let exp = 1;

    while (Math.floor(max / exp) > 0) {
        countingSortByDigit(arr, exp);
        exp *= 10;
    }
    return arr;
}

function countingSortByDigit(arr, exp) {
    let count = Array(10).fill(0);
    let output = Array(arr.length);

    for (let num of arr) count[Math.floor(num / exp) % 10]++;
    for (let i = 1; i < 10; i++) count[i] += count[i - 1];
    for (let i = arr.length - 1; i >= 0; i--) {
        let digit = Math.floor(arr[i] / exp) % 10;
        output[--count[digit]] = arr[i];
    }
    for (let i = 0; i < arr.length; i++) arr[i] = output[i];
}

console.log(radixSort([170, 45, 75, 90, 802, 24, 2, 66])); // [2, 24, 45, 66, 75, 90, 170, 802]
