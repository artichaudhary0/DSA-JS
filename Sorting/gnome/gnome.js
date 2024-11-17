function gnomeSort(arr) {
    let index = 0;

    while (index < arr.length) {
        if (index === 0 || arr[index] >= arr[index - 1]) {
            index++;
        } else {
            [arr[index], arr[index - 1]] = [arr[index - 1], arr[index]];
            index--;
        }
    }
    return arr;
}

console.log(gnomeSort([34, 2, 10, -9])); // [-9, 2, 10, 34]
