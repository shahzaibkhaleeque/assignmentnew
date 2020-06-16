//// ASSIGNEMNT 21-25
var first = prompt("enter your first name");
var last = prompt("enter your last name");

document.write(first, last, "welcome");

var first = prompt("enter your first name");
var last = prompt("enter your last name");

document.write(first, last, "welcome");


function string_check(str1) {
    if (str1 === null || str1 === undefined || str1.substring(0, 2) === 'Py') {
        return str1;
    }
    return "Py" + str1;
}

console.log(string_check("Python"));
console.log(string_check("thon"));

var side1 = 5;
var side2 = 6;
var side3 = 7;
var s = (side1 + side2 + side3) / 2;
var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
console.log(area);

function leapyear(year) {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapyear(2016));
console.log(leapyear(2000));
console.log(leapyear(1700));
console.log(leapyear(1800));
console.log(leapyear(100));


//// ASSIGNEMNT 26-30

// Get a random integer from 1 to 10 inclusive
const num = Math.ceil(Math.random() * 10);
console.log(num);
const gnum = prompt('Guess the number between 1 and 10 inclusive');
if (gnum == num)
    console.log('Matched');
else
    console.log('Not matched, the number was ' + gnum);


function multiplyBy() {
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() {
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 / num2;

}


function multiplyBy() {
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() {
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 / num2;
}

//// ASSIGNEMNT 31-34


var today = new Date();
var dd = today.getDate();

var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
if (dd < 10) {
    dd = '0' + dd;
}

if (mm < 10) {
    mm = '0' + mm;
}
today = mm + '-' + dd + '-' + yyyy;
console.log(today);
today = mm + '/' + dd + '/' + yyyy;
console.log(today);
today = dd + '-' + mm + '-' + yyyy;
console.log(today);
today = dd + '/' + mm + '/' + yyyy;
console.log(today);

var today = new Date();
var day = today.getDay();
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
console.log("Today is : " + daylist[day] + ".");
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand = (hour >= 12) ? " PM " : " AM ";
hour = (hour >= 12) ? hour - 12 : hour;
if (hour === 0 && prepand === ' PM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Noon';
    } else {
        hour = 12;
        prepand = ' PM';
    }
}
if (hour === 0 && prepand === ' AM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Midnight';
    } else {
        hour = 12;
        prepand = ' AM';
    }
}
console.log("Current Time : " + hour + prepand + " : " + minute + " : " + second);


//// ASSIGNEMNT 35-38


function reverse_a_number(n) {
    n = n + "";
    return n.split("").reverse().join("");
}
console.log(reverse_a_number(32243));



//Write a JavaScript function that generates all combinations of a string.
function substrings(str1) {
    var array1 = [];
    for (var x = 0, y = 1; x < str1.length; x++, y++) {
        array1[x] = str1.substring(x, y);
    }
    var combi = [];
    var temp = "";
    var slent = Math.pow(2, array1.length);

    for (var i = 0; i < slent; i++) {
        temp = "";
        for (var j = 0; j < array1.length; j++) {
            if ((i & Math.pow(2, j))) {
                temp += array1[j];
            }
        }
        if (temp !== "") {
            combi.push(temp);
        }
    }
    console.log(combi.join("\n"));
}

substrings("dog");


function uppercase(str) {
    var array1 = str.split(' ');
    var newarray1 = [];

    for (var x = 0; x < array1.length; x++) {
        newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
    }
    return newarray1.join(' ');
}
console.log(uppercase("the quick brown fox"));


function find_longest_word(str) {
    var array1 = str.match(/\w[a-z]{0,}/gi);
    var result = array1[0];

    for (var x = 1; x < array1.length; x++) {
        if (result.length < array1[x].length) {
            result = array1[x];
        }
    }
    return result;
}
console.log(find_longest_word('Web Development Tutorial'));


//////ends..