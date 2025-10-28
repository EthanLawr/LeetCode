/**
 * @param {string[]} operations
 * @return {number}
 */
const finalValueAfterOperations = (operations, x = 0) => {
    for (v in operations)
        if (operations[v].includes("+")) x++;
        else if (operations[v].includes("-")) x--;
    return x;
};