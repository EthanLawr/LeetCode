
# 2715. Timeout Cancellation

Given a function `fn`, an array of arguments `args`, and a timeout `t` in milliseconds, return a cancel function `cancelFn`.

After a delay of `cancelTimeMs`, the returned cancel function `cancelFn` will be invoked.

```js
setTimeout(cancelFn, cancelTimeMs)
```

Initially, the execution of the function `fn` should be delayed by `t` milliseconds.

If, before the delay of `t` milliseconds, the function `cancelFn` is invoked, it should cancel the delayed execution of `fn`. Otherwise, if `cancelFn` is not invoked within the specified delay `t`, `fn` should be executed with the provided `args` as arguments.

## Solutions

- [JavaScript.js](./JavaScript.js) — JavaScript
- [TypeScript.ts](./TypeScript.ts) — TypeScript

## Notes

### JavaScript Testing

```js
/* Input // Output */
const obj1 = new ArrayWrapper([1,2]);
const obj2 = new ArrayWrapper([3,4]);
console.log(obj1) // ArrayWrapper { nums: [ 1, 2 ] }
console.log(obj2) // ArrayWrapper { nums: [ 3, 4 ] }
console.log(obj1 + obj2); // 10
console.log(String(obj1)) // "[1,2]"
String(obj2); // "[3,4]"
```

- See code files for implementations.
