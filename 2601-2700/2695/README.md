
# 2469. Array Wrapper

Create a class `ArrayWrapper` that accepts an array of integers in its constructor. This class should have two features:

- When two instances of this class are added together with the `+` operator, the resulting value is the sum of all the elements in both arrays.
- When the `String()` function is called on the instance, it will return a comma separated string surrounded by brackets. For example, `[1,2,3]`.

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

- See code for implementations.