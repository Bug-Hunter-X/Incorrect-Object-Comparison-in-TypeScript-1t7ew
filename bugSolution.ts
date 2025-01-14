function deepCompare(obj1: any, obj2: any): boolean {
  // Check if both objects are null or undefined
  if (obj1 === obj2) return true;
  if (obj1 === null || obj2 === null) return false;

  // Check if both objects are of different types
  if (typeof obj1 !== typeof obj2) return false;

  // Check if both objects are arrays or objects
  if (Array.isArray(obj1) || typeof obj1 === 'object') {
    if (!Array.isArray(obj2) && typeof obj2 !== 'object') return false;

    // Compare arrays or objects recursively
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) return false;

    for (let key of keys1) {
      if (!deepCompare(obj1[key], obj2[key])) {
        return false;
      }
    }
    return true;
  }
  // Compare primitive types
  return obj1 === obj2;
}

const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 2 };
const obj3 = { a: 1, b: 3 };
const obj4 = { a: 1, b: 2, c: 3 };
const obj5 = { a: 1, b: { c: 3 } };
const obj6 = { a: 1, b: { c: 3 } };

console.log(deepCompare(obj1, obj2)); // true
console.log(deepCompare(obj1, obj3)); // false
console.log(deepCompare(obj1, obj4)); // false
console.log(deepCompare(obj5, obj6)); // true
console.log(deepCompare(null, null)); // true
console.log(deepCompare(obj1, null)); // false
console.log(deepCompare(null, obj2)); // false