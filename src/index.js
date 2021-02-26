module.exports = function toReadable (number) {
   let numberStringified = String(number);

   const basicNumbers = [ //from 0 to 19
        "zero", 
        "one", 
        "two", 
        "three", 
        "four", 
        "five", 
        "six", 
        "seven", 
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen"     
    ];

    const tyNumbers = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety"
    ];

    const hundred = " hundred";

    let word1 = "";
    let word2 = "";
    let word3 = "";

    if (number > 99) {
        word1 = basicNumbers[Math.floor(number / 100)] + hundred; //сотни  345 / 100 = 3
        if (number % 100 === 0) {
            word2 = word3 = "";
           
        } else if (number % 100 > 19) {
            if (number % 100 % 10 === 0) {
                word2 = " " + tyNumbers[numberStringified[1]];
                word3 = "";
            } else word2 = " " + tyNumbers[numberStringified[1]] + " " + basicNumbers[numberStringified[2]];
        } else word3 = " " + basicNumbers[number % 100];
    } else

    if (number > 19 && number < 100) {
        word1 = "";
        if (number % 10 === 0) {  // если 2-значное заканчивается на 0
            word2 = tyNumbers[numberStringified[0]]; //десятки 
            word1 = word3 = "";
        } else { 
            word2 = tyNumbers[numberStringified[0]] + " " + basicNumbers[numberStringified[1]];
        }
    } else

    if (number < 20 ) { 
        word1 = word2 = "";
        word3 = basicNumbers[number];
    }

    return word1 + word2 + word3;
}
