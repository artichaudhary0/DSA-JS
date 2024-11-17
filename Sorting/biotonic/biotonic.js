function bitonicSort(arr, up = true) {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let first = bitonicSort(arr.slice(0, mid), true);
    let second = bitonicSort(arr.slice(mid), false);

    return bitonicMerge(first.concat(second), up);
}

function bitonicMerge(arr, up) {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    for (let i = 0; i < mid; i++) {
        if ((arr[i] > arr[i + mid]) === up) {
            [arr[i], arr[i + mid]] = [arr[i + mid], arr[i]];
        }
    }

    let first = bitonicMerge(arr.slice(0, mid), up);
    let second = bitonicMerge(arr.slice(mid), up);
    return first.concat(second);
}

console.log(bitonicSort([3, 7, 4, 8, 6, 2, 1, 5])); // [1, 2, 3, 4, 5, 6, 7, 8]
