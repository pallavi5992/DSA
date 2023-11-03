///////////////////////////////////OBJECT////////////////////////////////////////////////
//(1) Write a JavaScript program to list the properties of a JavaScript object.
//M-1
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
const key = Object.keys(student).join(" ")
console.log(key)

//M-2

for (let keys in student) {
    console.log(keys)
}

//(2) Write a JavaScript program to delete the rollno property from the follow-ing object. Also print the object before or after deleting the property

var students = {
    name: "vikash",
    roll: '12345',
    sub: "computer",
    age: 25

}
console.log(students)
delete students.age;
console.log(students)

//(3) Write a JavaScript program to get the length of a JavaScript object

var students = {
    name: "vikash",
    roll: '12345',
    sub: "computer",
    age: 25
}

console.log(Object.keys(students).length)

//(4)  Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];

for (let i = 0; i < library.length; i++) {
    var book = `${library[i].title} by ${library[i].author} `

    if (library[i].readingStatus) {
        console.log(`Already read ${book}`)
    } else {
        console.log(`Need to  read ${book}`)
    }
}

//(5)  Write a JavaScript program to get the volume of a Cylinder with four dec-imal places using object classes.

class Cyliender_Volume {
    constructor(h, d) {
        this.radius = d / 2
        this.area = (h * Math.PI * this.radius * this.radius).toFixed(4)

    }
}

var vol = new Cyliender_Volume(7, 4)
console.log(vol.area)

//(6) Write a Bubble Sort algorithm in JavaScript using class.

Array.prototype.bubble_sort = function () {

    var is_sort = false

    while (!is_sort) {
        is_sort = true

        for (let i = 0; i < this.length - 1; i++) {

            if (this[i] > this[i + 1]) {
                var x = this[i + 1]
                this[i + 1] = this[i]
                this[i] = x
                is_sort = false
            }
        }
    }
    return this;
}

var arr = [6, 4, 0, 3, -2, 1];

console.log(arr.bubble_sort())

//(7)  Write a JavaScript program which returns a subset of a string
//M-1
String.prototype.sub_string = function () {

    var subset = []
    for (let i = 0; i < this.length; i++) {

        for (let j = i + 1; j < this.length + 1; j++) {

            subset.push(this.slice(i, j))

        }
    }
    return subset

}

console.log("viku".sub_string());

//M-2
function sub_string(str) {

    var subset = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length + 1; j++) {

            subset.push(str.slice(i, j))

        }

    }

    return subset;

}
console.log(sub_string('viku'))

//(8)  Write a JavaScript program to create a Clock

function clock() {

    setInterval(() => {
        var date = new Date()
        console.log(date)
    }, 1000)
}
clock()

//(9) Write a JavaScript program to calculate the area and perimeter of a circle
//M-1
function circle(radius) {
    this.radius = radius;
    // area method
    this.area = function () {
        return Math.PI * this.radius * this.radius;
    };
    // perimeter method
    this.perimeter = function () {
        return 2 * Math.PI * this.radius;
    };
}
var c = new circle(3);
console.log('Area =', c.area().toFixed(2));
console.log('perimeter =', c.perimeter().toFixed(2));

//M -2
function circle(radius) {

    var area = (Math.PI * radius * radius).toFixed(3)
    var perimeter = (2 * Math.PI * radius).toFixed(3)

    console.log(`Area  of circle is ${area}`)
    console.log(`Perimeter  of circle is ${perimeter}`)
}

circle(3)

//(10)  Write a JavaScript program to sort an array of JavaScript objects.

var library = [
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        libraryID: 1254
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }];

var sort_by = function (field_name, reverse, initial) {

    var key = initial ?
        function (x) {
            return initial(x[field_name]);
        } :
        function (x) {
            return x[field_name];
        };

    reverse = !reverse ? 1 : -1;

    return function (x, y) {
        return x = key(x), y = key(y), reverse * ((x > y) - (y > x));
    };
};

var newobj = library.sort(sort_by('libraryID', true, parseInt));

console.log(newobj);

//(11) Write a JavaScript function to print all the methods in an JavaScript ob-jec

function Find_All_Methods(obj) {

    return Object.getOwnPropertyNames(obj).filter(function (property) {
        return typeof obj[property] == "function";
    });
}

console.log(Find_All_Methods(Function))
console.log(Find_All_Methods(Math))
console.log(Find_All_Methods(Object))
console.log(Find_All_Methods(Array))

function Find_All_Prperties(obj) {

    return Object.getOwnPropertyNames(obj)
}

console.log(Find_All_Prperties(Object))
console.log(Find_All_Prperties(Math))
console.log(Find_All_Prperties(Array))

//(12)  Write a JavaScript function to parse an URL

//(13) Write a JavaScript function to retrieve all the names of object's own and inherited properties.

class Father {
    constructor(money) {
        this.Fmoney = money
    }

    showFmoney() {
        return 'Father Name and Money' + " " + this.Fmoney
    }

}

class Son extends Father {

    constructor(money) {
        super(money)
        this.name = 'raju'
    }

    showSName() {
        return 'My NAme is ' + " " + this.name
    }

}

var s = new Son(1000)
console.log(s.showSName())
console.log(s.showFmoney())

//(14) Write a JavaScript function to retrieve all the values of an object's properties

var students = {
    name: "vikash",
    roll: '12345',
    sub: "computer",
    age: 25

}
console.log(Object.values(students))

for (let value of Object.entries(students)) {
    console.log(value[1])
}

//(15) Write a JavaScript function to convert an object into a list of `[key, value]` pairs

const key_value_pairs = {
    red: "#FF0000",
    green: "#00FF00",
    white: "#FFFFFF"

}

for (let key of Object.entries(key_value_pairs)) {

    console.log(key)
}

