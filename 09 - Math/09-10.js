/*  Write a JavaScript function to get the least common multiple (LCM) of two numbers. 
Note :
According to Wikipedia - A common multiple is a number that is a multiple of two or more integers. The common multiples of 3 and 4 are 0, 12, 24, .... The least common multiple (LCM) of two numbers is the smallest number (not zero) that is a multiple of both.
Test Data :
console.log(lcm_two_numbers(3,15));
console.log(lcm_two_numbers(10,15));
Output :
15 
30 */
"use strict";
(function () {
    function lcmTwoNumbers(first, second) {
        var lowest = Math.min(first, second);
        var highest = Math.max(first, second);
        for (var x = 1; x <= highest; x++) {
            if (x * lowest % highest === 0) {
                return x * lowest;
            }
        }
    }
    console.log(lcmTwoNumbers(3, 15));
    console.log(lcmTwoNumbers(10, 15));
})();