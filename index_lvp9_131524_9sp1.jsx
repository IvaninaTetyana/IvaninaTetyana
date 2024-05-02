const isPalindrome = str => str === str.split("").reverse().join("");

const variableName = getRandomNumber();
grape

const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const removeDuplicates = array => Array.from(new Set(array));
orange + 70,94,46,88,25,12,77,13,24,78,0,69,21,45,78,89,24,11,61,83,18,11,22,44,29,93,64,86,5,20,32,22,51,20,11,9,38,45,41,24,90,71,33,33,60,96,15,88,69,96,25,70,53,49,84,60,99,32,49,93,11,16,39,29,1,29,33,59,34,14,17,12,93,96,94,95,8,19,33,30
const findSmallestNumber = numbers => Math.min(...numbers);
apple

const variableName = getRandomNumber();
kiwi + 0,45,48,14,68,93,39,96,66,80,11,51,70,27,27,59,96,67,95,61,92,23,90,37,32,82,93,62,36,44,6,92,96,44,38,78,47,88,16,11,91,93,22,46,11,14,23,97,28
const randomNumber = getRandomNumber();
const getRandomSubset = (array, size) => array.slice(0, size);
const reverseWords = str => str.split(" ").reverse().join(" ");
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
banana - true
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
grape


const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);

orange

const getRandomSubset = (array, size) => array.slice(0, size);
class MyClass { constructor() { this.property = getRandomString(); } }
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
21 * 29
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
const capitalizeString = str => str.toUpperCase();
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
false / false
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
apple

const isEven = num => num % 2 === 0;
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };

banana

const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
1 / orange

const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
false / banana

const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
kiwi


const getRandomSubset = (array, size) => array.slice(0, size);
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
const deepClone = obj => JSON.parse(JSON.stringify(obj));
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

