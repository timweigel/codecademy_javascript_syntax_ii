// Write your code here:
function sortYears(yearsIn) {
	//let yearsOut = [];
	yearsIn.sort();
	
	/*
		I started to overthink here until I remembered that there's a
		built-in method to reverse arrays. The hint in the exercise
		points you towards making your own function, but reverse() is
		a thing, and I'm gonna use it.
		reverse() modifies the existing array, so I was able to remove
		the yearsOut array I created above; commenting it out above
		instead of just removing it to show my process.
	*/
	//yearsIn.forEach(yearsOut.) 
	yearsIn.reverse()

	return yearsIn;
}

// Feel free to uncomment the below code to test your function:
///*
const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

console.log(sortYears(years))
// Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]
//*/