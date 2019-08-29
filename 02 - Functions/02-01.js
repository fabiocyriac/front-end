/*
Write a JavaScript function that reverse a number.
Example x = 32243;
Expected Output : 34223
*/
"use strict";
function reverseNumber(pickedNumber) {

    var newNumber = "";
    var readyNumber = pickedNumber;
    console.log(readyNumber.toString().split("").reverse().join(""));

    pickedNumber = pickedNumber.toString();
    console.log(pickedNumber)
    for(var i=0; i < pickedNumber.length; i++){
        newNumber = newNumber + pickedNumber.slice(pickedNumber.length-i-1, pickedNumber.length-i)
    }
   
    console.log(newNumber);

}

reverseNumber(32243);
