////////////////////////////////STRING///////////////////////////////////////////////////////

//(0) find all possible combination of string/array
function combinationOfstring (str) {

    let data=  []
    for(let i=0; i<str.length + 1; i++) {
        for(let j=i + 1; j<str.length + 1; j++) {
            data.push(str.slice(i, j))

        }

    }

    return data
}
console.log(combinationOfstring('dog'))

//(0) Write a JavaScript function to reverse words in a given string
function reverse_word (str) {

    let data = []
    const arr = str.split(" ")

    for(let i=0; i<arr.length; i++) {

       data.push(arr[i].split("").reverse().join(""))

    }

    return data.join(" ")
}

console.log(reverse_word("vikash tarun "))
//(0) Conevrt the string into arr and reverse the word without using in-build method
const stri = "I am Vikash Kumar Singh";

//M-1
function reverseWord(str) {
    const arr = str.split(" ");
    console.log(arr.reverse())

}
reverseWord(str)
//M-2
function StringToArray(str) {

    let data = []
    let newStr = ""

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            newStr += str[i];

        } else {
            data.push(newStr)
            newStr = ""
        }

    }
    data.push(newStr)
    return data.reverse()

}
console.log(StringToArray(str))

//(1)  Write a JavaScript function to check whether an `input` is a string or not. 

//M-1
function checkString(input) {
    if (typeof input === 'string') {
        return true
    } else {
        return false
    }
}

console.log(checkString('jai mata di'))
console.log(checkString([1, 2, 3]))
console.log(checkString(1223))
console.log(checkString('1223'))

//M-2

function isString(input) {
    if (Object.prototype.toString.call(input) === '[object String]') {
        return true
    } else {
        return false
    }

}
console.log(isString('jai mata di'))
console.log(isString([1, 2, 3]))
console.log(isString(1223))
console.log(isString('1223'))

//(2)  Write a JavaScript function to check whether a string is blank or not.
//M-1
function isBlank(input) {

    if (input.length > 0) {
        return true
    } else {
        return false
    }

}

//M-2
function isBlank(str) {

    if (str === "") {
        return true
    } else {
        return false
    }

}
console.log(isBlank(''))

console.log(isBlank(''))
console.log(isBlank('abc'))

//(3) Write a JavaScript function to split a string and convert it into an array of words

function string_to_array(str) {

    return str.trim().split(" ")

}
console.log(string_to_array('      vikash singh'))

//(4) Write a JavaScript function to extract a specified number of characters from a string

function extract_char(str, length) {

    return str.slice(0, length)
}

console.log(extract_char("Vikash Singh", 4))

//(5)  Write a JavaScript function to convert a string into abbreviated form
//M-1
function string_abbreviated(str) {

    const arr = str.trim().split(" ")[0]
    const arr1 = str.trim().split(" ")[1].charAt(0)

    return `${arr}  ${arr1}`

}
console.log(string_abbreviated("Vikash Singh"))

//M-2

function abbrev_name(str) {
    const arr = str.split(" ")

    return arr[0] + " " + arr[1].charAt(0)
}
console.log(abbrev_name("Robin Singh"));

//(6)   Write a JavaScript function that hides email addresses to prevent unau-thorized access

function hideEmail(email) {

    var split = email.split('@')
    var part1 = split[0]
    var avg = part1.length / 2;
    var part1 = part1.substring(0, (part1.length - avg))
    var part2 = split[1]

    return part1 + "... " + part2

}

console.log(hideEmail("robin_singh@example.com"))

//(7)   Write a JavaScript function to parameterize a string

//M-1
function string_parameterize(str) {

    return str.trim().toLowerCase().split(" ").join("-")

}

console.log(string_parameterize("Vikash Singh from India"))
console.log(string_parameterize("     Vikash Singh from India"))

//M-2

function string_parameterize(str) {
    const data = []

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            data.push("-")
        } else {
            data.push(str[i])
        }
    }

    return data.join("")

}
console.log(string_parameterize("Robin Singh from USA."));

