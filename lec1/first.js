const { error } = require('console');
const fs = require('fs');
let a = 5;
let b = 2;
let sum = a + b;
let product = a * b;
let data = `Sum: ${sum}\nProduct: ${product}\n`;
console.log(data)

fs.writeFile('output.txt',data,(err) => {
  if(err) throw err;
  console.log('Data written to file');
});