/////////////////////////MOB/////////////////////////////////////////////////
//(1)  Write a function to create a 2-D List/Array with random integers between 0 to 100. This function should take two arguments - numberOfRows and number-OfColumns and return a 2Dlist. 

function createRandom2DList(rows, colums) {

    let rowsList = []
       for(let i=0; i<rows; i++) {
          let columnList = []
           for(let j=0; j<colums; j++) {
              let  randomInt = Math.floor(Math.random() * 101)
               columnList.push(randomInt)
           }
           rowsList.push(columnList)
       } 
   
   return rowsList
   }
   const random2DList = createRandom2DList(4, 3);
   console.log(random2DList);
  
 
  
  //(2) Write a function to sort the 2-D list based on column index keeping the rows intact. This function should take two arguments - 2D list created above and column Index and return sorted2D list. 
  function sort2DListByColumn(list2D, columnIndex) {
    const sorted2DList = [...list2D]; // Create a copy of the original 2D list
    
    sorted2DList.sort((a, b) => {
      const valueA = a[columnIndex];
      const valueB = b[columnIndex];
      if (valueA < valueB) {
        return -1;
      }
      if (valueA > valueB) {
        return 1;
      }
      return 0;
    });
    return sorted2DList;
  }
  const list2D = [
    [72, 53, 21],
    [18, 89, 10],
    [6, 37, 87],
    [94, 47, 9]
  ]
  
  const sorted2DList = sort2DListByColumn(list2D, 1);
  console.log(sorted2DList);
//(3) Write the code for below question: calculate the shares  
  const awards  = [ 
    { 
    name: 'James Peebles', 
    category: 'Physics', 
    research: 'Theoretical discoveries in physical cosmology', 
    year: 2019, 
    }, 
    { 
    name: 'Michel Mayor', 
    category: 'Physics', 
    research: 'Discovery of an exoplanet orbiting a solar-type star', 
    year: 2019, 
    }, 
    { 
    name: 'Didier Queloz', 
    category: 'Physics', 
    research: 'Discovery of an exoplanet orbiting a solar-type star', 
    year: 2019, 
    }, 
    {
    name: 'John B. Goodenough', 
    category: 'Chemistry', 
    research: 'Development of lithium-ion batteries', 
    year: 2019, 
    }, 
    { 
    name: 'M. Stanley Whittingham', 
    category: 'Chemistry', 
    research: 'Development of lithium-ion batteries', 
    year: 2019, 
    }, 
    { 
    name: 'Akira Yoshino', 
    category: 'Chemistry', 
    research: 'Development of lithium-ion batteries', 
    year: 2019, 
    }, 
    { 
    name: 'Arthur Ashkin', 
    category: 'Physics', 
    research: 'Optical tweezers and their application to biological systems', year: 2018, 
    }, 
    { 
    name: 'Gerard Mourou', 
    category: 'Physics', 
    research: 'Method of generating high-intensity, ultra-short optical pulses', year: 2018, 
    }, 
    { 
    name: 'Donna Strickland', 
    category: 'Physics', 
    research: 'Method of generating high-intensity, ultra-short optical pulses', year: 2018, }, 
    { 
    name: 'Frances H. Arnold', 
    category: 'Chemistry', 
    research: 'Directed evolution of enzymes', 
    year: 2018, 
    }, 
    { 
    name: 'George P. Smith', 
    category: 'Chemistry', 
    research: 'Phage display of peptides and antibodies.', 
    year: 2018, 
    }, 
    { 
    name: 'Sir Gregory P. Winter', 
    category: 'Chemistry', 
    research: 'Phage display of peptides and antibodies.', 
    year: 2018, 
    }, 
    ]; 

    let obj = {}
 for(let i=0; i<arr.length; i++) {

    if(obj[arr[i]["year"]] || obj[arr[i]["category"]]) 
    obj[arr[i]["year"]] = 0
    obj[arr[i]["category"]]=  0 
    obj[arr[i]["year"]] = arr[i]
    obj[arr[i]["category"]] = arr[i]
    
  }

for(let [key, val] of Object.entries(obj)) {
console.log(key, val)
}
  

//(4)
const portfolio = [
    { name: 'Mark', stock: 'FB' },
    { name: 'Steve', stock: 'AAPL' },
    { name: 'Tim', stock: 'AAPL' },
    { name: 'Steve', stock: 'MSFT' },
    { name: 'Bill', stock: 'MSFT' },
    { name: 'Bill', stock: 'AAPL' },
];