//(8)  Write a JavaScript function to capitalize the first letter of a string

//M-1
function first_Capitals_Char(str) {

    return str.charAt(0).toUpperCase() + str.slice(1)

}

console.log(first_Capitals_Char('js string exercises'))

//M-2
function first_Capitals_Char(str) {

    const first = str.split(" ")[0].charAt(0).toUpperCase()
    const last = str.slice(1)
    return first + "" + last

}

console.log(first_Capitals_Char('js string exercises'))

//(9) Write a JavaScript function to capitalize the first letter of each word in a string
//M-1
function capitalize_first_letter(str) {

    let arr = str.trim().split(" ")

    for (let i = 0; i < arr.length; i++) {

        arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1)
    }
    return arr.join(" ")

}

console.log(capitalize_first_letter('js string exercises'))

//M-2

function capitalize_Words(str) {
    return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
}
console.log(capitalize_Words('js string exercises'));

/* (10)   Write a JavaScript function that takes a string with both lowercase and upper case letters as a parameter. 
          It converts upper case letters to lower case, and lower case letters to upper case */
//M-1
function lower_to_upper_and_upper_to_lower(str) {

    var lower_letter = 'abcdefghijklmnopqrstuvwxyz'
    var upper_letter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    for (let i = 0; i < str.length; i++) {
        if (lower_letter.match(str[i])) {
            console.log(str[i].toUpperCase())
        } else if (upper_letter.match(str[i])) {
            console.log(str[i].toLowerCase())
        }
    }

}

lower_to_upper_and_upper_to_lower('AaBbc')

//M-2

swapcase = function swapcase(str) {
    return str.replace(/([a-z]+)|([A-Z]+)/g, function (match, chr) {
        return chr ? match.toUpperCase() : match.toLowerCase();
    });
}
console.log(swapcase('AaBbc'));

//(11)   Write a JavaScript function to convert a string into camel case.

function camelize(str) {

    let data = []

    for (let i = 0; i < str.length; i++) {
        if (str[i] == " ") {
            data.push(str[i].slice(1) + str[i + 1].toUpperCase())
        } else {
            data.push(str[i])
        }

    }

    return data.join("")

}
console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises"));
console.log(camelize("JavaScriptExercises"));

//(12)  Write a JavaScript function to uncommelize a string.

function uncamelize(str, seprator) {

    if (typeof seprator === 'undefined') {
        seprator = ' '
    }

    var str = str.replace(/[A-Z]/g, function (letter) {
        return seprator + letter.toLowerCase()
    })

    return str.replace("/^" + seprator + "/", '')

}

console.log(uncamelize('helloWorld'))
console.log(uncamelize('helloWorld', '-'))
console.log(uncamelize('helloWorld', '/'))

//(13) Write a JavaScript function to concatenate a given string n times (de-fault is 1). 

function repeat_string(str, count) {

    if (typeof count === 'undefined') {
        count = 1
    }

    let string = new Array(count + 1).join(str)
    return string

}

console.log(repeat_string('Vikash', 4))

//(14) Write a JavaScript function to insert a string within a string at a par-ticular position (default is 1).

function insert_string(str, insert_data, position) {

    if (typeof insert_data === 'undefined') {
        insert_data = ''
    }
    if (typeof position === 'undefined') {
        position = 0
    }

    return str.slice(0, position) + insert_data + str.slice(position)

}

console.log(insert_string('We are doing some exercises.'));
console.log(insert_string('We are doing some exercises.', 'JavaScript '));
console.log(insert_string('We are doing some exercises.', 'JavaScript ', 18));

//(15)  Write a JavaScript function that format a number in a human-readable string with the correct suffix, such as 1st, 2nd, 3rd, etc

function number_th(num) {

    if (typeof num == 'undefinde') {
        return
    }

    if (num % 100 >= 11 && num % 100 <= 13)
        return num + "th"

    switch (num % 10) {
        case 1: return num + "st"
        case 2: return num + "nd"
        case 3: return num + "rd"
    }
    return num + "th"

}

