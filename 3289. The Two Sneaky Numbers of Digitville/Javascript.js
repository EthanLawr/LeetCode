/**
 * @param {number[]} nums
 * @return {number[]}
 */
const getSneakyNumbers = nums => {
    let array = new Array();
    nums.filter((i,j)=> nums.indexOf(i) !== j ? array.push(i) : 0)
    return array;
}