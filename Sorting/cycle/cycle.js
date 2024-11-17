function cycleSort(arr) {
    for (let start = 0; start < arr.length - 1; start++) {
        let item = arr[start];
        let pos = start;

        for (let i = start + 1; i < arr.length; i++) {
            if (arr[i] < item) pos++;
        }

        if (pos === start) continue;

        while (item === arr[pos]) pos++;

        [arr[pos], item] = [item, arr[pos]];

        while (pos !== start) {
            pos = start;
            for (let i = start + 1; i < arr.length; i++) {
                if (arr[i] < item) pos++;
            }
            while (item === arr[pos]) pos++;
            [arr[pos], item] = [item, arr[pos]];
        }
    }
    return arr;
}

console.log(cycleSort([1, 8, 3, 9, 10, 10, 2, 4])); // [1, 2, 3, 4, 8, 9, 10, 10]
