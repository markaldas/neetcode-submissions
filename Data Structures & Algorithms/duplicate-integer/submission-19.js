class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numsCount = {};
        let booleanTF = false;
        for (let i = 0; i < nums.length; i++) {
            if (numsCount[nums[i]]) {
                numsCount[nums[i]]++
            } else if (!numsCount[nums[i]]) {
                numsCount[nums[i]] = 1
            }
             if(numsCount[nums[i]] >= 2) {
                booleanTF = true;
                break;
            }
        }
        return booleanTF;
    }
}
