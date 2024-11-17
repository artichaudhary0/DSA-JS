function bucketSort(arr, bucketSize = 5) {
    if (arr.length <= 1) return arr;

    let min = Math.min(...arr);
    let max = Math.max(...arr);

    let bucketCount = Math.floor((max - min) / bucketSize) + 1;
    let buckets = Array.from({ length: bucketCount }, () => []);

    arr.forEach((num) => {
        buckets[Math.floor((num - min) / bucketSize)].push(num);
    });

    arr = [];
    buckets.forEach((bucket) => {
        bucket.sort((a, b) => a - b); // Sort each bucket (can use any sort method)
        arr.push(...bucket);
    });

    return arr;
}

console.log(bucketSort([42, 32, 33, 52, 37, 47, 51])); // [32, 33, 37, 42, 47, 51, 52]
