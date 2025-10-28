/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
const recoverOrder = (order, friends) => {
    let array = new Array()
    for (i of order) for (j of friends) if (i == j) array.push(i)
    return array;
};