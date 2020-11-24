//Assignment - Loop Olympics - Preliminaries

// Write a for loop that prints to the console the numbers 0 through 9.
// Write a for loop that prints to the console 9 through 0.
// Write a for loop that prints these fruits to the console.

for( var i = 0; i < 10; i++ ) {
    console.log( i );
}

for( var i = 9; i >= 0; i-- ) {
    console.log( i );
}

var fruit = ["banana", "orange", "apple", "kiwi"];
for( var i = 0; i < fruit.length; i++ ) {
    console.log( fruit[i] );
}

//Bronze Medal
// Write a for loop that will push the numbers 0 through 9 to an array.
// Write a for loop that prints to the console only even numbers 0 through 100.
// Write a for loop that will push every other fruit to an array.
// const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

const numbers = [];

for( let i=0; i < 10; i++ ) {
    numbers.push( i );
}

console.log( numbers );

for( let i=0; i <= 100; i++ ) {
   if( i % 2 === 0) {
       console.log( i )
   }
}

const fruititems = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

const breakfast = [];

for( let i=0; i < fruititems.length; i++ ) {
   if( i % 2 === 0) {
       breakfast.push( fruit[i] )
   }
}

console.log( breakfast );

//Silver Medal

// Write a loop that will print out all the names of the people of the people array
// Write a loop that pushes the names into a names array, and the occupations into an occupations array.
// Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford", and every other occupation to another array starting with, in this case, "Singer".

const peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Bieber",
    occupation: "Singer"
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
];

let names = [];
let occupations = [];

for( let i=0; i < peopleArray.length; i++ ) {
    names.push( peopleArray[i].name );
    occupations.push( peopleArray[i].occupation );
}

console.log( names );
console.log( occupations );

for( let i=0; i < peopleArray.length; i++ ) {
    i % 2 === 0 ? names.push( peopleArray[i].name ) : occupations.push( peopleArray[i].occupation );
    
}

//Gold Medal

// 1 - Create an array that mimics a grid like the following using nested for loops:
// [[0, 0, 0], 
// [0, 0, 0], 
// [0, 0, 0]]

// 2 - Create an array that mimics a grid like the following using nested for loops:
// [[0, 0, 0], 
// [1, 1, 1], 
// [2, 2, 2]]

//3 - Create an array that mimics a grid like the following using nested for loops:
// [[0, 1, 2], 
// [0, 1, 2], 
// [0, 1, 2]]

// 4 - Given a grid like the previous ones, write a nested for loop that would change every number to an x.
// [["x", ...], 
// ["x", ...], 
// ["x",...], ...]

var grid = [];

for( var i = 0; i < 3; i++ ) {
    grid.push( [] );    // [ [], [], [] ]
    for( var j = 0; j < 3; j++ ) {
        grid[i].push( 0 );
    }
}

console.log( grid );

var grid = [];

for( var i = 0; i < 3; i++ ) {
    grid.push( [] );    // [ [0, 0, 0], [1, 1, 1], [] ]
    for( var j = 0; j < 3; j++ ) {
        grid[i].push( i );
    }
}

console.log( grid );

var grid = [];

for( var i = 0; i < 3; i++ ) {
    grid.push( [] );    // [ [], [], [] ]
    for( var j = 0; j < 3; j++ ) {
        grid[i].push( j );
    }
}

console.log( grid );