console.log(number_th(60))

//(16)   Write a JavaScript function to truncate a string if it is longer than the specified number of characters. Truncated strings will end with a translata-ble ellipsis sequence ("�") (by default) or specified characters

text_truncate = function (str, length, ending) {
    if (length == null) {
        length = 100;
    }
    if (ending == null) {
        ending = '...';
    }
    if (str.length > length) {
        return str.substring(0, length - ending.length) + ending;
    } else {
        return str;
    }
};
console.log(text_truncate('We are doing JS string exercises.'))
console.log(text_truncate('We are doing JS string exercises.', 19))
console.log(text_truncate('We are doing JS string exercises.', 15, '!!'))

//(17)  Write a JavaScript function to chop a string into chunks of a given length

string_chop = function (str, size) {
    if (str == null) return [];
    str = String(str);
    size = ~~size;
    return size > 0 ? str.match(new RegExp('.{1,' + size + '}', 'g')) : [str];
}
console.log(string_chop('w3resource'));
console.log(string_chop('w3resource', 2));
console.log(string_chop('w3resource', 3));

//(18)  Write a JavaScript function to count substrings in a string.

function count_string(str, searchVal) {

    //M-1
    function word_match_count(str1, str2) {

        const arr1 = str1.split("")
        const arr2 = str2.split("")
        const data = []
        for (let i = 0; i < arr1.length; i++) {

            if (arr1[i] == arr2) {
                data.push(arr1[i])

            }

        }

        console.log(data.length)

    }
    word_match_count("the quick brown fox jumps over the lazy  the dog", 'the')
    //M-2
    let arr1 = str1.toLowerCase().split(" ");
    let data = [];

    arr1.filter((val) => {
        if (val === str2) {
            data.push(val)
        }
    })

    return data.length
}
console.log(count_string("The quick brown fox jumps over the lazy  the dog", 'the'))
console.log(count_string("vikash sonali sulekha sonali sonali", "sonali"))

//(19)  Write a JavaScript function to escape a HTML string.

function escape_HTML(html_str) {
    'use strict';

    return html_str.replace(/[&<>"]/g, function (tag) {
        var chars_to_replace = {
            '&': '&',
            '<': '<',
            '>': '>',
            '"': '"'
        };

        return chars_to_replace[tag] || tag;
    });
}

console.log(escape_HTML('<a href="javascript-string-exercise-17.php" tar-get="_blank">'));

//(20) Write a JavaScript function that can pad (left, right) a string to get to a specific length.

function formatted_string(pad, user_str, pad_pos) {
    if (typeof user_str === 'undefined')
        return pad;
    if (pad_pos == 'l') {
        return (pad + user_str).slice(-pad.length);
    }
    else {
        return (user_str + pad).substring(0, pad.length);
    }
}
console.log(formatted_string('0000', 123, '5'));
console.log(formatted_string('00000000', 123, ''));

//(21)   Write a JavaScript function to repeat a string for a specified time

function repeat_string(str, count) {

    if (str == 'undefined') {
        return "String is not Valid"
    }

    if (count == 'undefined') {
        return "count is not valid"
    }
    return new Array(count + 1).join(str)

}

console.log(repeat_string('a', 3))

//(22) Write a JavaScript function to get a part of a string after a specified character.

function subStrAfterChars(str, char, pos) {
    if (pos == 'b')
        return str.substring(str.indexOf(char) + 1);
    else if (pos == 'a')
        return str.substring(0, str.indexOf(char));
    else
        return str;
}

console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':', 'a'));

console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E', 'b'));

//(23) Write a JavaScript function to strip leading and trailing spaces from a string. 

function trim_string(str) {

    // return str.trim()
    return str.replace(/^\s+|\s+$/g, '')

}

console.log(trim_string('w3resource '))
console.log(trim_string(' w3resource'))
console.log(trim_string(' w3resource '))

//(24) Write a JavaScript function to truncate a string to a certain number of words

