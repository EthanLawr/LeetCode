/**
 * @param {number[]} nums
 * @return {number}
 */

const numIdenticalPairs = nums => {
    let x = 0;
    for (let i = 0; i < nums.length; i++)
        for (let j = 0; j < nums.length; j++)
            if (i !== j && nums[i] == nums[j] && i < j) x++;
   return x;
}

// Alternative Solution
/*
const numIdenticalPairs = nums => {
    let x = 0;
    for (let i = 0; i < nums.length; i++)
        for (let j = 0; j < nums.length; j++)
            if (i !== j && nums[i] == nums[j]) x++;
   return x/2;
};
*/

