/**
 * @param {number} num
 * @param {number} t
 * @return {number}
 */
const theMaximumAchievableX = (num, t) => {
    for(let i = 0; i < t; i++) num+=2;
    return num;
};