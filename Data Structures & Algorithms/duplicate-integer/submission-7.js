class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numsSorted = nums.sort((a,b) => a - b);
        let booleanTF = false;
        for (let i = 0; i < numsSorted.length; i++) {
            if (numsSorted[i] === numsSorted[i + 1]) {
                booleanTF = true;
            }
        }
        return booleanTF;
    }
}
