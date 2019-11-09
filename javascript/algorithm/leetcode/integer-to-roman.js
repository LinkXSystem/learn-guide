/**
 * @param {number} num
 * @return {string}
 */
const IntToRoman = function(num) {
  const CodeTables = {
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M"
  };

  const temp_ = num.toString();
  let denominator = num;
  let sentence = "";

  for (let i = 0; i < temp_.length; i++) {
    const molecule = Math.pow(10, temp_.length - (i + 1));
    const result = Math.floor(denominator / molecule) * molecule;
    denominator = denominator - result;
    if (result in CodeTables) {
      sentence = sentence.concat(CodeTables[result]);
      continue;
    }

    const unit = CodeTables[molecule];

    if (result > 5) {
      result = result - 5;
      sentence.concat(CodeTables[result]);
    }

    const value = unit.repeat(result);

    sentence = sentence.concat(value);
  }

  console.warn("sentence: ", sentence);
};

(function() {
  let number = 1994;
  IntToRoman(number);
})();
