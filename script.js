function toRoman(num) {
  if (num <= 0) return ''; // Roman numerals do not represent 0 or negative numbers

  const symbols = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];

  let result = '';

  for (let [roman, value] of symbols) {
    while (num >= value) {
      result += roman;
      num -= value;
    }
  }

  return result;
}

// Example usage
console.log(toRoman(14));   // Output: XIV
console.log(toRoman(798));  // Output: DCCXCVIII
console.log(toRoman(0));    // Output: (empty string)

