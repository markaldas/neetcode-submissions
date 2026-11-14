class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numsCount = {};
        let booleanTF = false;
        for (let i = 0; i < nums.length; i++) {
            // if(numsCount[nums[i]] >= 2) {
            //     // console.log('working')
            //     booleanTF = true;
            //     break;
            // }
            if (numsCount[nums[i]]) {
                numsCount[nums[i]]++
                booleanTF = true;
                break;
            } else if (!numsCount[nums[i]]) {
                numsCount[nums[i]] = 1
            }
        }
        console.log(numsCount)
        return booleanTF;
    }
}
