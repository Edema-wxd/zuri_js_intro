var a = prompt("input the first number: ");
var b = prompt("input the second number: ");
var c = prompt("input an arithmetic op + - * /: ");
var r = ""

if (c === '+') {
  r = parseInt(a) + parseInt(b) 
};

if (c === '-') {
  r = parseInt(a) - parseInt(b) 
};

if (c === '*') {
  r = parseInt(a) * parseInt(b) 
};

if (c === '/') {
  r = parseInt(a) / parseInt(b) 
};


alert("Result:  " + r);