function truncate_string(str, num) {

    const arr = str.split(" ")
    return arr.slice(0, num).join(" ")

}

console.log(truncate_string('The quick brown fox jumps over the lazy dog', 6))

//(25) Write a JavaScript function to alphabetize a given string

function sort_string(str) {

    return str.split("").sort().join("").trim()

}
console.log(sort_string("India State"))

//(26)   Write a JavaScript function to remove the first occurrence of a given 'search string' from a string
//M-1
function remove_first_occurrence(str, search) {
    const arr = str.split(" ")
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === search) {

            delete arr[i]

        }
    }
    console.log(arr.join(" "))

}
remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'The')

//M-2
function remove_first_occurance(str, search) {

    const index = str.indexOf(search)

    if (index == -1) {
        return str
    }

    return str.slice(0, index) + str.slice(index, search.length)

}

console.log(remove_first_occurance('The quick brown fox jumps over the lazy dog', 'the'))

//(27)  Write a JavaScript function to convert ASCII to Hexadecimal format
function ascii_hexa(str) {

    var arr = [];

    for (let i = 0; i < str.length; i++) {

        var hex = Number(str.charCodeAt(i)).toString(16)
        arr.push(hex)
    }
    return arr.join("")

}

console.log(ascii_hexa('12'))

//(28) Write a JavaScript function to convert Hexadecimal to ASCII format.

function hex_to_ascii(str1) {
    var hex = str1.toString();
    var str = '';
    for (var n = 0; n < hex.length; n += 2) {
        str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
    }
    return str;
}
console.log(hex_to_ascii('3132'));
console.log(hex_to_ascii('313030'));

//(29)  Write a JavaScript function to find a word within a string. 

function search_word(str, searchVal) {

    const arr = str.split(" ");
    let data = []

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === searchVal) {
            data.push(arr[i])
        }

    }

    return data
}
console.log(search_word('The quick brown fox', 'fox'));
console.log(search_word('aa, bb, cc, dd, aa', 'aa'));

//(30)  Write a JavaScript function that checks whether a string ends with a specified suffix.
//M-1

function string_endsWith(str, searchVale) {

    if (searchVale == null) {
        return false
    }

    const data = str.endsWith(searchVale)

    return data

}

console.log(string_endsWith('JS PHP PYTHON', 'PYTHON'));

//M-2
function string_suffix(str, suffix) {

    if ((str === null) || (str === '') || ((suffix === null) || (suffix === ''))) {
        return false
    } else {

        str = str.toString();
        suffix = suffix.toString();
    }
    return str.indexOf(suffix, str.length - suffix.length) != -1

}

console.log(string_suffix('JS PHP PYTHON', 'PYTHON'))

//(32)  Write a JavaScript function to remove  non-printable ASCII characters.

function remove_non_ascii(str) {

    if ((str === null) || (str === ''))
        return false;
    else
        str = str.toString();

    return str.replace(/[^\x20-\x7E]/g, '');
}

console.log(remove_non_ascii('äÄçÇéÉêPHP-MySQLöÖÐþúÚ'));

//(33)  Write a JavaScript function to remove non-word characters.

function remove_non_word(str) {
    if ((str === null) || (str === ''))
        return false;
    else
        str = str.toString();

    var PATTERN = /[^\x20\x2D0-9A-Z\x5Fa-z\xC0-\xD6\xD8-\xF6\xF8-\xFF]/g;

    return str.replace(PATTERN, '');
}
console.log(remove_non_word('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL'));

//(34)  Write a JavaScript function to convert a string to title case
//M-1

function sentenceCase(str) {

    const arr = str.split(" ");
    const data = []

    for (let i = 0; i < arr.length; i++) {

        data.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase())

    }

    return data.join(" ")
}

console.log(sentenceCase('PHP exercises. python exercises.'))  //"Php Exercises. Python Exercises."
//M-3
function sentenceCase(str) {

    const data = []

    if (str === null || str === '') {
        return false
    } else {
        const arr = str.split(" ");
        for (let i = 0; i < arr.length; i++) {
            data.push(arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase())
        }

    }

    return data.join(" ");

}
console.log(sentenceCase('PHP exercises. python exercises'))

