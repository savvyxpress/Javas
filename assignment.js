function multiplicationTable(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= n; j++) {
            row += (i * j) + '\t';
        }
        console.log(row);
    }
}


multiplicationTable(5);

  
function stringSize(inputString) {
    let numAlphabets = 0;
    let numDigits = 0;
    let numSymbols = 0;

    for (const char of inputString) {
        if (/[a-zA-Z]/.test(char)) {
            numAlphabets++;
        } else if (/[0-9]/.test(char)) {
            numDigits++;
        } else {
            numSymbols++;
        }
    }

    console.log(`Alphabets: ${numAlphabets}`);
    console.log(`Digits: ${numDigits}`);
    console.log(`Symbols: ${numSymbols}`);
}

// Example usage
const inputStr = 'Hello World123!';
stringSize(inputStr);




function generateStar(maxStars) {
    for (let i = 1; i <= maxStars; i++) {
      console.log('*'.repeat(i));
    }
  }
  
  generateStar(3);
   
