// DOM Elements
const clipboardBtn = document.querySelector('.clipboard-btn');
const generateBtn = document.querySelector('.generate-btn');
const displayPass = document.querySelector('.displayPass');

const passwordLength = document.querySelector('#length');
const includeUpper = document.querySelector('#upper');
const includeLower = document.querySelector('#lower');
const includeNumber = document.querySelector('#number');
const includeSymbols = document.querySelector('#symbols');

// Generate Password Button
generateBtn.addEventListener('click', function () {
  const length = +passwordLength.value;
  const upper = includeUpper.checked;
  const lower = includeLower.checked;
  const number = includeNumber.checked;
  const symbols = includeSymbols.checked;

  const count = upper + lower + number + symbols;

  if (length < 3) {
    displayPass.value = 'Enter Number Greater than 3';
  } else if (count === 0) {
    displayPass.value = 'Select At Least one Checkbox';
  } else {
    let Pass = '';
    for (let i = 0; i < length; i++) {
      Pass += generatePass();
    }

    displayPass.value = Pass;
  }
});

function generatePass() {
  let randomPass = [];

  if (upper.checked) {
    randomPass.push(getUpperCase());
  }
  if (lower.checked) {
    randomPass.push(getLowerCase());
  }
  if (number.checked) {
    randomPass.push(getNumber());
  }
  if (symbols.checked) {
    randomPass.push(getSymbols());
  }

  return randomPass[Math.floor(Math.random() * randomPass.length)];
}

// Generator Function
function getUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getSymbols() {
  const str = '!@#$%^&*()-_+=<>?/[]{}|';
  return str[Math.floor(Math.random() * str.length)];
}
