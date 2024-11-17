function cocktailShakerSort(arr) {
    let start = 0;
    let end = arr.length - 1;
    let swapped = true;

    while (swapped) {
        swapped = false;

        for (let i = start; i < end; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
        end--;

        for (let i = end; i > start; i--) {
            if (arr[i] < arr[i - 1]) {
                [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
                swapped = true;
            }
        }
        start++;
    }
    return arr;
}
console.log(cocktailShakerSort([5, 3, 4, 1, 2])); // [1, 2, 3, 4, 5]
