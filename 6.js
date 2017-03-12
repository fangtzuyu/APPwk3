// array
var colors = ['red', 'blue', 'green'];

// loop method
for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// forEach method
colors.forEach(
  (color) => console.log(color)
);

// use forEach to add HTML elements

var numbers = [1, 2, 3];
var doublenumbers;

// map method
doublenumbers = [];
doublenumbers = numbers.map(
  (number) => number * 2
);
console.log(doublenumbers);

// push
let a = ["1", "2"];
console.log(a);

a.push('3');
console.log(a);

let aaa=[...a,"4"];
console.log(aaa);