//M-2

function sentenceCase(str) {
    if ((str === null) || (str === ''))
        return false;
    else
        str = str.toString();

    return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase(); });
}

console.log(sentenceCase('PHP exercises. python exercises.'));

//(35) Write a JavaScript function to remove HTML/XML tags from a string

function removeHtmlXml(str) {

    if (str === null || str === '') {
        return false
    } else {
        let text = str.toString()
        return text.replace(/<[^>]*>/g, '')
    }

}

console.log(removeHtmlXml('<p><strong><em>PHP Exercises</em></strong></p>'))

//(36)   Write a JavaScript function to create a zero-filled value with an op-tional +, - sign

function padding(str, pad) {

    const data = str.padStart(pad, 0)
    console.log(data)

}

padding('29', 4)

//(37) Write a JavaScript function to test case-insensitive (except special Unicode characters) string comparison.

function compare_string(str1, str2) {

    if ((str1 === null || str1 === '') || (str2 === null || str2 === '')) {
        return "string are not valid"
    } else {

        let text1 = str1.toUpperCase();
        let text2 = str2.toUpperCase()
        if (text1 === text2) {
            return true
        } else {
            return false
        }
    }
}
console.log(compare_string('ABCD', 'Abdc'))

//(38) Write a JavaScript function to create a case-insensitive search

function search_string_case_sensetive(str, search_text) {
    function case_insensitive_search(str, match_value) {

        let str1 = str.toLowerCase()
        let match_value1 = match_value.toLowerCase()

        if (str1.match(match_value1)) {
            return "Matched"
        } else {
            return "Not Matched"
        }

    }
    console.log(case_insensitive_search('JavaScript Exercises', 'exercises'));
    // "Matched"
    console.log(case_insensitive_search('JavaScript Exercises', 'Exercises'));
    // "Matched"
    console.log(case_insensitive_search('JavaScript Exercises', 'Exercisess'));
    // "Not Matched"

}

console.log(search_string_case_sensetive('JavaScript Exercises', 'exercises'))

//(39)  Write a JavaScript function to uncapitalize the first character of a string

function uncapitalize_the_first_character_string(str) {

    console.log(str.charAt(0).toLowerCase() + str.slice(1))

}

uncapitalize_the_first_character_string('Vikash javascript node')

//(40) Write a JavaScript function to uncapitalize the first letter of each word of a string.

function uncapitalize_first_each_word(str) {

    let data = []
    let arr = str.split(" ")
    for (let i = 0; i < arr.length; i++) {

        data.push(arr[i].charAt(0).toLowerCase() + arr[i].slice(1).toLowerCase())

    }
    return data.join(" ")

}

console.log(uncapitalize_first_each_word('Js String Exercises'))

//(41)  Write a JavaScript function to capitalize each word in the string.

//M-1

function capatilize_each_word(str) {

    return str.toUpperCase()

}
console.log(capatilize_each_word("I am javascript string"))

//M-2

function capitalizeWords(str) {
    return str.replace(/\w\S*/g, function (txt) { return txt.substr(0).toUpperCase(); });
}
console.log(capitalizeWords('js string exercises'));

//(42)  Write a JavaScript function to uncapitalize each word in the string.
//M-1
function uncapatilize_each_word(str) {

    return str.toLowerCase()

}

console.log(uncapatilize_each_word("JS STRING EXERCISES"))
//M-2

function unCapitalizeWords(str) {
    return str.replace(/\w\S*/g, function (txt) { return txt.substr(0).toLowerCase(); });
}
console.log(unCapitalizeWords('JS STRING EXERCISES'));

//(43)  Write a JavaScript function to test whether the character at the index provided is upper case

