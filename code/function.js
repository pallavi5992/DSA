/////////////////////////////////FUNTION///////////////////////////////////////
//factorial program using recursion 

function factorial (x) {
    if(x == 0){
        return 1
    }
    return  x * factorial(x-1)
    }
 console.log(factorial(6))

 function sum (n) {
    if(n == 0){
        return 1
    }
    return n + sum(n -1)
}
console.log(sum(5))
    
//(1)Write a JavaScript function that reverse a number.

function reverseNo(str) {

    return rev = str.split("").reverse().join('')
}

console.log(reverseNo('123456')) //654321

//(2) Write a JavaScript function that checks whether a passed string is palin-drome or not? Go to the editor A palindrome is word, phrase, or sequence that reads the same backward as forward

function palindrome(str) {

    let length = str.length;

    for (let i = 0; i < (length / 2); i++) {

        if (str[i] !== str[length - 1 - i]) {
            return "String is not palindram no"
        }
    }
    return "String is palindrom no"

}

console.log(palindrome('12325'))  //false

//(4) Write a JavaScript function that returns a passed string with letters in alphabetical order.

function sortString(str) {
    return sort = str.split("").sort().join("")

}

console.log(sortString('webmaster')) // a b e e m r s t w

//(5) Write a JavaScript function that accepts a string as a parameter and con-verts the first letter of each word of the string in upper case

function convertUpperCase(str) {

    let array = str.split(" ")

    var newArray = []

    for (let i = 0; i < array.length; i++) {

        newArray.push(array[i].charAt(0).toUpperCase() + array[i].slice(1))
    }
    return newArray.join(" ")

}
console.log(convertUpperCase('the quick brown fox')) // The Quick Brown Fox

//(6) Write a JavaScript function that accepts a string as a parameter and find the longest word within the string

function longString(str) {

    var arr = str.split(' ')
    var result = arr[0]

    for (let i = 0; i < arr.length; i++) {
        if (result.length < arr[i].length) {
            result = arr[i]
        }
    }
    return result;

}

console.log(longString('Web Development Tutorial'))

//(7) Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string

function countVowels(str) {

    var vowel_list = 'aeiouAEIOU'
    var vcount = 0
    for (var i = 0; i < str.length; i++) {
        if (vowel_list.indexOf(str[i]) !== -1) {
            vcount += 1;
        }
    }
    return vcount;

}

console.log(countVowels("The quick brown fox"))

//(8)  Write a JavaScript function that accepts a number as a parameter and check the number is prime or not

function isPrime(no) {

    if(no ===1 ) {
      return false
    }else if(no === 2) {
        return true
    }else{

        for(let i=2; i<no; i++) {
            if(no % i === 0){
                return false
            }

        }
        return true
    }

}

console.log(isPrime(21))

//(9)Write a JavaScript function which accepts an argument and returns the type

function give_typeOf(arg) {

    return typeof (arg)
}

console.log(give_typeOf(false))

//(10) Write a JavaScript function which returns the n rows by n columns identi-ty matrix.

function matrix(n) {

    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {

            if (i == j) {
                console.log('1')
            } else {
                console.log('0')
            }
        }

    }
}

matrix(4)

//(11)Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively

function second_Great_lowest_No(arr) {

    arr.sort((a, b) => {
        return a - b
    })

    let second_lowest = arr[1]
    let reverse = arr.reverse();
    let second_greatest = reverse[1]

    return { second_lowest, second_greatest }

}

console.log(second_Great_lowest_No([1, 2, 3, 4, 5, 6, 7, 8, 9]))

//(13) Write a JavaScript function to compute the factors of a positive integer.

function factor(no){

    const fact = []
      for(let i=0; i<=no; i++){
          if(no % i ===0){
              fact.push(i)
          }
  
      }
  
      return fact
  }
  
  console.log(factor(15))

//(14) Write a JavaScript function to convert an amount to coins

function amountTocoin(amount, coin) {

    if (amount === 0) {
        return []
    } else {
        if (amount >= coin[0]) {
            left = (amount - coin[0])
            return [coin[0]].concat(amountTocoin(left, coin))
        } else {
            coin.shift()
            return amountTocoin(amount, coin)
        }
    }
}

console.log(amountTocoin(50, [25, 10, 5, 2, 1]))

//(15)  Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the re-sult.

function exponent(b, n) {

    // return b ** n
    var result = 1
    for (let i = 1; i <= n; i++) {
        result = b * result
    }
    return result;

}

console.log(exponent(2, 3))

//(16)  Write a JavaScript function to extract unique characters from a string.
//M-1
function unique(str){

    let obj ={}
    for(let i=0; i<str.length; i++){
        if(obj[str[i]])
        obj[str[i]] = 0
        obj[str[i]] = str[i]
    }

    return Object.values(obj).join("")

}

console.log(unique("thequickbrownfoxjumpsoverthelazydog"))
//M-2
function uniqueStr(str) {

    var unique = "";
    for (let i = 0; i < str.length; i++) {

        if (unique.indexOf(str.charAt(i)) == -1) {
            unique += str[i]
        }
    }
    return unique;

}

console.log(uniqueStr("viiikassshhhh"))

//M-3
function unique_char(str){

    const arr = str.split("");
    let obj = {};
    const data = []
  
    for(let i=0; i<arr.length; i++) {
       if(obj[arr[i]])
       obj[arr[i]] = 0
       obj[arr[i]]  = arr[i]

    }

   for(let val in obj){
    data.push(obj[val])
   }

   return data.join("")
}

console.log(unique_char("thequickbrownfoxjumpsoverthelazydog"))

//(17) Write a JavaScript function to  get the number of occurrences of each letter in specified string
//M-1 (without space count)
function noOfOccurance(string) {

    const str = string.split(" ").join("")
    let arr = str.split("")
   
    let obj = {}
    
    for(let i=0; i<arr.length; i++) {
        if(!obj[arr[i]]) 
        obj[arr[i]] = 0
        obj[arr[i]] += 1  

    }

    return obj
}
console.log(noOfOccurance("The quick brown fox jumps over the lazy dog"))
//M-2 (with space count)

function noOfOccurance(str){
    let obj = {}
    for(let i=0; i<str.length; i++){
        if(!obj[str[i]])
        obj[str[i]] = 0
        obj[str[i]] += 1
    }

return obj

}
console.log(noOfOccurance("The quick brown fox jumps over the lazy dog"))

//18. Write a function for searching JavaScript arrays with binary searches.

function binarySearch(arr, searchVal){

    let firstIndex = 0
    let lastIndex = arr.length -1
    let middleIndex = Math.floor((firstIndex + lastIndex) / 2)

   while(arr[middleIndex] != searchVal && firstIndex < lastIndex){
    if(searchVal < arr[middleIndex]){
     lastIndex = middleIndex - 1
    }else if(searchVal >  arr[middleIndex]){
      firstIndex = middleIndex  + 1
    }
    middleIndex = Math.floor((firstIndex + lastIndex) / 2)

   }
   return arr[middleIndex] != searchVal ? -1 : middleIndex

    

}

console.log(binarySearch([1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23], 5))

//(19) Write a JavaScript function that returns array elements larger than a number.

const arr = [1,2,3,4,57,8,96,5,65,5,65,5,4,56,5,66,2,3]

 const largestNo = arr.filter((value, index) =>{
 return value > 50
 })

 console.log(largestNo)

 //(20)  Write a JavaScript function that generates a string id (specified length) of random characters

 function makeID(n){

    var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstu-vwxyz0123456789";
    var text = ''
      
    for(let i=0; i< n; i++){
     text += char_list.charAt(Math.floor(Math.random() * char_list.length))
    }

     return text

 }

console.log(makeID(8))

//(22) Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string

//M -1
function char_count(str, n) {

    var count = 0;

    for (let i = 0; i < str.length; i++) {

        if (str.charAt(i) == n) {
            count++;
        }

    }
    return  count;

}

console.log(char_count('vikashk5@chetuvvv.com', 'v'))

// M-2
function char_count(str, n){

    var arr = str.split("")

   const data =  arr.filter((value) =>{
         return value == n
    })

   return data.length


}

console.log(char_count('vikashk5@chetuv.com', 'v'))

//M-3
function countNoOfOccorance(str, search){

    let obj = {}
    let data  =[]

    for(let i=0; i<str.length; i++){
       if(!obj[str[i]])
       obj[str[i]] = 0
       obj[str[i]] += 1

    }
 
    for(let val in obj){
    if(val === search){
     data.push(obj[val])
    }
    }
 
    return data

}

console.log(countNoOfOccorance( 'w3resource.com', 'e'))

//(23) Write a JavaScript function to find the first not repeated character (less frequent)

function findFirstNotRepeted(str){

    let obj ={};
    const data = []
    for(let i=0; i<str.length; i++){
          if(!obj[str[i]])
          obj[str[i]] = 0
          obj[str[i]] += 1
    }

        for(let val in obj){
        if(obj[val] === 1){
            data.push(val)
        }
        }

        return data[0]
}

console.log(findFirstNotRepeted('abacddbecf'))

//(24)  Write a JavaScript function to apply Bubble Sort algorithm

function bubble_Sort(a)
{
    var swapp;
    var n = a.length-1;
    var x=a;
    do {
        swapp = false;
        for (var i=0; i < n; i++)
        {
            if (x[i] < x[i+1])
            {
               var temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swapp = true;
            }
        }
        n--;
    } while (swapp);
 return x; 
}

console.log(bubble_Sort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

//(25) Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
function Longest_Country_Name(arr) {
    let data= []
    for(let i=0; i<arr.length; i++){
   
        if(arr[0].length < arr[i].length){
            data.push(arr[i])
        }
    }

    return data.join("")

}

console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]))