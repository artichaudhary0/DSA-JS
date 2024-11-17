function combSort(arr) {
    let gap = arr.length;
    let shrink = 1.3;
    let sorted = false;

    while (!sorted) {
        gap = Math.floor(gap / shrink);
        if (gap <= 1) {
            gap = 1;
            sorted = true;
        }

        for (let i = 0; i + gap < arr.length; i++) {
            if (arr[i] > arr[i + gap]) {
                [arr[i], arr[i + gap]] = [arr[i + gap], arr[i]];
                sorted = false;
            }
        }
    }
    return arr;
}

// Example:
console.log(combSort([8, 4, 1, 56, 3, -44, 23, -6, 28])); // [-44, -6, 1, 3, 4, 8, 23, 28, 56]
