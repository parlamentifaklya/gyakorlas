function getFirstElement (arr){
    if (arr.length == 0) {
        return "";
    } else {
        return arr[0];
    }
}

const numbers = [1, 2, 3];
const words = ['apple', 'banana&quot', 'cherry'];
console.log(`First number: ${getFirstElement(numbers)}`);
console.log(`First word: ${getFirstElement(words)}`);