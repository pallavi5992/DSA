

//////////////////////// RECURSION /////////////////////////////////////////// 

//(1) Write a JavaScript program to calculate the factorial of a number.

function fact(n) {

    if (n === 0) {
        return 1
    }

    return n * fact(n - 1)

}

console.log(fact(6))

//(2) Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers

function gcd(a, b) {

    if (!b) {
        return a
    }
    return gcd(b, a % b)

}

console.log(gcd(2154, 458))

//(3) Write a JavaScript program to get the integers in range (x, y)

var range = function (start_num, end_num) {
    if (end_num - start_num === 2) {
        return [start_num + 1];
    }
    else {
        var list = range(start_num, end_num - 1);
        list.push(end_num - 1);
        return list;
    }
};

console.log(range(2, 9));

//(4) Write a JavaScript program to compute the sum of an array of integers. 

var sum = function (arr) {

    if (arr.length == 1) {
        return arr[0]
    } else {

        return arr.pop() + sum(arr)
    }

};

console.log(sum([1, 2, 3, 4, 5, 6]));

//(5) Write a JavaScript program to compute the exponent of a number.

var exponent = function (a, n) {

    if (n === 0) {
        return 1;
    } else {
        return a * exponent(a, n - 1)
    }

}

console.log(exponent(6, 2))

//(6)  Write a JavaScript program to get the first n Fibonacci numbers.

var fibonacci_series = function (n) {
    if (n === 1) {
        return [0, 1];
    }
    else {
        var s = fibonacci_series(n - 1);
        s.push(s[s.length - 1] + s[s.length - 2]);
        return s;
    }
};

console.log(fibonacci_series(8));

//(7) Write a JavaScript program to check whether a number is even or not

function is_even_recursion(number) {
    if (number < 0) {
        number = Math.abs(number);
    }
    if (number === 0) {
        return true;
    }
    if (number === 1) {
        return false;
    }
    else {
        number = number - 2;
        return is_even_recursion(number);
    }
}
console.log(is_even_recursion(234)); //true

//(8)  Write a JavaScript program for binary search.

Array.prototype.binary_search = function (target) {
    var half = parseInt(this.length / 2)

    if (target == this[half]) {
        return half
    }

    if (target > this[half]) {
        return half + this.slice(half, this.length).binary_search(target)

    } else {

        return this.slice(0, half).binary_search(target)

    }

}
const arr = [0, 1, 2, 3, 4, 5, 6, 8];
console.log(arr.binary_search(6))

//(9) Write a merge sort program in JavaScript

Array.prototype.merge_sort = function () {

    if (this.length <= 1) {
        return this
    }

    var half = parseInt(this.length / 2)
    var left = this.slice(0, half).merge_sort()
    var right = this.slice(half, this.length).merge_sort()

    var merge = function (left, right) {
        var array = [];

        while (left.length > 0 && right.length > 0) {

            array.push((left[0] <= right[0]) ? left.shift() : right.shift())

        }
        return array.concat(left).concat(right)

    }

    return merge(left, right)

}

var arr1 = [34, 7, 23, 32, 5, 62];

console.log(arr1.merge_sort())

//(10) Write a JavaScript program to check whether a given string is Palindrome or not using recursion

const testPalindrom = (str) => {

    if (typeof str !== 'string') {
        return 'string should not be empty'
    }

    if (str.length <= 1) {
        return true
    }

    if (str[0] !== str[str.length - 1]) {
        return false
    } else {
        return testPalindrom(str.slice(1, str.length - 1))
    }

}

console.log(testPalindrom('madam'))

//(11) Write a JavaScript program to convert Binary number (positive) to Decimal using recursion. 

const binary_to_decimal = (n) => {

    if (n === 0 || n === 1) {
        return String(n)
    }
    return binary_to_decimal(Math.floor(n / 2) + String(n % 2))
}

console.log(binary_to_decimal(1))

//(12) Write a JavaScript program to search a given integer in an array of sort-ed integers using Binary Search Algorithm and recursion

const binary_Search = (arr, searchValue, low = 0, high = arr.length - 1) => {
    // base case
    if (high < low || arr.length === 0) return -1
    const mid = low + Math.floor((high - low) / 2)
    // If the element is present at the middle
    if (arr[mid] === searchValue) {
        return mid
    }
    // If element is smaller than mid, then
    // it can only be present in left subarray
    if (arr[mid] > searchValue) {
        return binary_Search(arr, searchValue, low, mid - 1)
    }
    // Else the element can only be present in right subarray
    return binary_Search(arr, searchValue, mid + 1, high)
}
const myArray = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
console.log(binary_Search(myArray, 6));
console.log(binary_Search(myArray, 16));

//(13) A string consists of digits ranging from 2 to 9, inclusive.
// Write a JavaScript program to get all possible letter combinations that can represent the number using recursion

const test = (digits) => {
    const length = digits?.length
    const result = []
    if (!length) {
        return result
    }
    const digit_Map = {
        1: 'abc',
        2: 'def',
        3: 'ghi',
        4: 'jkl',
        5: 'mno',
        6: 'pqr',
        7: 'stu',
        8: 'vwx',
        9: 'yz'
    }

    const letter_combinations = (index, combination) => {
        let letter
        let letterIndex
        if (index >= length) {
            result.push(combination)
            return
        }
        const digit = digit_Map[digits[index]]
        letterIndex = 0
        while ((letter = digit[letterIndex++])) {
            letter_combinations(index + 1, combination + letter)
        }
    }
    letter_combinations(0, '')
    return result
}
console.log(test("12"))
console.log(test("9"))