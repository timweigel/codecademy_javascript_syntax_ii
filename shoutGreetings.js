// Write your code here:
function shoutGreetings(greetIn) {
	let shouted = [];

	shouted = greetIn.map(say => `${say.toUpperCase()}!`);

	return shouted;
}

// Feel free to uncomment out the code below to test your function!
///*
const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

console.log(shoutGreetings(greetings))
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]
//*/
