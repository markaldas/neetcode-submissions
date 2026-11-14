class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const obj = {}
        const arr= []
        for (const num of nums) {
            if (!obj[num]) {
                obj[num] = 1
            } else {
                obj[num]++
            }
        }
        // console.log(obj)

        const sortedKeys = Object.keys(obj).sort((a,b) => obj[b] - obj[a]);
        //console.log(`sortedValues: ${sortedValues}`)

        return sortedKeys.splice(0, k);
}

}
