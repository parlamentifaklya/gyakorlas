function getFirstElement (arr){
    return arr[0];
}

const numbers = [1, 2, 3];
const words = ['apple', 'banana&quot', 'cherry'];
console.log(`First number: ${getFirstElement(numbers)}`);
console.log(`First word: ${getFirstElement(words)}`);

let factorial= (n) => {
    if (numbers[n] == 0 || numbers[n] == 1)
        return 1;
    if (numbers[n] > 0)
        return numbers[n];
    return numbers[n] = factorial(n-1) * n;
}