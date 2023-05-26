
// using if condition
temp = 49;
if(temp>30){
  console.log("temp is hot at sorroundings");
}
else{
  console.log("temp is normal")

}


// skipping iterations
for (let i = 0; i < 10; i++) {
  if (i === 6) {
    continue; 
  }
  console.log(i);
}

// exiting the loop early
for(var i = 0;i<18; i++){
  if(i===15){
    break;
  }
  console.log(i);
}

// looping with a step sized based on index
const numbers = [2, 4, 6, 8, 10];

for (let i = 0; i < numbers.length; i += i + 1) {
  console.log(numbers[i]);
}

  // finding sum threshold comparison
x = 10;
y = 20;

if (x + y > 30) {
  console.log("x+y greater than z");
} else {
  console.log("x+y less than z");
}
//  finding even /odd number
let num = 10;

if (num % 2 === 0) {
  console.log("Number is even");
} else {
  console.log("Number is odd");
}

//  finding positive,zero or negative
let num = 10;

if (num >= 0) {
  if (num === 0) {
    console.log("Number is zero");
  }
   else{
    console.log("Number is positive");
  }
} 
else {
  console.log("Number is negative");
}



