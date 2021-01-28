let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWords = story.split(' ');

let wordCount = storyWords.length;
//console.log(wordCount);

/*
Pseudo-code for step 3:
filter storyWords to exclude the words in unnecessaryWords
(.includes() may be helpful)

If unnecessaryWords does not include storyWord, write to betterWord
*/

/*
// The laborious way...
let betterWords = storyWords.filter( 
	word => word != unnecessaryWords[0]
);

betterWords = betterWords.filter(
	word => word != unnecessaryWords[1] 
)

betterWords = betterWords.filter(
	word => word != unnecessaryWords[2] 
)
*/

// I can do better than that. This works well
let betterWords = storyWords.filter(
	word => !unnecessaryWords.includes(word)
);

let betterWordCount = betterWords.length;
//console.log(betterWordCount);

/*
Pseudo-code for step 4:
Count how often the overusedWords are used.
*/
// Get some variables for the counts of each word
let extremelyCount = 0;
let literallyCount = 0;
let actuallyCount = 0;

let processOverused = betterWords.forEach(
	word => {if (word === overusedWords[0]) {
			extremelyCount++;
		} else if (word === overusedWords[1]) {
			literallyCount++;
		} else if (word === overusedWords[2]) {
			actuallyCount++;
		}
	}
);

//console.log(extremelyCount);
//console.log(literallyCount);
//console.log(actuallyCount);

// Count how many sentences.
let sentenceCount = 0;
let countSentences = betterWords.forEach(
	word => {if (word.includes('!') || word.includes('.')) {
			sentenceCount++;
		}
	}
);

//console.log(sentenceCount);

console.log(`There are ${wordCount} words in the story before improvement.`);
console.log(`There are ${betterWords} words in the story after improvement.`);
console.log(`There are ${sentenceCount} sentences in the story`);
console.log(`You have used 'extremely' ${extremelyCount} times, 'literally' ${literallyCount} times, and 'actually' ${actuallyCount} times.`);
console.log(betterWords.join(' '));
