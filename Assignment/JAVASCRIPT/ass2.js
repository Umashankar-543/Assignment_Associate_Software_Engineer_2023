const inputNumbers = prompt("Enter a list of numbers separated by commas:");

function sortDescending(array) {
    return array.sort((a, b) => b - a); 
}

const numbers = inputNumbers.split(',').map(num => parseFloat(num));

const sortedNumbers = sortDescending(numbers);
alert(`Sorted array in descending order: ${sortedNumbers}`);
