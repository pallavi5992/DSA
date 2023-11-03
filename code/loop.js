/////////////////////////////LOOP////////////////////////////////////////////////
//(1) Write a JavaScript program that accept two integers and display the larger

function largeNo(n1, n2) {

    if (n1 > n2) {
        console.log(`${n1} is largest No`)

    } else {
        console.log(`${n2} is largest No`)
    }

}

largeNo(2, 3)

//(2) Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign. 

function getSign(n1, n2, n3) {

    if (n1 > 0 && n2 > 0 && n3 > 0) {
        console.log("sign is +")
    } else if (n1 > 0 && n2 > 0 && n3 > 0) {
        console.log("sign is -")
    } else if (n1 > 0 && n2 < 0 && n3 < 0) {
        console.log("sign is +")
    } else if (n1 < 0 && n2 > 0 && n3 > 0) {
        console.log("sign is +")
    } else {
        console.log("sign is -")
    }

}

getSign(3, -5, 7)

//(3)  Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result

var x = 1
var y = -5
var z = 3

if (x > y && x > z) {
    if (y > z) {
        console.log(x + ", " + y + ", " + z);
    }
    else {
        console.log(x + ", " + z + ", " + y);
    }

} else if (y > x && y > z) {
    if (x > z) {
        console.log(y + ", " + x + ", " + z);
    }
    else {
        console.log(y + ", " + z + ", " + x);
    }

} else if (z > x && z > y) {
    if (x > y) {
        console.log(z + ", " + x + ", " + y);
    }
    else {
        console.log(z + ", " + y + ", " + x);
    }
}

//(4) Write a JavaScript conditional statement to find the largest of five num-bers. Display an alert box to show the result.

a=-5;
b=-2;
c=-6;
d= 0;
f=51;

if (a>b && a>c && a>d && a>f)
{
    console.log(a);
}
else if (b>a && b>c && b>d && b>f)
{
    console.log(b);
}
else if (c>a && c>b && c>d && c>f)
{
    console.log(c);
}
else if (d>a && d>c && d>b && d>f)
{
    console.log(d);
}
else
{
    console.log(f);
}

//(5) Write a JavaScript for loop that will iterate from 0 to 15. For each iter-ation, it will check if the current number is odd or even, and display a message to the screen

for(let i=0; i<=15; i++){

    if(i % 2 === 0){
        console.log(`${i} is Even no`)
    }else{
        console.log(`${i} is Odd no`)
    }

}

//(6) Write a JavaScript program which compute, the average marks of the follow-ing students Then, this average is used to determine the corresponding grade

var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

var avgmark = 0;
for(let i=0; i< students.length; i++){

    avgmark += students[i][1]
   var avg = (avgmark/students.length)

}
console.log('Average Grade ->', (avgmark/students.length));

if(avg < 60){
console.log('Grade->  E')
}else if(avg < 70){
    console.log('Grade->  D')
}else if(avg < 80){
    console.log('Grade->  C')
}else if(avg < 90){
    console.log('Grade->  B')
}else if(avg < 100){
    console.log('Grade->  A')
}

//(7)  Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of 
//the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz"

for(let i=1; i<=100; i++){

    if(i % 3 ===0 && i % 5 === 0){
      console.log(`${i} -> FizzBuzz`)
    }else if(i % 3 === 0){
      console.log(`${i} -> Fizz`)
  }else if (i % 5 === 0){
      console.log(`${i} -> Buzz`)
  }
  }

  //(9) Write a JavaScript program to find the armstrong numbers of 3 digits 

 function ThreeDigitArmstrongNo() {

    for (let i = 1; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            for (let k = 0; k < 10; k++) {
               //var pow = (i**3 + j**3 + k**3);
                 var pow = Math.pow(i,3) + Math.pow(j,3) + Math.pow(k, 3)
               var plus = (i*100 + j*10 + k)
               if(pow == plus){
                console.log(pow)
               }
            }

        }
    }
}

ThreeDigitArmstrongNo()

//(10) Write a JavaScript program to construct the following pattern, using a nested for loop
//M-1
var n = 5;
var string = ''

for(let i=0; i<=n; i++){

   for(let j=0; j< i; j++){
       string += "*"
   }
   string += "\n"
}
console.log(string)

//M-2
for(let i=0; i<=n; i++){
for(let j=0; j< n-i; j++){
   string += '*'
}
string += '\n'

}
console.log(string)

//M-3

for(let i=0; i<=n; i++){
   for(let j=0; j<n-i; j++){
    string += ' '
   }
   for(let k=0; k <i; k++){
       string += '*'
   }
      string += '\n'

}
console.log(string)

//M-4

for (let i = 1; i <= n; i++) {
 
 for (let j = 0; j < i; j++) {
   if(i === n) {
     string += "*";
   }
   else {
     if (j == 0 || j == i - 1) {
       string += "*";
     }
     else {
       string += " ";
     }
   }
 }
 string += "\n";
}
console.log(string);

//(11) Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers

var a = 2154; //First number
var b = 458;  //Second number 

var gcd;
while(a!=b){

    if(a>b){
     a = a-b
    }else{
        b=b-a
    }
    gcd = a
}

console.log(gcd)

//(12) Write a JavaScript program to sum the multiples of 3 and 5 under 1000

var n = 1000;
var sum = 0;
for(let i=0; i<=n; i++ ){
if(i % 3 ===0 || i % 5 ===0){
   sum += i
}   
}

console.log(sum)