// 1.Write a Javascript program on Fibonacci series.

function fibonacci(num) {
    let a = 0, b = 1;
  
    for (let i = 0; i < num; i++) {
      console.log(a);
      let temp = a;
      a = b;
      b = temp + b;
    }
  }
  
  fibonacci(10);

  console.log('--------------------------------');
  

//   2. Write a JavaScript program to convert a temperature from Celsius to Fahrenheit.

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
const celsiusTemperature = 25;
const fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);

console.log(`${celsiusTemperature} degrees Celsius is equal to ${fahrenheitTemperature} degrees Fahrenheit.`);

console.log('--------------------------------');

// 3.Write a javascript program to find square root of number.

function findSquareRoot(number) {
    if (number < 0) {
        return "Cannot calculate the square root of a negative number.";
    }
    return Math.sqrt(number);
}
const number = 25;
const squareRoot = findSquareRoot(number);

console.log(`The square root of ${number} is ${squareRoot}.`);

console.log('--------------------------------');

// 4. Write a JavaScript program to generate a random integer between two given numbers.

function getRandomInteger(min, max) {
    if (min > max) {
        [min, max] = [max, min];
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const minNumber = 1;
const maxNumber = 10;
const randomInteger = getRandomInteger(minNumber, maxNumber);

console.log(`Random integer between ${minNumber} and ${maxNumber}: ${randomInteger}`);

console.log('--------------------------------');

// 5.Write a javascript program to check if the passed string is palindrome or not.

function isPalindrome(str) {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    const reversedStr = cleanStr.split('').reverse().join('');
  
    return cleanStr === reversedStr;
  }
  
  const string1 = "race car";
  const string2 = "A man, a plan, a canal: Panama";
  const string3 = "hello World";
  
  console.log(`"${string1}" is a palindrome: ${isPalindrome(string1)}`);
  console.log(`"${string2}" is a palindrome: ${isPalindrome(string2)}`);
  console.log(`"${string3}" is a palindrome: ${isPalindrome(string3)}`);