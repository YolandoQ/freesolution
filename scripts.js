// Exercise 1
document.getElementById('calc-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let num1     = document.getElementById('num1').value;
    let operator = document.getElementById('operator').value;
    let num2     = document.getElementById('num2').value;

    let result;
    switch (operator) {
        case '+':
            result = parseFloat(num1) + parseFloat(num2);
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = 'Invalid operator.';
    }

    document.getElementById('calc-result').innerText = 'Result: ' + result;
});
// END Exercise 1

// Exercise 2
document.getElementById('prime-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let num     = document.getElementById('prime').value;
    let isPrime = true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    document.getElementById('prime-result').innerText = isPrime ? 'The number is prime.' : 'The number is not prime.';
});
// END Exercise 2

// Exercise 3
document.getElementById('factorial-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let num       = document.getElementById('factorial').value;
    let factorial = 1;

    for (let i = 2; i <= num; i++) {
        factorial *= i;
    }

    document.getElementById('factorial-result').innerText = 'The factorial of ' + num + ' is ' + factorial + '.';
});
// END Exercise 3

// Exercise 4
document.getElementById('palindrome-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let word         = document.getElementById('word').value;
    let reversedWord = word.split('').reverse().join('');

    document.getElementById('palindrome-result').innerText = word === reversedWord ? 'The word is a palindrome.' : 'The word is not a palindrome.';
});
// END Exercise 4

// Exercise 5
document.getElementById('table-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let num           = document.getElementById('table').value;
    let resultElement = document.getElementById('table-result');

    resultElement.innerHTML = ''; // Clear previous results

    for (let i = 1; i <= 10; i++) {
        let li = document.createElement('li');
        li.innerText = num + ' x ' + i + ' = ' + (num * i);
        resultElement.appendChild(li);
    }
});
// END Exercise 5

// Exercise 6
document.getElementById('vowel-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let sentence   = document.getElementById('sentence').value.toLowerCase();
    let vowelCount = 0;

    for (let i = 0; i < sentence.length; i++) {
        let character = sentence.charAt(i);
        if ('aeiouáéíóúâêîôûàèìòù'.includes(character)) {
            vowelCount++;
        }
    }

    document.getElementById('vowel-result').innerText = 'The inserted sentence has ' + vowelCount + ' vowel(s).';
});
// END Exercise 6

// Exercise 7
document.getElementById('average-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let grade1 = parseFloat(document.getElementById('grade1').value);
    let grade2 = parseFloat(document.getElementById('grade2').value);
    let grade3 = parseFloat(document.getElementById('grade3').value);

    let average = (grade1 + grade2 + grade3) / 3;

    document.getElementById('average-result').innerText = 'The average grade is ' + average.toFixed(2) + '.';
});
// END Exercise 7

// Exercise 8
document.getElementById('interest-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let initialCapital = parseFloat(document.getElementById('initial-capital').value);
    let interestRate   = parseFloat(document.getElementById('interest-rate').value) / 100;
    let investmentTime = parseInt(document.getElementById('investment-time').value);

    let simpleInterestFinalValue   = initialCapital * (1 + (interestRate * investmentTime));

    let compoundInterestFinalValue = initialCapital * Math.pow(1 + interestRate, investmentTime);


    document.getElementById('interest-result').innerText = 'The final amount with simple interest is ' + simpleInterestFinalValue.toFixed(2) + '.\n' + 'The final amount with compound interest is ' + compoundInterestFinalValue.toFixed(2) + '.';
});
// END Exercise 8

// Control modal opening and closing
let modals = document.getElementsByClassName('modal');
let triggers = document.getElementsByClassName('open-modal');
let closes = document.getElementsByClassName('close');

for (let i = 0; i < triggers.length; i++) {
    triggers[i].onclick = function () {
        modals[i].style.display = 'block';
    }
    closes[i].onclick = function () {
        modals[i].style.display = 'none';
    }
}

window.onclick = function (event) {
    for (let i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = 'none';
        }
    }
}

