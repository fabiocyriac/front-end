/*
Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
*/
"use strict";
        function checkNumber(number) {
            for (var i = 2; i < number; i++) {
                if (number % i === 0) {
                    return "Not a Prime Number";
                }
            }
            return "Prime Number";

        }
        
    

        console.log(checkNumber(12));