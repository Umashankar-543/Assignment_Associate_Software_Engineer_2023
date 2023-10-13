const inputSentence = prompt("Enter a sentence:");

function reverseWords(sentence) {
    const words = sentence.split(' '); // Split the sentence into words
    const reversedWords = words.map(word => word.split('').reverse().join('')); // Reverse each word
    const reversedSentence = reversedWords.join(' '); // Join the reversed words
    return reversedSentence;
}

const reversedSentence = reverseWords(inputSentence);
alert(`Reversed sentence: ${reversedSentence}`);