function groupByStock(arr) {

    let obj = {}

    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]['stock']])
            obj[arr[i]['stock']] = 0
        obj[arr[i]['stock']] += 1

    }

    console.log(obj)
}

groupByStock(portfolio)

//(5) Given two sorted arrays, A and B, A is sorted in ascending order and B is sorted in descending order, Write a  JS function which will take these two sort-ed arrays as arguments and return the combined sorted array;

function sortedTwoArray(arr1, arr2) {

    const arr = [...arr1, ...arr2];
    let temp = ""
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }

        }
    }

    return arr

}

console.log(sortedTwoArray([1, 2, 3, 6], [12, 5, 4, 7, 9, 0, 2]))

//(6) Sort the arr a =[1,3,6,4,7,8,7] in ascending/descending order without us-ing predefined inbuilt functions. 

function sortArrayEle(arr) {
    let temp;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            //(if here change condition for ASC or DESC)
            if (arr[i] < arr[j]) {
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp

            }

        }
    }

    return arr
}
console.log(sortArrayEle([1, 3, 6, 4, 7, 8, 7]))

//(7) Write the code for the question below without using predefined inbuilt functions
//M-1
function flattenArray(arr) {
    let data = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            data = data.concat(flattenArray(arr[i]))
        } else {
            data.push(arr[i])
        }
    }
    return data
}
console.log(flattenArray([1, 5, 3, [4, 8, 7, 0, 6, [7, 9, 7, 8]]]))

//M-2
function flatArray(arr) {

    return arr.flat(2)
}
console.log(flatArray([1, 5, 3, [4, 8, 7, 0, 6, [7, 9, 7, 8]]]))

//(8) Find the sum of the array. 

const arr = [[1, 2, 3], [0, 1, 1], [3, 45, 7], [1, 1, 1], [4, 6, 7], [3, 45, 7], [3, 45, 7], [1, 11]]

//M-1 (sum of  total array element)
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        sum += arr[i][j];
    }
}
console.log(sum);

//M-2 (individaul sum of array)
let data = []
const result = arr.map((val) => {
    data.push(val.reduce((acc, currVal) => acc + currVal, 0))
})
console.log(data)

//(9) Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string ""
function longestCommonString(arr) {

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

console.log(longestCommonString(["flower", "flow", "flight"]))

//(11) Write the code for the question below without using predefined inbuilt functions

function flattenArray(arr) {
    let data = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            data = data.concat(flattenArray(arr[i]))
        } else {
            data.push(arr[i])
        }
    }
    return data
}
console.log(flattenArray([1, 5, 3, [4, 8, 7, 0, 6, [7, 9, 7, 8]]]))

/*(1)Wha1t is Authorization and authentication 
->Authentication is the process of verifying who a user is. and use create token usnig JWT token and verify it., while Authorization is the process of verifying what they have access to. like use Role and Permission for module of application pages 

(2) Wha12t are method available in nodejs 
console.log()
console.clear()
console.count()
console.debug()
console.dir()
console.error() 

(3)Who213w can we we Authorize get method call 
-> SuperAdmin 

(4)Wha32t are three type authentication layer3
-> There are three authentication factors that can be used: something you know, something you have, and something you are. Something you know would be a pass-word, a PIN, or some other personal information.
common authentication method used in our application 
1. password
2. Multi-factor authentication 
3. Singh sign-on
4. Bio-metrics */

//(12) Write a function to find a pair of number from a given array whose sum equals to a given target.
//Example (2, 9, 3, 12, 17, 1) target 10

function findPair(arr, target) {

    let pair = [];
    let indexNum = [];
    let index

    for (let i = 0; i < arr.length; i++) {

        if (pair[arr[i]] != null) {
            index = pair[arr[i]]
            indexNum[0] = index
            indexNum[1] = i
            break;
        } else {
            pair[target - arr[i]] = i
        }
    }

    return indexNum
}
console.log(findPair([2, 9, 3, 12, 17, 1], 10))

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

//(13)  Flat an array without using any predefined function.

function flattenArray(arr) {
    let data = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            data = data.concat(flattenArray(arr[i]))
        } else {
            data.push(arr[i])
        }
    }
    return data
}
console.log(flattenArray([10, [50, 31, [44, 81, 73, 0, 63, [17, 29, 37, 78]]]]))


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