/**
 * @param {string} s
 * @return {number}
 */
const scoreOfString = s => {
    let x = new Array(s.length-1);
    let y = new Number(0);
    s.split('').forEach((v,i) => {
        if (i+1 < s.length) x[i] = s[i].charCodeAt(0) - s[i+1].charCodeAt(0)
    })
    for (const value of x) y += Math.abs(value);
    return y;
};