//M-1
function isUpperCaseAt(str, index) {

    const postion = str.charAt(index)

    const upper = 'ABCDEFGHIJKLMNOPQURSTUVWXYZ';

    if (upper.match(postion)) {
        return `${postion} is true`
    } else {
        return `${postion} is false`
    }

}

console.log(isUpperCaseAt('Js STRING EXERCISES', 0))

//M-2
function isUpperCaseAt(str, index) {
    return str.charAt(index).toUpperCase() === str.charAt(index);
}
console.log(isUpperCaseAt('Js STRING EXERCISES', 1));

//(44)  Write a JavaScript function to test whether the character at the given (character) index is lower case
//M-1
function isLowerCaseAt(str, index) {

    return str.charAt(index).toLowerCase() === str.charAt(index)

}
console.log(isLowerCaseAt('Js STRING EXERCISES', 1))

//M-2

function isLowerCaseAt(str, index) {

    var position = str.charAt(index)
    var lower = 'abcdefghijklmnopqurstuvwxyz'

    if (lower.match(position)) {
        return true
    } else {
        return false
    }

}

console.log(isLowerCaseAt('Js STRING EXERCISES', 1))

//(45)  Write a JavaScript function to get a humanized number with the correct suffix such as 1st, 2nd, 3rd or 4th.

function humanized_number(num) {

    if (num % 100 >= 11 && num % 100 <= 13)
        return num + "th"

    switch (num % 10) {
        case 1: return num + "st"
        case 2: return num + "nd"
        case 3: return num + "rd"
    }
    return num + "th"

}

console.log(humanized_number(1))

//(46)  Write a JavaScript function to test whether a string starts with a spec-ified string

function word_start_match_string(str, word) {

    return (str.indexOf(word) === 0)

}
console.log(word_start_match_string('js string exercises', 'string'))

//(47) Write a JavaScript function to test whether a string ends with a speci-fied string

function endsWith(input, string) {
    var index = input.length - string.length;
    return index >= 0 && input.indexOf(string, index) > -1;
}
console.log(endsWith('JS string exercises', 'exercises'));

//(49) Write a JavaScript function to get a guid (an acronym for 'Globally Unique Identifier'?) of the specified length, or 32 by default.
function guid(len) {
    var buf = [],
        chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstu-vwxyz0123456789',
        charlen = chars.length,
        length = len || 32;

    for (var i = 0; i < length; i++) {
        buf[i] = chars.charAt(Math.floor(Math.random() * charlen));
    }

    return buf.join('');
}

console.log(guid());
console.log(guid(15));

//(50) Write a JavaScript program to check if a given string contains alphanu-meric characters that are palindromes regardless of special characters and let-ter case

const test = (alpha_text) => {
    if (typeof alpha_text !== 'string') {
        return 'It must be string'
    }

    const new_text = alpha_text.replace(/[^a-z0-9]+/ig, '').toLowerCase()
    const mid_index = new_text.length >> 1

    for (let i = 0; i < mid_index; i++) {
        if (new_text.at(i) !== new_text.at(~i)) {
            return false
        }
    }

    return true
}
console.log(test('$22_|1372^2731|_22'))
console.log(test('12%^&2'))
console.log(test('234%$$%432'))
console.log(test(1234))
console.log(test('aba%$aba'))
console.log(test('Aba%$aba'))

//(53)  Write a JavaScript function to check a given string is in Flat case or not

const test1 = (text) => {
    if (typeof text !== 'string') {
        return 'It must be a string.'
    }
    const pattern = /^[a-z]*$/
    return pattern.test(text)
}
console.log(test1('j'))
console.log(test1('java exercises'))
console.log(test1('JavaScriptExercises'))
console.log(test1('javascriptexercises'))
console.log(test1(12356))

//(56)  Write a JavaScript function to check whether a string is in Pascal case or not
const test2 = (word) => {
    if (typeof word !== 'string') {
        return 'It must be a string.'
    }
    const pattern = /^[A-Z][A-Za-z]*$/
    return pattern.test(word)
}
console.log(test2("XmlStream"))
console.log(test2("IOStream"))
console.log(test2("IEnumerable"))
console.log(test2("javascript"))
console.log(test2(12356))

