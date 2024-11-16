function countingSort(arr, max) {
    let count = Array(max + 1).fill(0);

    for (let num of arr) count[num]++;
    let sorted = [];

    for (let i = 0; i <= max; i++) {
        while (count[i] > 0) {
            sorted.push(i);
            count[i]--;
        }
    }
    return sorted;
}

console.log(countingSort([4, 2, 2, 8, 3, 3, 1], 8)); // [1, 2, 2, 3, 3, 4, 8]
