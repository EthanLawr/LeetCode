/**
 * @param {number[]} nums
 * @return {void}
 */
const ArrayWrapper = function(nums) {
    this.nums = nums;
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function(val = 0) {
    for (x of this.nums) val+=x;
    return val;
}

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function() {
    return `[${this.nums}]`;
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */

