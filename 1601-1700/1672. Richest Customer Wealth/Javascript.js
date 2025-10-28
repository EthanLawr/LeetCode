/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = accounts => {
    let x = 0;
    for (let i = 0; i < accounts.length; i++)
        for (let j = 0; j < accounts[i].length; j++)
            x < accounts[i].reduce((t,u) => t+u, 0) ? x= accounts[i].reduce((t,u) => t+u, 0) : 0;
    return x;
};