let x = 4;
let y = 9;
const R = 10;
let z = Math.sqrt(x*x + y*y);
z > R ? console.log("точка за пределами окружности") : console.log("точка внутри окружности");

//Короче вариант
// let x = 4, y = 9;
// const R = 10;
// Math.sqrt(x*x + y*y) > R ? console.log("точка за пределами окружности") : console.log("точка внутри окружности");