//(57) Write a JavaScript function that receives a string and determines whether or not it can be rearranged to become a palindrome.
const test3 = (word) => {
    if (word.length === 0) {
        return 'String should not be empty!'
    }
    if (typeof word !== 'string') {
        return 'It must be a string.'
    }
    const char_ctr = [...word].reduce((obj, el) => {
        obj[el] = obj[el] ? obj[el] + 1 : 1
        return obj
    }, {})
    return Object.values(char_ctr).filter(count => count % 2 !== 0).length <= 1
}
console.log(test3("maamd"))
console.log(test3("civic"))
console.log(test3("IO"))
console.log(test3(12321))

//(58)  Write a JavaScript program to find the most frequent character in a giv-en string.

var str = "iamvikashkumar"
var count = 0;
var mf = 1;
var item;
for (let i = 0; i < str.length; i++) {

    for (let j = i; j < str.length; j++) {

        if (str[i] === str[j])
            count++;

        if (mf < count) {
            mf = count
            item = str[i]
        }
    }
    count = 0

}

console.log(`${item} >> ${mf}`)

//(59) Write a JavaScript program to find the most frequent word in a given string.

var str = "viku viku viku sona sona sona sona sona"

const arr = str.split(" ")
var count = 0;
var mf = 1
var item;
for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {

        if (arr[i] == arr[j])
            count++;

        if (mf < count) {
            mf = count
            item = arr[i]

        }
    }
    count = 0

}
console.log(`${item} >> ${mf}`)

//(60) Write a JavaScript function to reverse words in a given string

function reverse_string(str) {

    var arr = str.split(" ")
    var reverse_word = "";
    for (var i = 0; i < arr.length; i++) {
        reverse_word += arr[i].split('').reverse().join('') + " "
    }
    return reverse_word

}
console.log(reverse_string("vikash tarun "))

//(64)   Write a JavaScript function that takes a positive integer and reverses the binary representation of that integer. Finally return the de

function integer_binary(n) {
    return parseInt(n.toString(2).split('').reverse().join(''), 2);
}
console.log(integer_binary(100));
console.log(integer_binary(1134));

////////////////////////////////////////////////////////////////////Geeks for Geek ////////////////////////////////////////////////////////////////////////////

// (1) How to convert a string into a integer without using parseInt() function in JavaScript ? 
//M-1
var str = "123456";
let integerVal = parseInt(str);
console.log(integerVal)

//M-2
function convertStoI() {
    let a = "100";
    let b = a * 1;
    console.log(typeof (b));
    let d = "3 11 43" * 1;
    console.log(typeof (d));
}
convertStoI();

//M-3

function convertStoI() {
    const a = "100";
    const b = Number(a);
    console.log(typeof (b));
    const d = "3 11 43" * 1;
    console.log(typeof (d));
}
convertStoI();

//(2)  How to generate all combinations of a string in JavaScript ?

//output -> Dog => Possible Combination [D], [Do], [Dog], [o], [og], [g]

function genCombination(str) {

    let data = []

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length + 1; j++) {
            data.push(str.slice(i, j))

        }
    }

    return data
}

console.log(genCombination("Dog"))

//(3) How to replace line breaks with br tag using JavaScript ?

let str = `Geeks for Geeks is 
a computer science portal 
where people study computer science`

//output -> "Geeks for Geeks is <br> a computer science portal <br> where people study computer science"

let data = str.split("\n").join("<br >")
console.log(data)

//(6) How to check whether a passed string is palindrome or not in JavaScript ?

function isPalindrom(str) {

    let length = str.length
    for (let i = 0; i < (str.length) / 2; i++) {

        if (str[i] !== str[length - 1 - i]) {
            return "string is not palindarom"
        }

    }

    return "string is  palindarom"

}

console.log(isPalindrom("vikakiv"))

//(7)  How to get the number of occurrences of each letter in specified string in JavaScript ?

