// SUM, SUBTRACT, MULTIPLY, DIVIDE
function sum(a,b) {
  return a + b;
};
// EXPONENT NUMBER 
function pow(x, n) {
  return (n == 1) ? x  : (x * pow(x, n - 1));
};
// ARRAYS
function getLength(arr) { // should return length of arr
  return arr.length;
};
function getFirst(arr) { // should return the first element of arr
  return arr[0];
};
function getLast(arr) { // should return the last element of arr
  return arr[arr.length - 1]
};
function pushElement(arr) { // should add an element to arr, and then return arr
  let el = 1;
  arr.push(el);
  return arr;
};
function popElement(arr) { // should remove an element from arr, and then return arr
  arr.pop();
  return arr;
};

// CHECK IF PALINDROME
let phraseToCheck = "madam";
let reversedPhrase = '';

for (let index = phraseToCheck.length - 1 ; index >= 0; index--) {
  const phraseLetter = phraseToCheck[index]; 
  reversedPhrase += phraseLetter;
}

if (phraseToCheck === reversedPhrase) {
  console.log(`Word ${phraseToCheck} is a Palindrome`);
} else {
  console.log(`Word ${phraseToCheck} is not a Palindrome`);
}

// SORT NUMBERS IN ASCENDING ORDER 
const numbers = [1, 34, 65, 4, 5, 69, 7, 80, 9, 10]; 
const numbersSorted = numbers.sort((firstItem, secondItem) => firstItem - secondItem);
console.log('Sort numbers in ascending order:', numbersSorted);

// SORT NUMBERS IN DESCENDING ORDER 
const numbersDescending = numbers.sort((a,b) => b - a);
console.log('Sort numbers in descending order:', numbersDescending)

// GET HIGHEST VALUE IN ARRAY 
console.log('Highest value in array', numbersDescending[0]);

// SORT WORDS IN ASCENDING ORDER 
const animals = ['elephant', 'bee', 'jiraffe', 'cat'];
const animalsSorted = animals.sort();
console.log('Sort words in ascending order:', animalsSorted);

// REDUCE 
const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];
function tallyNumbers(tally, currentTotal) {
  return tally + currentTotal;
};
const allOrders = orderTotals.reduce(tallyNumbers, 0)
console.log('Sum with reduce:', allOrders);

// TOTAL IN ARRAY WITH REDUCE
const inventory = [
{ type: 'shirt', price: 4000 },
{ type: 'pants', price: 4532 },
{ type: 'socks', price: 234 },
{ type: 'shirt', price: 2343 },
{ type: 'pants', price: 2343 },
{ type: 'socks', price: 542 },
{ type: 'pants', price: 123 },
];
const totalInventory = inventory.reduce((acc, item) => acc + item.price, 0);
console.log('Total inventory is:', totalInventory);

// SUM NUMBERS IN ARRAY WITH FOREACH
let total = 0;
orderTotals.forEach(singleTotal => {
total += singleTotal;
});
console.log('Sum with foreach:', total)

// FOR LOOP 
const numbers2 = [2, 34, 3, 23, 42, 3, 1, 65, 364, 5, 645, 6];
  for (let i = 0; i <= numbers.length; i++) {
}; 

//-------------------------------------------

// LEVEL 1: NOOB - CREATE A FUNCTION THAT WILL TELL IF A PASSED NUMBER IS ODD OR EVEN
function isOdd(number) {
  return number % 2 ? `Number ${number} is odd` : `Number ${number} is even`;
};
console.log(isOdd(22));

// LEVEL 2: APPRENTICE - CREATE A FUNCTION THAT REVERSES WORDS
// FAST WAY
function reverser(word) {
  return word.split('').reverse().join('') 
};
console.log('Reversing a word:', reverser('gladys'));

// SLOW WAY
function reverseWord(word) {
  const separateWord = word.split('');
  const finalWord = [];
  separateWord.forEach(function(_, index) {
    let last = separateWord[separateWord.length - (index + 1)];
    finalWord.push(last);
  })
  return finalWord.join('');
}
console.log('Reversing a word:', reverseWord('Enrique'))

// ONELINER
const reverse = (word) => word.split('').map((item, i) => word[word.length - (i + 1)]).join('');
const result = reverse('enrique');
console.log('Reversing a word:', result);

// LEVEL 3: NOVICE - CREATE A FUNCTION THAT WILL ORDER ALPHABETICALLY A GIVEN WORD
function orderAlphabetically(word) {
   return word.split('').sort().join('');
};
console.log('Ordering alphabetically:', orderAlphabetically('zeus'))

// LEVEL 4: ROOKIE - CREATE A FUNCTION THAT WILL FIND AND PRINT THE LONGEST WORD IN AN ARRAY
const randomWords = ["caricaturas", "zeus", "bigotes", "popeye", "mac", "solar", "jupiter", "soñadores"];

function longestWord(words) {
  let longestLength = 0;
  let longestWordSoFar = undefined;
  words.forEach(function(word) {
     const length = word.length;
     if (length > longestLength) {
       longestLength = length
       longestWordSoFar = word
     }
  })
  return longestWordSoFar;
};
console.log('Checking longest word:', longestWord(randomWords));

// LEVEL 5: CODER - CREATE A FUNCTION THAT FINDS DUPLICATED WORDS IN A LIST AND PRINTS THE NUMBER OF DUPLICATES AS WELL
const duplicates = ["cacatua", "chicle", "avestruz", "circulo", "lagarto", "circulo", "payaso", "papaya", "melon", "chicle", "cacatua"];


// WRITE A FUNCTION THAT DETERMINES IF X IS AN INTEGER
function isInteger(x){
   return Number.isInteger(x);
};
console.log('Checking integers:', isInteger(5)); 

//-----------------------------------------------------------------------------------------------------

// CODILITY TEST
// Write a function: that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.
// For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.
function solution(n) {
  const convertNumberToBinary = n.toString(2);
  const array = convertNumberToBinary.split('');

  let total = 0;
  let startCounting = undefined;

  array.forEach(function(num) {
    if (startCounting === false) {
      return;
    }
    if (Number(num) === 1) {
      if (startCounting === undefined) {
        startCounting = true;
      } else {
        startCounting = false;
      }
    } else {
      total += 1;
    }
  })
  if (startCounting !== false) {
    return 0;
  } else {
    return total;
  }
};
console.log('Finding zeros in a binary gap:', solution(1041));