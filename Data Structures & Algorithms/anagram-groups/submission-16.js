class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
    //     let map = {};
    //     let groupAnagramArr = [];
    //     for (let i = 0; i < strs.length; i++) {
    //         let anagramArr = [strs[i]]
    //         let firstSortedWord = strs[i].split('').sort().join('');
    //         if(map[firstSortedWord] !== undefined) {
    //             continue;
    //         }
    //         for (let j = i + 1; j < strs.length; j++) {
    //             let secondSortedWord = strs[j].split('').sort().join('');
    //             if(firstSortedWord === secondSortedWord) {
    //                 anagramArr.push(strs[j].trim());
    //             }
    //         }
    //         map[firstSortedWord] = anagramArr;
    //     }
    //     console.log(map);

    //     for (const key in map) {
    //         groupAnagramArr.push(map[key]);
    //     }
    //     return groupAnagramArr;
        const hash = {};
        
        for (const str of strs) {
            const key = str.split("").sort().join("");
            if (!hash[key]) hash[key] = [];
            hash[key].push(str);
        }
        
        const result = Object.values(hash);
        return result
    }

}
