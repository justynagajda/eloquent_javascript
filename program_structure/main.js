/*---------------Looping a triangle-----------------*/ 


// let triangle = "O";
// while (triangle.length <= 7) {
//   console.log(triangle);
//   triangle += "O";
// }

/*-OR-*/ 


// for (let result = "#"; result.length <=7; result = result + "#") {
//   console.log(result);
// }



/*---------------FizzBuzz-----------------*/ 

// for (let number = 1; number <= 100; number = number + 1)
// if (number % 5 == 0 && number % 3 == 0) {
//   console.log("FizzBuzz");
// }
//   else if (number % 3 == 0) {
//   console.log("Fizz");
//   }
//   else if (number % 5 == 0) {
//      console.log("Buzz");
//   }
//   else console.log(number);



/*---------------Chessboard-----------------*/ 


let empty = "";

/*-Pojedynczy rząd-*/ 

// for (let x = 0; x < 8; x++) { //ilosc kolumn
//   if (x % 2 == 0) { 
//     empty += " ";
//   } else {
//     empty += "#";
//   }
// }

/*-Szachownica-*/ 

for (let y = 0; y < 8; y++) {
  for (let x = 0; x < 8; x++) {
    if ((x + y) % 2 == 0) {
      empty += " ";
    } else {
      empty += "#";
    }
  }
  empty += "\n";
}

console.log(empty);
