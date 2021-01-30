/*
	I suspected early on that using i in the outer loop the way it originally 
	was used would mess with the control logic. I tossed some console.log()s
	in to validate it as a matter of caution. Based on my experience writing
	complex SQL procedures, it's a Good Idea to be generous with your
	debugging statements like that, even if you (think) you 110% cross-your
	-heart-and-kiss-your-elbow know what the problem is. In THIS example
	it was easy, but in more complex (or even other simple ;) ) scenarios 
	you can be surprised.
*/
const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
	let results = [];
	//console.log(`array length: ${arr.length}`)
	
	// The 'outer' for loop - loops through each element in the array
	for (let i = 0; i < arr.length; i++) {
		number = arr[i];
			
		//console.log(`number: ${number}`)
		// The 'inner' while loop - searches for smallest power of 2 greater than the given number
			
		// changing i to j - this is messing up the counters
		// all the 'j's here were 'i's before
		j = 1;
		while (j < number) {
			//console.log(`j before: ${j}`)
			j = j * 2;
			//console.log(`j after *2: ${j}`)
		}
		
		//console.log(`value pushed into results: ${j}`)
		results.push(j);
	}
	return results
	//console.log(results)
}

console.log(smallestPowerOfTwo(numbers)) 
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]