function noOfOccurance (str) {
    const arr = str.split("");
    let obj = {}
    for(let i=0; i<arr.length; i++){
       if(!obj[arr[i]])
       obj[arr[i]] = 0
       obj[arr[i]] += 1
    }

 return obj
}
console.log(noOfOccurance("hello"));

//(8)  How to find the longest word within the string in JavaScript ?

function longestWord(str) {

    const arr = str.split(" ");
    let result = arr[0]
    
    
    for(let i=0; i<arr.length; i++) {
       
        if(result.length < arr[i].length){
         result =  arr[i]
        }
    }
    
    return result
    
    }
    
    console.log(longestWord("orange apple graps mangooo"))

    //(9)  How to find unique characters of a string in JavaScript ?
//M-1
function uniqueChar(str) {
    const arr = str.split("");
    let obj = {}
    
    for(let i=0; i<arr.length; i++) {
        if(obj[arr[i]])
        obj[arr[i]] =0
        obj[arr[i]] = arr[i]
    }
    
    let unique = Object.values(obj);
    return unique.join("")
    }
    
    console.log(uniqueChar("Geeksforgeeks")) //Geksforg
    
    //M-2
    let str = "Geeksforgeeks";
    let uniq = ""
    for(let i=0; i<str.length; i++) {
    
        if(uniq.includes(str[i]) ===  false){
            uniq += str[i]
        }
    }
    console.log(uniq)
    
    //M-3
    let string = "Geeksforgeeks";
    string = string.split("");
    string = new Set(string);
    console.log([...string].join(""))

    //(12)  How to check a given string is an anagram of another string in Ja-vaScript ?

function anagramString(a, b) {

    if(a.length !== b.length) {
      return false
    }

    var str1 = a.split("").sort().join("")
    var str2 = b.split("").sort().join("")
    
   const data = (str1 === str2)
   return data

}

console.log(anagramString("vikash", "hsakiv"))

//(12)  How to create half of the string in uppercase and the other half in low-ercase?

function halfUpperHalfLowerCase(string) {

    let str = string.length;
    let part1 = ""
    let part2 = ""
    
    for(let i=0; i<Math.ceil(str/2); i++ ) {
        part1 += string[i]

    }
   for(let i= Math.ceil(str/2); i<string.length; i++) {
     part2 += string[i]
   }

   let data = part1.toUpperCase() +  part2.toLocaleLowerCase();
   return data

}
console.log(halfUpperHalfLowerCase("vikashsingh"));

//(15)  How to get a number of vowels in a string in JavaScript?

function findVowelsNo(str) {

    let vowels = 'aeiouAEIOU';
    let count = 0

    for(let i=0; i<str.length; i++) {
        if(vowels.match(str[i])){
          count++
        }

    }

    return count
}

console.log(findVowelsNo("vikash"))

//(20)  How to get the longest string in an array using JavaScript ?
function findLongestString(arr){

    let result = arr[0]
  
    for(let i=0; i<arr.length; i++) {
     
      if(result.length < arr[i].length){
        result = arr[i]
  
      }
    }
  
    return result
  }
  console.log(findLongestString(["A_Copmuter_Science_Portal",  "GeeksforGeeks", "GFG",  "geeks" ]))

  //(21) How to remove all Non-ASCII characters from the string using JavaScript ?
function remove_non_ascii(str) {

    const arr = str.split("");
     const data = arr.filter((char)=>{
      return char.charCodeAt(0) <= 127
     });
  
     return data.join("")
  }
  console.log(remove_non_ascii("Hidd©©©en??Ascii ©©®®®Charac££ter"))

  
//(30) How to convert string to camel case in JavaScript ?

let str = 'Click the button to convert to camelCase'; 
//output -> clickTheButtonToConvertToCamelCase

function convertCamelCase(str) {

  const arr = str.split(" ")
  let data = []
  
  for(let i=0; i<arr.length; i++) {

   data.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1))
  }

  return data.join("")
}

console.log(convertCamelCase(str))

