/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
The overall run time complexity should be O(log (m+n)).

Example 1:
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

Example 2:
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 

Constraints:
nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-10^6 <= nums1[i], nums2[i] <= 10^6
*/

var merge = function(nums1, nums2) {
    let array = [...nums1, ...nums2] 
    array.sort((a,b)=>a-b)
    let median
    let mid 
    let length = array.length

    if( length % 2 != 0 )
    {
        mid = Math.floor(length/2)
        median = array[mid]
    }else{
        mid = Math.floor(length/2);
        median = (array[mid-1] + array[mid])/2
    }

    return median
};

console.log(merge([1,2],[3,4]))


