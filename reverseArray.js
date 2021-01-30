// Write your code here:
function reverseArray(arrayIn) {
	const arrayLen = arrayIn.length;
	let newArray = [];

	// My first thought was to loop backwards, which works nicely.
	for (i = arrayLen -1 ; i >= 0; i--) {
    	newArray.push(arrayIn[i]);
    }
  
	return newArray;
}
// When you're ready to test your code, uncomment the below and run:
///* 
const sentence = ['sense.','make', 'all', 'will', 'This'];

console.log(reverseArray(sentence));
// Should print ['This', 'will', 'all', 'make', 'sense.'];
//*/

/*
	After confirming that the backwards looping method worked,
	I checked the hint. It mentioned using the unshift() method,
	which I hadn't thought about. I gave it a go for fun.
*/
function reverseArray2(arrayIn) {
	const arrayLen = arrayIn.length;
	let newArray = [];
	 
	// A little easier on the syntax...
	for (i = 0; i < arrayLen; i++) {
    	newArray.unshift(arrayIn[i]);
  	}

  	return newArray;
}

const sentence2 = ['sense.','make', 'all', 'will', 'This'];

console.log(reverseArray2(sentence2));