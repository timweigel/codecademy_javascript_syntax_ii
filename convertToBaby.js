// Write your code here:
function convertToBaby(arrayIn) {
  const arrayLength = arrayIn.length;
  let newArray = []
  for (i = 0; i < arrayLength; i++) {
    newArray.push(`baby ${arrayIn[i]}`);
  }

  return newArray;
}

// When you're ready to test your code, uncomment the below and run:
///*
const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals)) 
