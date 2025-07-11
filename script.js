function toRoman(x) {
  if (x === 0) return ''; // Important: Roman numerals do not represent 0

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
    while (x >= value) {
      result += roman;
      x -= value;
    }
  }

  return result;
}

// Do NOT console.log here if the platform calls your function automatically
// The function must return the string only

