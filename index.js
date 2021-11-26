
// assignment: 
// three cases, two triangles each. all in the same file?
// template literals
// area = (base * height) / 2
// why in parantheses? otherwise it will calculate wrong things first; 
// it needs to prioritise the base * height.
// how do I make a calculation of this? 

console.log( (10 * 13) / 2)
// working, yay!

//const triangleOne = base = 10, height = 30;

// to do:
// 1. make sure formula works, yes
// 2. figure out how to write the code ...

// const triangleOneBase = 10;
// const triangleOneHeight = 30;

// const triangleTwoBase = 16.5;
// const triangleTwoHeight = 20.3;

// const area = (nope, this isn't going to work)

// What do I want to do? I want to add base and height to both but separarely ...

// CASE 1

const triangleOne = {
    base: 10,
    height: 13
};

let area = (triangleOne.base * triangleOne.height) / 2;
console.log(area);
// area = 65, correct!

const triangleTwo = {
    base: 16.5,
    height: 20.3
};

area = (triangleTwo.base * triangleTwo.height) / 2;
console.log(area);
// area = 167,475, correct again!

// RESULTS CASE 1: 
// triangleOne's area is 65 cm2, triangleTwo's area is 167,75 cm2. 
// triangleTwo has the bigger area.

// -------------------------------

// CASE 2:

const triangleThree = {
    base: 16.5,
    height: 20.3
};

area = (triangleThree.base * triangleThree.height) / 2;
console.log(area);
// area = 167,75, again - correct

const triangleFour = {
    base: 20.3,
    height: 16.5
};

area = (triangleFour.base * triangleFour.height) / 2;
console.log(area);
// area = 167,75, correct

// RESULTS CASE 2:
// triangleThree's area is 167,75 cm2, triangleFour's area is also 167,75 cm2.
// The triangles are the same size/same size area.

// ----------------------------------

// CASE 3:

const triangleFive = {
    base: 7.8,
    height: 5.6
};

area = (triangleFive.base * triangleFive.height) / 2;
console.log(area)
// area = 21,84, correct

const triangleSix = {
    base: 9.3,
    height: 12.4
};

area = (triangleSix.base * triangleSix.height) / 2;
console.log(area);
// area = 57,66(0000000000...4), correct!

// RESULTS CASE 3:
// triangleFive's area is 21,84 cm2, triangleSix's area is 57,66 cm2.
// triangleSix has the bigger area.