//(16)  Write a JavaScript function to get a copy of the object where the keys have become the values and the values the keys.

function invert_key_value(obj) {
    var result = {};
    var keys = _keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
        result[obj[keys[i]]] = keys[i];
    }
    return result;
}
function _keys(obj) {
    if (!isObject(obj)) return [];
    if (Object.keys) return Object.keys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
}
function isObject(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
}
console.log(invert_key_value({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" }));

//(17) Write a JavaScript function to check whether an object contains given property.

function checkProperty(obj, key) {

    console.log(obj.hasOwnProperty(key))
}

const obj = {
    red: "#FF0000",
    green: "#00FF00",
    white: "#FFFFFF"
}
checkProperty(obj, 'green')

//(18) Write a JavaScript function to check whether a given value is a DOM ele-ment

function is_dom_element(obj) {
    return !!(obj && obj.nodeType === 1);
}
console.log(is_dom_element(jQuery('body')[0]));

//////////////////////////////////////////////////Geeks for Geek////////////////////////////////////////////////////////////////////////////////////////////////////////
//(2) How to compare two objects to determine the first object contains equiva-lent property values to the second object in JavaScript ?

let obj1 = { name: "John", age: 23, degree: "CS" }
let obj2 = { age: 23, degree: "CS" }

//M-1
function compateObject1(obj1, obj2) {

    for (key in obj2) {

        if (obj1[key] !== obj2[key]) {
            return false
        }
    }
    return true

}
console.log(compateObject1(obj1, obj2))
// M-2

function compateObject2(obj1, obj2) {

    return Object.keys(obj2).every((val) => obj1.hasOwnProperty(val))
}
console.log(compateObject2(obj1, obj2))

//(4) How to convert two-dimensional array into an object in JavaScript ?

const arr = [
    ["John", 12],
    ["Jack", 13],
    ["Matt", 14],
    ["Maxx", 15]
]

let object = {}

arr.forEach((val) => {

    let key = val[0]
    let value = val[1]
    object[key] = value
});

console.log(object)

//(5)  How to create an object from two arrays in JavaScript?

//{ '1': 'ram', '2': 'shyam', '3': 'sita', '4': 'gita' }

//M-1 Using forEach loop
function createObject1(arr1, arr2) {

    let obj = {}
    arr1.forEach((key, i) => {
        { obj[key] = arr2[i] }
    })

    return obj
}

console.log(createObject1([1, 2, 3, 4], ["ram", "shyam", "sita", "gita"]))

//M-2 Using Object.assign loop

function createObject2(arr1, arr2) {

    return (Object.assign(...arr1.map((key, i) => ({ [key]: arr2[i] }))))

}
console.log(createObject2([1, 2, 3, 4], ["ram", "shyam", "sita", "gita"]))

//M-3 Using reduce loop

function createObject3(arr1, arr2) {

    const obj = arr1.reduce((acc, currVal, index) => {

        return {
            ...acc, [currVal]: arr2[index]
        }
    }, {})

    return obj

}

console.log(createObject3([1, 2, 3, 4], ["ram", "shyam", "sita", "gita"]));

//(8)  How to print object by id in an array of objects in JavaScript ?

let arr = [
    { id: 1, name: "a" },
    { id: 2, name: "b" },
    { id: 3, name: "c" },
    { id: 4, name: "d" },
    { id: 5, name: "e" },
    { id: 6, name: "f" },
];

let idYouWant = 2
//M-1
const data1 = arr.filter((item) => {
    return item.id == idYouWant
});

console.log(data1[0].name)

// //M-2
const data2 = arr.find((item) => {
    return item.id == idYouWant
});

console.log(data2.name)
//M-3
for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === idYouWant) {
        console.log(arr[i].name)
    }

}

//(9)  How to create dynamic values and objects in JavaScript ?
const dynamic1 = "Age";
const dynamic2 = "Marks";
const user = {
    Name: "GeeksForGeeks",
    [dynamic1]: "57",
    [dynamic2]: "42"
};

console.log(user);

//(11)  How to implement a filter() for Objects in JavaScript ?

//filter on Array
let array = [-1, -4, 5, 6, 8, 9, -12, -5, 4, -1];
const newArray = array.filter((val) => {
    return val >= 0
})

console.log(array)
console.log(newArray)

//filter on  Array of Object

let employees = [
    { name: "Tony Stark", department: "IT" },
    { name: "Peter Parker", department: "Pizza Delivery" },
    { name: "Bruce Wayne", department: "IT" },
    { name: "Clark Kent", department: "Editing" }
];

const newEmp = employees.filter((val) => {
    return val.department == "IT"
})
console.log(newEmp)

//(18) How to remove duplicates from an array of objects using JavaScript ?

let books = [
    { title: "C++", author: "Bjarne" },
    { title: "Java", author: "James" },
    { title: "Python", author: "Guido" },
    { title: "Java", author: "James" },
];

//M-1
function removeDuplicate(arr) {
    let obj = {}
    for(let i=0; i<arr.length; i++) {
     if(obj[arr[i]['title']]) 
     obj[arr[i]['title']] = 0
     obj[arr[i]['title']]  = arr[i]
    }

    return Object.values(obj)
}

console.log(removeDuplicate(books))

//M-2 

    let jsonObj = books.map(JSON.stringify);
    let uniqueVal = new Set(jsonObj);
    let  uniqueData = Array.from(uniqueVal).map(JSON.parse);
    console.log(uniqueData);

//M-3  
let ids = books.map(({title})=> title)
const filterData = books.filter(({title}, index) => 
!ids.includes(title, index + 1));

console.log(filterData)

//M-4 
const unique = books.filter((obj, index) => {
    return index === books.findIndex(o => obj.title === o.title);
});
 
console.log(unique);