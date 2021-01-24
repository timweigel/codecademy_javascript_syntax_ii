//const input = 'turpentine and turtles';
//const input = 'Gonna translate this into whale talk!';
//const input = 'One more time for the folks up in the stands.'
const input = 'Up the hill stood Ulysses.'
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];

for (let c = 0; c < input.length; c++) {
  //console.log(`Position: ${c}; value: ${input[c]}`); // Check condition
  for (let v = 0; v < vowels.length; v++) {
    //console.log(`Position: ${v}, value: ${vowels[v]}`)// Check condition
	
	/*
		The toLowerCase() below is something I added on my own to allow
		input in sentence case with capitalized vowels to count.
	*/
	if (input[c].toLowerCase() === vowels[v]) { 
      //console.log(`Input position ${c}, value ${input[c]} matches Vowels position ${v}, value ${vowels[v]}`) // Check condition
      resultArray.push(input[c]);
     
      if (input[c] === 'e') {
        resultArray.push(input[c]);
      }
      if (input[c] === 'u') {
        resultArray.push(input[c]);
      }
    }
  }
}

console.log(resultArray.join('').toUpperCase());