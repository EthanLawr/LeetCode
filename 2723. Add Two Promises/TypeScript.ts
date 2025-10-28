type P = Promise<number>

async function addTwoPromises(promise1: P, promise2: P): P {
    let x, y: number;
    x = await promise1.then(res => {return res});
    y = await promise2.then(res => {return res});
    return x + y;
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */