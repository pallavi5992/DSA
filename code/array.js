//(0) find diff element in Arrays
function diff_Ele(arr1,arr2){
    let res=[]
    let flag=false
    for(let i=0;i<arr1.length;i++){
      for(let j=0;j<arr2.length;j++){
       if(arr1[i]===arr2[j]){
        flag=true
        break;
       }
      }
      if(!flag){
      res.push(arr1[i])
      }else{
        flag=false
      }
    }
  return res
  }
  console.log(diff_Ele([1,2,3,4,5,6],[2,4,5,6])) 

const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [2, 4, 5, 6];

function dif_ele(arr1, arr2) {
    let res = [];
    
    // Loop through arr1
    for (let i = 0; i < arr1.length; i++) {
        let flag = false;

        // Loop through arr2
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                flag = true;
                break; // Break out of inner loop if match is found
            }
        }

        // If no match found, add the element to result
        if (!flag) {
            res.push(arr1[i]);
        }
    }

    return res;
}

console.log(dif_ele(arr1, arr2)); // Output: [1, 3]

//(0) remove Duplicate element ffrom 1 arrays
//M-1
let array123=[1,2,3,4,5,6,7,8,6,2,3,6]
console.log([...new Set(array123)])
//M-2
function RemoveDuplicate(arr){
  let res=[]
for(let i=0;i<arr.length;i++){
 if(res.indexOf(arr[i])=== -1){
  res.push(arr[i])
 }
}
return res
}
console.log(RemoveDuplicate([1,2,3,4,5,6,7,8,6,2,3,6]))
//M-3
function RemoveDuplicate1(arr){
 return arr.filter((res,index)=>
  arr.indexOf(res)==index
 )
}
console.log(RemoveDuplicate1([1,2,3,4,5,6,7,8,6,2,3,6]))
//M-4
function RemoveDuplicate2(arr){
    let unique = arr.reduce(function (acc, curr) {
        if (!acc.includes(curr))
            acc.push(curr);
        return acc;
    }, []);
    return unique;

}
console.log(RemoveDuplicate2([1,2,3,4,5,6,7,8,6,2,3,6]))
//M-5
function RemoveDuplicate3(arr){
  let res = [];
  arr.forEach(data => {
      if (!res.includes(data)) {
          res.push(data);
      }
  });
  return res;
}
console.log(RemoveDuplicate3([1,2,3,4,5,6,7,8,6,2,3,6]))

//(0)  Flat an array without using any predefined function. with depth
function flattenArrayDepth(arr, depth){

    if(depth === 0){
        return arr.slice(0)

    }
    let data = []

    for(let i=0; i<arr.length; i++) {
        if(Array.isArray(arr[i])) {
          data = data.concat(flattenArrayDepth(arr[i], depth -1))
        }else{
            data.push(arr[i])
        }

    }

    return data

}
console.log(flattenArrayDepth([10, [50, 31, [44, 81, 73, 0, 63, [17, 29, 37, 78]]]], 1))
//(0) array sort without using inbuild function

const arr0 = [5, 6, 4, 2, 1, 7, 9, 8, 3] 
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {

        if (arr[i] > arr[j]) {
            temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
}
console.log(arr)


//(0)Array revserse without using any inbuild method

const arrayaa = [1, 2, 3, 4, 5]

const reversedArray = []

for (let i = arrayaa.length - 1; i >= 0; i--) {
    const valueAtIndex = arrayaa[i]

    reversedArray.push(valueAtIndex)
}

console.log(reversedArray)


//find most frequent from array of object
const arrayy = [{ name: "vikash", company: "abc", age: 25 }, { name: "vikash", company: "def", age: 25 }, { name: "rahul", company: "abc", age: 25 }]

let count = 0;
let mf1 = 1;
let itemss

for (let i = 0; i < arrayy.length; i++) {

    for (let j = i; j < arrayy.length; j++) {

        if (arrayy[i]['name'] == arrayy[j]['name'])
            count++

        if (mf < count) {
            mf = count
            itemss = arrayy[i]
        }

    }
    count = 0
}

console.log(itemss, mf)

// find only interger value not including float value
const arrrrr = [8, 5, 2, "a", "b", "c", 5.3, 6.1, 9.8]

const newdata = []
for (let i = 0; i < arrrrr.length; i++) {
    if (typeof arrrrr[i] === "number") {
        if (Number.isInteger(arrrrr[i])) {
            data.push(arrrrr[i])
        }

    }
}

console.log(newdata)
//(0)find max value in pair of three element in array
const arrrr = [10, 5, 6, 4, 2, 8, 9, 3, 5]

for (let i = 0; i < arrrr.length; i++) {

    console.log(Math.max(arrrr[i], arrrr[i + 1], arrrr[i + 2]))

    i += 2

}

//(0)Exact match arr or object

const arrayyy = [1, 2, 3, 4]

const objecttt = {
    name: "vikash",
    age: 25
}
console.log(Object.prototype.toString.call(objecttt) === '[object Object]')
console.log(Object.prototype.toString.call(arrayyy) === '[object Array]')
//(0) find missing element from array
// if 0 not includes in array then use (i + 1) (if 0 is availabe in array then only (i + 1) -> (i) and only push (i) not (i + 1))
//M-1
const ay = [8, 3, 4, 6, 7, 1, 0, 10]
let length = arr[arr.length - 1];

for (let i = 0; i < length; i++) {
    if (arr.includes(i) === false) {
        console.log(i)
    }
}

//M-2
const arraya = [1, 3, 4, 9, 6, 7, 8, 10]

const arra = arraya.sort((a, b) => {
    return a - b
})

function mising(arr) {

    let length = arr[arr.length - 1];
    let missCount = 0;
    let data = []

    for (let i = 0; i <= length; i++) {

        if (arr[i - missCount] !== (i + 1)) {
            data.push(i + 1)
            missCount++

        }
    }

    console.log(data)
}

mising(arra)

//(0) write a function to unique of only first array1

const name1 = ['vikash', 'sonali', 'tarun', 'puneet']
const name2 = ['vikash', 'rahul', 'tarun', 'puneet']

const data = []
for (let i = 0; i < name1.length; i++) {

    if (name2.indexOf(name1[i]) == -1) {
        data.push(name2[i])
    }
}

console.log(data)

//(1)  Write a JavaScript function to check whether an `input` is an array or not. 

function is_array(input) {

    // console.log(Array.isArray([1, 2, 3]))
    // console.log(Array.isArray('hi'))

    return toString.call(input) == "[object Array]"

}
console.log(is_array([1, 2, 3, 4, 5, 6]))
console.log(is_array('hello'))

//(2) Write a JavaScript function to clone an array.
//slice method craete shadow copy of array is know as clone of array

function arr_clone(arr) {

    return arr.slice(0, 2)

}
const arr = [1, 2, 3]

console.log(arr_clone(arr))
console.log(arr)

//(3) Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

function first(arr, n) {

    if (arr == null)
        return void 0

    if (n == null)
        return arr[0]

    if (n < 0)
        return []
    return arr.slice(0, n)
}

console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));

//(4)   Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

function foundLastEle(arr, n) {

    if (n == null)
        return arr[arr.length - 1]

    if (n < 0)
        return []
    return arr.slice(-n)

}

const arr2 = [1, 2, 3, 4, 5, 6, 7]
console.log(foundLastEle(arr2, 1))

//(5) Write a simple JavaScript program to join all elements of the following array into a string

function joinColor(arr) {

    console.log(arr.join(","))
    console.log(arr.join("+"))
    console.log(arr.join("/"))
}

const myColor = ["Red", "Green", "White", "Black"];

joinColor(myColor)

//(6) Write a JavaScript program which accept a number as input and insert dash-es (-) between each two even numbers. For example if you accept 025468 the out-put should be 0-254-6-8

function betweenTwoEvenNo(str) {
    const arr = [str[0]]
    for (let i = 1; i < str.length; i++) {

        if ((str[i - 1] % 2 === 0) && (str[i] % 2 === 0)) {
            arr.push('-', str[i])
        } else {
            arr.push(str[i])
        }

    }
    return arr.join("")

}

console.log(betweenTwoEvenNo('025468342'))

//(7) Write a JavaScript program to sort the items of an array
// M-1

let temp;
for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr.length; j++) {

        if (arr[i] < arr[j]) {
            temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp

        }

    }
}

console.log(arr)

//M2

function sortEle(arr) {

    return arr.sort((a, b) => {
        return a - b
    })

}

const arr3 = [-3, 8, 7, 6, 5, -4, 3, 2, 1, 0, -8];

console.log(sortEle(arr))


//(8)  Write a JavaScript program to find the most frequent item of an array.

const arr11 = [3, 'b', 'b', 'b', 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3, 'b', 3, 3, 3, 3, 3, 3, 3, 3];

var mf = 1;
var m = 0;
var item;

for (var i = 0; i < arr1.length; i++) {
    for (var j = i; j < arr1.length; j++) {

        if (arr1[i] == arr1[j])
            m++

        if (mf < m) {
            mf = m
            item = arr1[i]
        }
    }

    m = 0
}
console.log(item + " ( " + mf + " times ) ");

//(9)  Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the out-put should be 'tHE qUICK bROWN fOX'

function swap_up_lo_lo_up(str) {

    var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var LOWER = 'abcdefghijklmnopqrstuvwxyz';
    const arr = [];
    for (let i = 0; i < str.length; i++) {
        if (UPPER.indexOf(str[i]) !== -1) {
            arr.push(str[i].toLowerCase())
        } else if (LOWER.indexOf(str[i] !== -1)) {
            arr.push(str[i].toUpperCase())
        } else {

            arr.push(str[i])
        }
    }

    return arr.join("")

}
console.log(swap_up_lo_lo_up('The Quick Brown Fox'))

//(10) Write a JavaScript program which prints the elements of the following ar-ray

const array = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

//M-1

function flateArray(array) {

    return array.flat()

}
console.log(flateArray(array))

//M-2

for (let i in array) {

    console.log("row", i)
    for (let j in array[i]) {
        console.log(" ", array[i][j])
    }

}

//(11)Write a JavaScript program to find the sum of squares of a numeric vector

const arr44 = [0, 1, 2, 3, 4]
function sum_square(arr) {

    var sum = 0
    for (let i = 0; i < arr.length; i++) {
        //sum += Math.pow(i, 2)
        sum += (i ** 2)
    }
    return sum

}
console.log(sum_square(arr4))

//(12) Write a JavaScript program to compute the sum and product of an array of integers.

const a = [1, 2, 3, 4, 5, 6];

let sum = 0;
let product = 1;

for (let i = 0; i < a.length; i++) {

    sum += a[i]
    product *= a[i]

}

console.log(`Total Sum is ${sum} and  Total product is ${product}`)

//(13)  Write a JavaScript program to add items in an blank array and display the items

function add_in_blank_arr(arr) {

    let sum = 0
    let data = []

    for (let i = 0; i < arr.length; i++) {
        data.push(sum += arr[i])

    }
    return data

}

console.log(add_in_blank_arr([1, 2, 3, 4, 5, 6])) // [ 1, 3, 6, 10, 15, 21 ]

//(14) Write a JavaScript program to remove duplicate items from an array (ig-nore case sensitivity).

function removeDuplicate(arr) {

    var removeItem = []
    var obj = {}

    for (let i = 0; i < arr.length; i++) {

        obj[arr[i]] = 0
    }

    for (let x in obj) {
        removeItem.push(x)
    }
    return removeItem

}

var Mynum = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6, 2, 2, 2, 2, 3, 3, 5, 6, 4, 9];

console.log(removeDuplicate(Mynum))

//(16) Write a JavaScript program to find the leap years in a given range of years. 
//M-1
const years = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2008, 2009, 2010, 2011, 2012]

function leap_years(years) {
    let leapyear = [];
    for (let i = 0; i < years.length; i++) {
        //console.log(years[i])
        if ((years[i] % 4 === 0 && years[i] % 100 !== 0) || (years[i] % 100 === 0 && years[i] % 400 === 0)) {
            leapyear.push(years[i])
        }
    }
    console.log(`${leapyear} is a leap year`)

}

leap_years(years)

//M-2 (date_range)

function leapYear(st_year, end_year) {

    let year_range = []
    let leap_year = []

    for (let i = 2000; i <= end_year; i++) {
        year_range.push(i)
    }

    year_range.forEach((value) => {
        if ((value % 4 === 0 && value % 100 !== 0) || (value % 100 === 0 && val-ue % 400 === 0)) {
            leap_year.push(value)
        }
    })

    console.log(`${leap_year}is a leap year`)

}

leapYear(2000, 2012)

//(17)  Write a JavaScript program to shuffle an array

function shuffle(arra1) {
    var ctr = arra1.length, temp, index;

    // While there are elements in the array
    while (ctr > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * ctr);
        // Decrease ctr by 1
        ctr--;
        // And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}
var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(shuffle(myArray));

//(18)   Write a JavaScript program to perform a binary search.

function binary_Search(arr, value) {

    var firstIndex = 0
    var lastIndex = arr.length - 1;
    var middleIndex = Math.floor((firstIndex + lastIndex) / 2)

    while (arr[middleIndex] != value && firstIndex < lastIndex) {
        if (value < arr[middleIndex]) {
            lastIndex = middleIndex - 1;

        } else if (value > arr[middleIndex]) {
            firstIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((lastIndex + firstIndex) / 2);

    }

    return (arr[middleIndex] != value ? -1 : middleIndex)

}

var items = [1, 2, 3, 4, 5, 7, 8, 9];
console.log(binary_Search(items, 8))

// //(19)  There are two arrays with individual values, write a JavaScript pro-gram to compute the sum of each individual index value from the given arrays. 

function add_array(array1, array2) {

    var ctr = 0;
    var result = []

    if (array1.length === 0)
        return "Array1 is empty"

    if (array2.length === 0)
        return "Array2 is empty"

    while (ctr < array1.length && ctr < array2.length) {
        result.push(array1[ctr] + array2[ctr]);
        ctr++

    }

    if (ctr === array1.length) {
        result.push(array2[ctr]);
    }

    if (ctr === array2.length) {
        result.push(array1[ctr]);
    }


    console.log(result)

}

let array1 = [1, 0, 2, 3, 4, 2, 6];
let array2 = [3, 5, 6, 7, 8, 13];

add_array(array1, array2)

//(20)  Write a JavaScript program to find duplicate values in a JavaScript ar-ray.

function findDuplicate(arr) {

    let obj = {};
    let duplicate = []

    arr.forEach((val) => {
        if (!obj[val])
            obj[val] = 0
        obj[val] += 1
    })

    for (let value in obj) {
        if (obj[value] >= 2) {
            duplicate.push(value)
        }
    }

    return duplicate;
}

const ele = [1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]
console.log(findDuplicate(ele))

//(21)  Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened a single level. 

//M-1
function flatArray(arr) {

    return arr.flat(3)

}
const items = [1, [2], [3, [[4]]], [5, 6]]
console.log(flatArray(items))

//M-2
function flatten(arr) {

    let data = []
    for(let i=0; i<arr.length; i++) {
        if(Array.isArray(arr[i])) {
         data = data.concat(flatten(arr[i]))
        }else{
            data.push(arr[i])
        }

    }

    return data
}

console.log(flatten([1, [2], [3, [[4]]], [5, 6]]));

//(22) Write a JavaScript program to compute the union of two arrays

function union_of_array(arr1, arr2) {

    var obj = {}
    var result = []

    for (let i = 0; i < arr1.length; i++) {
        obj[arr1[i]] = arr1[i]
    }

    for (let i = 0; i < arr2.length; i++) {
        obj[arr2[i]] = arr2[i]
    }

    for (let value in obj) {
        result.push(obj[value])
    }

    return result;

}

const arr1 = [1, 2, 3]
const arr4 = [100, 2, 1, 10]
console.log(union_of_array(arr1, arr4))

//(23)  Write a JavaScript function to find the difference of two arrays
//M-1
function unique_of_two_array(arr1, arr2) {

    const diff = []
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) === -1)
            diff.push(arr1[i])
    }

    for (let i = 0; i < arr2.length; i++) {
        if (arr1(arr2[i]) === -1)
            diff.push(arr2[i])
    }

    return diff.sort((a, b) => {
        return a > b
    })

}

console.log(unique_of_two_array(arr1, arr2))

//M-2
function common_of_two_array(arr1, arr2) {

    const arr = arr1.concat(arr2)
    let obj = {}
    let result = []

    arr.forEach((value) => {
        if (!obj[value])
            obj[value] = 0
        obj[value] += 1
    })

    for (let i in obj) {
        if (obj[i] >= 2) {
            result.push(i)
        }
    }
    console.log(result)
}

const a1 = [1, 2, 3]
const a2 = [100, 2, 1, 10]
common_of_two_array(a1, a2)

//(24) Write a JavaScript function to remove. 'null', '0', '""', 'false', 'unde-fined' and 'NaN' values from an array.

//M-1
for (let i = 0; i < arr.length; i++) {

    if (Number(arr[i])) {
        console.log(arr[i])
    }

}
//M-2
function filter_array(test_array) {
    var index = -1,
        arr_length = test_array ? test_array.length : 0,
        resIndex = -1,
        result = [];

    while (++index < arr_length) {
        var value = test_array[index];

        if (value) {
            result[++resIndex] = value;
        }
    }

    return result;
}

console.log(filter_array([NaN, 0, 15, false, -22, '', undefined, 47, null]));

//(25)  Write a JavaScript function to sort the following array of objects by title value.

var library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hun-ger Games', libraryID: 3245 }
];

const sorted_data = library.sort((a, b) => {
    if (a.title > b.title)
        return 1
    if (a.title < b.title)
        return -1

    return 0

})

console.log(sorted_data)

//(26)  Write a JavaScript program to find a pair of elements (indices of the two numbers) from an given array whose sum equals a specific target number

function find_pair(arr, target) {

    var pair = []
    var indexnum = []
    var index;

    for (let i = 0; i < arr.length; i++) {

        if (pair[arr[i]] != null) {
            index = pair[arr[i]];
            indexnum[0] = index
            indexnum[1] = i;
            break;
        } else {
            pair[target - arr[i]] = i
        }
    }

    return indexnum
}
const item = [10, 20, 10, 40, 50, 60, 70]

console.log(find_pair(item, 70))

//find all possible pair of target value
function findAllPair(arr, target){

    let pair = [], indexNum = [], index, data = []
    for(let i=0; i<arr.length; i++) {
        if(pair[arr[i]] != null) {
            index = pair[arr[i]]
            indexNum[0] = index
            indexNum[1] = i
            data.push([indexNum[0], indexNum[1]])

        }else{
            pair[target - arr[i]]  = i
        }

    }

    return data

}
console.log(findAllPair([2,3,4,7,0,4,1,6], 7))

//(28) Write a JavaScript function to find the longest common starting substring in a set of strings.

function findLongestString(arr) {

    let result = arr[0];
    let temp = ""

    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < result.length; j++) {
            if (result[j] == arr[i][j]) {
                temp += result[j]
            } else {
                break;
            }
        }

        result = temp
        temp = ""

    }

    return result

}

console.log(findLongestString(['go', 'google']))

//(29) Write a JavaScript function to  find the string  with both case.

//M-1

function search_word (str1, str2) {

    const str = str1.replaceAll(",", "")
    const arr1 = str.split(" ")
    const arr2 = str2.split(" ")
    
    let data = []
    
    for(let i=0; i<arr1.length; i++) {
      if(arr2.indexOf(arr1[i]) !== -1) {
         data.push(arr1[i])
      }
      
    }
  
  return data
 }
 
 console.log(search_word('aa, bb, cc, dd, aa', 'aa'))
 console.log(search_word('The fox quick brown fox', 'fox'))
 
//M-2 

function search_word (str1, str2) {

    const str = str1.replaceAll(",", "")
    const arr = str.split(" ")
    
    let data = []
    
 for(let i=0; i<arr.length; i++) {
   if(arr[i] == str2) {
      data.push(arr[i])
   }
   
 }
  
  return data
 }
 
 console.log(search_word('aa, bb, cc, dd, aa', 'aa'))
 console.log(search_word('The fox quick brown fox', 'fox'))
 
 

 //(29) Write a JavaScript function to fill an array with values (numeric, string with one character) on supplied bounds

function num_string_range(start, end, step) {

    var range = []
    if (end < start) {
        step = - step
    }

    if (typeof start === 'number') {
        while (step > 0 ? end > start : end <= start) {
            range.push(start)
            start += step;
        }

    } else if (typeof start === 'string') {

        start = start.charCodeAt(0)
        end = end.charCodeAt(0)
        while (step > 0 ? end >= start : end <= start) {
            range.push(String.fromCharCode(start))
            start += step

        }
    }

    return range.sort((a, b) => {
        return a - b
    })

}
console.log(num_string_range('z', 'a', 2))
console.log(num_string_range(0, 50, 5))

//(30) Write a JavaScript function to merge two arrays and removes all dupli-cates elements

function merge_two_arr_remove_duplicate(arr1, arr2) {

    var arr = arr1.concat(arr2)
    var removeDuplicate = []
    let obj = {}
    for (let i = 0; i < arr.length; i++) {

        obj[arr[i]] = arr[i]

    }

    for (let value in obj) {
        removeDuplicate.push(obj[value])
    }

    return removeDuplicate.sort((a, b) => {
        return a - b
    })

}

var ar1 = [1, 2, 3];
var ar2 = [2, 30, 1];
console.log(merge_two_arr_remove_duplicate(ar1, ar2))

//(31) Write a JavaScript function to remove a specific element from an array

function remove_arr_element(arr, target) {

    //M-1
    const index = arr.indexOf(target)

    const removeEle = arr.splice(index, 1)

    return arr

    //M-2

    let obj = {}
    let data = []
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]])
            obj[arr[i]] = 0
        obj[arr[i]] = arr[i]

    }

    for (let val in obj) {

        if (obj[val] != target) {
            data.push(obj[val])
        }
    }

    return data

}
const arr_item = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(remove_arr_element(arr_item, 5))

//M-3 and 4

function remove_array_element (arr, target) {

    //   return   arr.filter((val) =>{
    //       return val !== target
    //     })
    
    let data = []
    for(let i=0; i<arr.length; i++) {
     if(arr[i] !== target){
      data.push(arr[i])
     }
    }
    
    
    return data
    
    }
    console.log(remove_array_element([2, 5, 9, 6], 5)); //[2, 9, 6]

//(32)  Write a JavaScript function to find an array contains a specific element

//M-1
function find_items(arr, target) {

    return arr.find((value) => {
        return value == target
    })

}

//M-2
function find_items(arr, target) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return true
        }
    }
    return false
}

const ar = [2, 5, 9, 6];

console.log(find_items(ar, 0))
//(33) Write a JavaScript script to empty an array keeping the original
var elem = [5, 6, 7, 8, 9, 7, 8]
console.log(arr)

arr.length = 0
console.log(arr)

//(34) Write a JavaScript function to get nth largest element from an unsorted array

function nth_largest(arr, target) {
    //M-1

    let temp;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {

            if (arr[i] > arr[j]) {
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }

        }

    }

   // return arr_fourth = arr[target - 1];

    //M-2
    var array = arr.sort((a, b) => {
        return b -a
    })

    let nth_largest = array[target-1]
    

}

console.log(nth_largest([43, 56, 5, 23, 10, 50, 89, 88, 90, 99, 652], 2))

//(35)  Write a JavaScript function to get a random item from an array.

function randomItem(items) {

    return items[Math.round(Math.random() * items.length)]

}
const items = [254, 45, 212, 365, 2543];
console.log(randomItem(items))

//(36)  Write a JavaScript function to create a specified number of elements with pre-filled numeric value array
//M-1
function fillElement(arr) {

    return arr.fill(5, 3)

}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(fillElement(arr))

//M-2
function array_filled(n, val) {

    return Array.apply(null, Array(n)).map(Number.prototype.valueOf, val)

}

array_filled(6, 0)
array_filled(4, 11)

//(37) Write a JavaScript function to create a specified number of elements with pre-filled string value array.
//M-1
function fill_string(n, value) {

    const array = new Array(n)
    return array.fill(value)

}

console.log(fill_string(3, 'default value'))
console.log(fill_string(4, 'password'))

//M-2

function array_filled(n, val) {
    return Array.apply(null, Array(n)).map(String.prototype.valueOf, val);
}

console.log(array_filled(3, 'default value'));
console.log(array_filled(4, 'password'));

//(38)  Write a JavaScript function to move an array element from one position to another

function move_array_postion(arr, old_index, new_index) {
    //cond  as per input  
    while (old_index < 0) {
        old_index += arr.length
    }

    while (new_index < 0) {
        new_index += arr.length
    }

    if (new_index >= arr.length) {

        var k = new_index - arr.length
        while ((k--) + 1) {
            arr.push(undefined)

        }

    }
    //logic
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0])
    return arr

}
console.log(move_array_postion([10, 20, 30, 40, 50], 0, 2))  //[20,30,10,40,50]
console.log(move_array_postion([10, 20, 30, 40, 50], -1, -2)) //[10,20,30,50,40]

//(39)  Write a JavaScript function to filter false, null, 0 and blank values from an array.

function filter_array_values (arr) {

    let data = []
for(let i=0; i<arr.length; i++) {

    if((arr[i])) {
      data.push(arr[i])
    }

}

return data
}
console.log(filter_array_values([58, '', 'abcd', true, null, false, 0])); // [58, "abcd", true]

//(40) Write a JavaScript function to generate an array of specified length, filled with integer numbers, increase by one from starting position.

function generateArray(start, arr_len) {

    let array = new Array(arr_len)
    for (let i = 0; i < arr_len; i++, start++) {
        array[i] = start
    }
    return array

}

console.log(generateArray(1, 4))
console.log(generateArray(-6, 4))

//(41) Write a JavaScript function to generate an array between two integers of 1 step length

function generate_array_range(start, end) {

    if (start > end) {
        var arr1 = new Array(start - end + 1);
        for (let i = 0; i < arr1.length; i++, start--) {
            arr1[i] = start
        }
        return arr1;

    } else {
        var arr2 = new Array(end - start + 1)
        for (let j = 0; j < arr2.length; j++, start++) {
            arr2[j] = start
        }
        return arr2
    }

}

console.log(generate_array_range(4, 7))
console.log(generate_array_range(-5, 2))

//(42) . Write a JavaScript function to find the unique elements from two ar-rays.

function uniqueArray(arr1, arr2) {

    const array = arr1.concat(arr2)
    let obj = {}
    let unique = []

    for (let i = 0; i < array.length; i++) {
        obj[array[i]] = array[i]
    }

    for (let value in obj) {
        unique.push(obj[value])
    }
    return unique.sort((a, b) => {
        return a - b
    })
}

const item1 = [1, 2, 3],
    item2 = [100, 2, 1, 10]

console.log(uniqueArray(item1, item2))

//if array of object then 
const arrq = [{ city: "delhi" }, { city: "Noida" }, { city: "Noida" }, { city: "Noida" }, { city: "patna" }, { city: "patna" }]

let obje = {};
let dataa = []
for (let i = 0; i < arrq.length; i++) {

    if (obje[arrq[i]['city']])
        obje[arrq[i]['city']] = 0
    obje[arrq[i]['city']] = arrq[i]

}

for (let val in obje) {
    dataa.push(val)
}

console.log(dataa)

//(43)  Write a JavaScript function to create an array of arrays, ungrouping the elements in an array produced by zip

//M-1
function unzip(array) {

    const arr = array.flat();
    const groupA = []
    const groupB = []
    const groupC = []

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            groupA.push(arr[i])
        } else if (typeof arr[i] === 'string') {
            groupB.push(arr[i])
        } else if (typeof arr[i] === 'boolean') {
            groupC.push(arr[i])
        }
    }

    return [groupA, groupB, groupC]

}

console.log(unzip([['a', 1, true], ['b', 2]]))



//(44) Write a JavaScript function to create an object from an array, using the specified key and excluding it from each value

const indexOn = (arr, key) =>
    arr.reduce((obj, v) => {
        const { [key]: id, ...data } = v;
        obj[id] = data;
        return obj;
    }, {});

console.log(indexOn([
    { id: 10, name: 'apple' },
    { id: 20, name: 'orange' }
], x => x.id));

//(45)  Write a JavaScript program to find all unique values in an given array of numbers
//M-1
const unique_Elements = arr => [...new Set(arr)];

//M-2
function unique_Elements(arr) {
    return [...new Set(arr)]
}

//M-3

function unique_Elements(arr) {

    let obj = {}
    let unique = [];
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = arr[i]
    }

    for (let val in obj) {
        unique.push(obj[val])
    }
    return unique.sort((a, b) => {
        return a - b
    });

}

console.log(unique_Elements([1, 2, 2, 3, 4, 4, 5]))
console.log(unique_Elements([1, 2, 3, 4, 5]));
console.log(unique_Elements([1, -2, -2, 3, 4, -5, -6, -5]));

//(46) Write a JavaScript program to generate all permutations of an array's el-ements (including duplicates).

const permutations = arr => {
    if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
    return arr.reduce(
        (acc, item, i) =>
            acc.concat(
                permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [
                    item,
                    ...val,
                ])
            ),
        []
    );
};
console.log(permutations([1, 33, 5]));
console.log(permutations([1, 3, 5, 7]));
console.log(permutations([2, 4]));

//(47) Write a JavaScript program to remove all false values from an object or array.
const compactObject = val => {
    const data = Array.isArray(val) ? val.filter(Boolean) : val;
    return Object.keys(data).reduce(
        (acc, key) => {
            const value = data[key];
            if (Boolean(value))
                acc[key] = typeof value === 'object' ? compactObject(value) : value;
            return acc;
        },
        Array.isArray(val) ? [] : {}
    );
};
const obj = {
    a: null,
    b: false,
    c: true,
    d: 0,
    e: 1,
    f: '',
    g: 'a',
    h: [null, false, '', true, 1, 'a'],
    i: { j: 0, k: false, l: 'a' }
};
console.log(compactObject(obj));

//(48) Write a JavaScript program that takes an array of integers and returns false if every number is not prime. Otherwise, return true

function isPrime(arr) {

    for (let val of arr) {
        if (val == 1 | val > 2 & val % 2 == 0)
            return false

    }
    return true

}

console.log(isPrime([2, 3, 5, 7, 51]))


//(49) Write a JavaScript program that takes an array of numbers and returns the third smallest number.

function thirdSmallestNo(arr) {

    //M-1
    const sorted_data = arr.sort((a, b) => {
        return a - b
    })

    console.log(sorted_data[2])

    //M-2
    function third_smallest_no(arr) {

        let temp

        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {

                if (arr[i] < arr[j]) {
                    temp = arr[i]
                    arr[i] = arr[j]
                    arr[j] = temp
                }

            }

        }

        return third_item = arr[2]
    }

}

thirdSmallestNo([2, 3, 5, 7, 1])

//(50) . Write a JavaScript program that takes an array with mixed data type and calculates the sum of all numbers.
//M-1
function sum_of_mixed_data(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            sum += arr[i]
        }

    }
    return sum

}

console.log(sum_of_mixed_data([2, 'vikash', 3, 0, 5, 7, 8, true, false]))

//M-2
function calcuatedSum(arr) {

    let sum = 0
    for (let i = 0; i < arr.length; i++) {

        if (Number.isInteger(arr[i])) {
            sum += arr[i]
        }
    }

    return sum
}

console.log(calcuatedSum([2, 3, 0, 5, 7, 8, true, false]))

//(51)  Write a JavaScript program to check if an array is a factor chain or not.

function isFactor(arr) {
    for (let i = 0; i < arr.length - 1; i++) {

        if (arr[i + 1] % arr[i] != 0)
            return false

    }
    return true

}

console.log(isFactor([2, 4, 8, 16, 32, 64])) //true
console.log(isFactor([2, 4, 8, 16, 32, 65])) //false

//(52) Write a JavaScript program to get all the indexes where NaN is found in a given array of numbers and NaN.
//M-1 

function foundNAN(arr) {
    const data = []
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) == -1) {
            data.push(i)
        }
    }

    return data
}
// M-2

function foundNAN(arr) {
    const data = []
    arr.filter((val, i) => {
        if (isNaN(val)) {
            data.push(i)
        }
    })
    return data

}
console.log(foundNAN(([2, 4, NaN, 16, 32, NaN])))



//M3
function NaN_index_filter(arr) {

    return arr.map((ele, i) => {
        if (isNaN(ele))
            return i
    }).filter((val) => {
        return val
    })

}

console.log(NaN_index_filter([2, NaN, 8, 16, 32]))
console.log(NaN_index_filter([2, NaN, 8, 16, 32, NaN]))

//(53) Write a JavaScript program to count the number of arrays inside a given array.
//M-1
function countNestedArray(arr) {

    return arr.filter((val => Array.isArray(val))).length

}

//M-2
function countArray(arr) {

    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]))
            count += 1
    }

    return count
}

console.log(countArray(([2, 8, [6], 3, 3, 5, 3, 4, [5, 4]])))

//M-3

function countArray(arr) {

    const data = []
    for (let i = 0; i < arr.length; i++) {
        if (Object.prototype.toString.call(arr[i]) == '[object Array]') {
            data.push(arr[i])
        }
    }

    return data.length
}

console.log(countArray([2, 8, [6], 3, 3, 5, 3, 4, [5, 4]]))

console.log(countNestedArray([2, 8, [6, 3, 3], [4], 5, [3, 4, [5, 4]]]))

//(54) Implement a function that returns an updated array with r right rotations on an array of integers a .

const arr = [2, 3, 4, 5, 7]

function rotationElement(arr, rotate) {

    if (rotate == 0)
        return arr

    for (let i = 0; i < rotate; i++) {

        let element = arr.pop(i)
        arr.unshift(element)

    }

    return arr

}
console.log(rotationElement(arr, 3))

//(55)  Write the code given If two strings are anagrams of one another, then return true.

function isAnagrams(str1, str2) {

    let a = str1.toLowerCase();
    let b = str2.toLowerCase();

    a = a.split("").sort().join("")
    b = b.split("").sort().join("")

    return a === b

}

console.log(isAnagrams("Vikash", "Sonali"))


//(56) Write the code to find the vowels and (count vowels from string)

//M-1 
function vowelsCount(str) {

    let vowels = 'aeiouAEIOU';
    let data = []

for(let i=0; i<str.length; i++) {

    if(vowels.match(str[i])) {
        data.push(str[i])
    }
 }

return data.length
}
console.log(vowelsCount('VIKASHSINFH'))

//M-2
function vowelsCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u']

    let arr = []

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            arr.push(str[i])
        }

    }

    console.log(arr)
    console.log(arr.length)
}

vowelsCount('vikash')

///////////////////////////////////////////////////////////////////Geeks for Geek/////////////////////////////////////////////////////////////////////////
//(57) In JavaScript, how do you turn an Object into an Array []?

let object = {
    id: "1",
    name: "user22",
    age: "26",
    work: "programmer"
};

const arr = Object.entries(object)
console.log(arr)

for (let [key, val] of arr) {

    console.log(key, val)
}

//(58)  How to get removed elements of a given array until the passed function returns true in JavaScript ?

let arrayyyyyy = [1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 8, 8];
let limit = 5
//output - 1,2,2,3,4

function removeEleLimit(arr, limit) {
    //M-1
    let data = arr.filter((val) => {
        return val < limit
    })

    return data.join(" ")
    //M-2
    let data1 = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < limit) {
            data1.push(arr[i])
        }
    }

    return data1.join(" ")
}

console.log(removeEleLimit(array, limit))

//(58)  How to filter values from an array for which the comparator function does not return true in JavaScript ?

const arr = [5, 6, 7, 8, 9, 2, 6, 3, -4, 0, -9, -6];
//output -> [-4,-9,-6]

function filterNegativeItem(arr) {

    const data = arr.filter((val) => {
        return val < 0
    })

    return data
}

console.log(filterNegativeItem(arr))

//(59)  How many numbers in the given array are less/equal to the given value using the percentile formula ?

function percentileCalculation(arr, val) {

    let result = 0

    for (let i in arr) {
        result += (arr[i] < val ? 1 : 0) + (arr[i] === val ? 0.5 : 0)
    }

    const percent = (result / arr.length) * 100
    return percent
}
console.log(percentileCalculation([1, 2, 3, 4, 5, 6], 5))

//(60)  How to count number of occurrences of repeated names in an array of ob-jects in JavaScript ?

let arr = [
    {
        employeeName: "Ram",
        employeeId: 23
    },
    {
        employeeName: "Shyam",
        employeeId: 24
    },
    {
        employeeName: "Ram",
        employeeId: 21
    },
    {
        employeeName: "Ram",
        employeeId: 25
    },
    {
        employeeName: "Kisan",
        employeeId: 22
    },
    {
        employeeName: "Shyam",
        employeeId: 20
    }
]

//  Output: [
//      {employeeName: "Ram", occurrences: 3},
//      {employeeName: "Shyam", occurrences: 2},
//      {employeeName: "Kisan", occurrences:  1}
//  ] 

function countOccurance(arr, key) {

    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i][key]])
            obj[arr[i][key]] = 0
        obj[arr[i][key]] += 1
    }

    return ([obj])
}

console.log(countOccurance(arr, "employeeName"))

//(61)  How to count number of data types in an array in JavaScript ?

const arr = [1, true, "hello", [], {}, undefined, function () { }];

function countDataType(arr) {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (!obj[typeof arr[i]])
            obj[typeof arr[i]] = 0
        obj[typeof arr[i]] += 1

    }

    return obj

}

console.log(countDataType(arr)) 
// output 
// {
//     number: 1,
//     boolean: 1,
//     string: 1,
//     object: 1,
//     undefined: 1,
//     function: 1
//   }

//(62) How to remove falsy values from an array in JavaScript ?
let arr = [23, 0, "gfg", false, true, NaN, 12, "hi", undefined, [], ""];
//output -> [23, "gfg", true, 12, "hi", []]

function removeFalsyValue(arr) {
    let data = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            data.push(arr[i])
        }

    }

    return data
}

console.log(removeFalsyValue(arr))

//(63)  How to  rotate the array with given element ?
//output ->[3, 4, 5, 1, 2]
function moveItem(arr, rotate) {

    for (let i = 0; i <= rotate; i++) {
        let elem = arr.pop()
        arr.unshift(elem)

    }

    return arr
}

console.log(moveItem([1, 2, 3, 4, 5], 2))

//(64) How to get symmetric difference between two arrays in JavaScript ?

let A = [1, 2, 3, 4, 5, 6]
let B = [4, 5, 6, 7]

//output- [1, 2, 3]

function symmetricDifference(arr1, arr2) {
    let data = []

    for (let i = 0; i < arr1.length; i++) {

        if (arr2.indexOf(arr1[i]) === -1) {
            data.push(arr1[i])
        }

    }

    return data
}

console.log(symmetricDifference(A, B))

//(65)  How to get n largest elements from array in JavaScript ?

let arr = [5, 76, 32, 98, 52, 57], n = 3;
// Output: 98 , 76
function nthLargestItem(arr, n) {

    const sort_arr = arr.sort((a, b) => {
        return a - b
    })

    return sort_arr.splice(arr.length - n, n)

}
console.log(nthLargestItem(arr, n))

//(66) How to find every element that exists in any of two given arrays once us-ing JavaScript ?
const arr111 = [10, 20, 30, 40, 50]
const arr222 = [10, 20, 34, 32, 11]

function uniqueEle(arr1, arr2) {
    //M-1
    const set1 = new Set(arr1)
    console.log(set1)

    arr2.forEach(element => {
        set1.add(element)
    });

    return set1

    //M-2
    const arr = arr1.concat(arr2);
    const set = new Set(arr);
    return set

    //M-3
    const new_arr = arr1.concat(arr2);
    let obj = {}
    for (let i = 0; i < new_arr.length; i++) {
        if (obj[new_arr[i]])
            obj[new_arr[i]] = 0
        obj[new_arr[i]] = new_arr[i]
    }

    return Object.values(obj)
}
console.log(uniqueEle(arr1, arr2))

//(67) How to find all elements in a given array except for the first one using JavaScript ?

function findAllEleExceptOne(arr) {
    //M-1 (using loop)
    // let data = []
    // for(let i=1; i<arr.length; i++) {
    //     data.push(arr[i])
    // }
    // return data

    //M-2 (using slice Method)

    // return arr.slice(1)

    //M-3 (using filter Method)

    // return arr.filter((val, index) =>{
    //     return index != 0
    // })

    //M-4 (using reduce Method)

    // return arr.reduce((acc, currVal, i)=>

    //     (i == 0) ? acc : acc.concat(currVal), []
    // )

    //M-5 (using shift Method)

    // const shift =  arr.shift();
    // return arr

}

console.log(findAllEleExceptOne([10, 20, 30, 40, 50, 60]))

//(67) How to remove n elements from the end of a given array in JavaScript

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//output -> [ 1, 2, 3, 4, 5, 6 ]
function removeNthEle(arr, n) {
    //M-1 (using splice method)
    const splice = arr.splice(arr.length - n, n)
    return arr

    //M-2 (using pop method)
    while (n--)
        arr.pop()
    return arr

}
console.log(removeNthEle(arr, 3))

//(68)  How to create an object from two arrays in JavaScript?

function ArrayToObject(arr1, arr2) {

    return Object.fromEntries(arr1.map((key, index) => [key, arr2[index]]))

}

console.log(ArrayToObject([1, 2, 3, 4], ["ram", "shyam", "sita", "gita"]))

//(69) Swapping two array elements in a single line using JavaScript;

function swapTwoElementArray(arr) {
    //   Swapping element at index 3 with index 4

    [arr[3], arr[4]] = [arr[4], arr[3]]

    return arr

}
console.log(swapTwoElementArray([1, 2, 3, 4, 5])) //[ 1, 2, 3, 5, 4 ]

//(70)  How to print object by id in an array of objects in JavaScript ?

let arr = [
    { id: 1, name: "a" },
    { id: 2, name: "b" },
    { id: 3, name: "c" },
    { id: 4, name: "d" },
    { id: 5, name: "e" },
    { id: 6, name: "f" },
];

let input_id = 1
// const data = arr.filter((val) =>{
// return val.id == input_id 
// })

// console.log(data[0].name) //output -> a

for (let i = 0; i < arr.length; i++) {

    if (arr[i]['id'] == input_id) {
        console.log(arr[i]['name'])
    }

}

//(71) How to print unique elements from two unsorted arrays using JavaScript ?
let arr1111 = [54, 71, 58, 95, 20]
let arr2222= [71, 51, 54, 33, 80];

//output --> 58,95,20,51,33,80

// //using for loop
function  uniqueEle(arr1, arr2) {

   // const arr = arr1.concat(arr2);
   //const arr = [...arr1, ...arr2]
    let obj = {};
    let data = []

    for(let i=0; i<arr.length; i++) {
        if(!obj[arr[i]])
        obj[arr[i]] = 0
        obj[arr[i]]  += 1

    }
    for(let val in obj) {
        if(obj[val] === 1){
            data.push(val)
        }

    }

    return data.join(" ")
}


console.log(uniqueEle(arr1, arr2))

//using filter Method

function uniqueData (arr1, arr2) {
    const unique1 = arr1.filter((val) =>
    arr2.indexOf(val) === -1
 )
 
 const unique2 = arr2.filter((val) =>
 arr1.indexOf(val) === -1
 )
 
 const uniqueEle = unique1.concat(unique2);

 return uniqueEle.sort().join(" ")

}

console.log(uniqueData(arr1, arr2))

