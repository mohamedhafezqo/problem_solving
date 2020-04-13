// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]

// link: https://leetcode.com/problems/group-anagrams/
// status: Medium

var groupAnagrams = function(strs) {
    let dic = {};
    let length = strs.length;
    let result = new Array();

    for (let i = 0; i < length; i++) {
        let sortedI = strs[i].split("");
        sortedI = (sortedI.sort()).join("");

        if (!dic[sortedI]) {
          dic[sortedI] = new Array();
        }
        
        dic[sortedI].push(strs[i]);
    }

    for([key, val] of Object.entries(dic)) {
      result.push(val);
    }

    return result;
};
