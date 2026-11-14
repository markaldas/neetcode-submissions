class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let indicesArr = [];

        for(let i = 0; i < nums.length; i++) {
            for(let j = i + 1; j < nums.length; j++) {
                // console.log(nums[i])
                console.log(nums[j])
                if(nums[i] + nums[j] === target) {
                    console.log('worksin')
                    indicesArr.push(i);
                    indicesArr.push(j);
                    return indicesArr;
                }
            }
        }
    }
}
