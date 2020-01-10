const assert = require("assert");

// Feel free to look things up online!

// TODO - write a function which converts a multi-word string into an array of words
const tokenize = str => {
    return str.split(" ");
};

// TODO - write a function which reverses the string
const reverse = str => {
    let arr = str.split("")
    let revarr = arr.reverse()
    let newstr = revarr.join("")
    return newstr
};

// TODO - write a function which returns the inputted array without duplicate elements
const uniqueOnes = arr => {

    arr = arr.filter((item,index,ref) => ref.indexOf(item)==index)
    // let check = (arr) => arr.filter((v,i) => arr.indexOf(v) === i)
    // arr = check(arr);
    return arr;
};

// TODO - write a function which returns the factorial of a positive integer
const factorial = num => {
    // if (num <= 1){
    //     return 1;
    // }
    // else {
    //     return num * factorial(num-1);
    // }

    return num > 0 ? num * factorial(num-1) : 1;
};

// TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
// if the two arrays are of unequal length
// Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
const zip = (arr1, arr2) => {
    if (arr1.length != arr2.length) {
        return -1;
    }
    let arr = [];
    for ( let i = 0; i < arr1.length; i++) {
        let row = [];
        row.push(arr1[i]);
        row.push(arr2[i]);
        arr.push(row);
    }
    
    return arr;
};

// TODO - Write a function which does the opposite of `zip()`
const unzip = arr => {
    let arr1 = [];
    let arr2 = [];
    
    for( let i = 0; i < arr.length; i++) {
        arr1.push(arr[i][0]);
        arr2.push(arr[i][1]);
    }

    let newarr = [arr1, arr2];
    return newarr;


};

// TODO - write a function which shifts a string `num` characters to the right
// Example = shiftThree("Hello") === "lloHe"
const shiftRight = (str, num) => {
    // num = num % str.length;
    let str0 = str.substring(str.length - num, str.length);
    let str1 = str.substring(0,str.length - num);
    let newstr = str0.concat(str1);
    return newstr;
};

// TODO - write a function which returns the current date in the following format:
// "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
const announceDate = () => {
    let date = new Date();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    // let time1 = ['', 'one', 'two', 'three', 'four',
    // 'five', 'six', 'seven', 'eight', 'nine',
    // 'ten', 'eleven', 'twelve','thirteen', 'fourteen',
    // 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];  
    // let time2 = ['','','twenty', 'thirty', 'forty',
    //     'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    //   ];
    let ampm = ["in the morning", "in the night"];
    let am = 0;
    let hours = date.getUTCHours();
    if (hours > 11) {
        am = 1;
        
        if (hours > 12) {
            hours -= 12;
        }
    }

    // let minute_tens = parseInt(date.getMinutes / 10);
    // let minute_ones = date.getMinutes % 10;
    // let time = "";
    // if (minute_tens <2)   {
    //     time = time1[date.getMinutes]
    // }
    // else {
    //     let str1 = time2[minute_tens];
    //     let str2 = time1[minute_ones];
    //     // time = str1.concat("-",str2);
    // }
    let month = months[date.getMonth()];
    let str = `Today's date is ${month} ${date.getDate()}th, ${date.getFullYear()}. It is ${date.getHours()}:${date.getMinutes()} ${ampm[am]}.`
    return str;
};

// Write tests here:
assert(1 < 2);
assert(1 + 2 === 3);
assert([2, 3][0] === 2);

console.log(tokenize("dog"));
console.log(uniqueOnes([2,3,4,3]));
console.log(factorial(7));
console.log(zip([1, 2, 3], [5, 3, 1]));
console.log(unzip([[1, 5], [2, 3], [3, 1]]));
console.log(shiftRight("Hello", 3));
console.log(announceDate());