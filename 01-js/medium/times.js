/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    let timeBefore, timeAfter;
    let date = new Date;
    timeBefore = date.getTime();
    for (let index = 1; index < n; index++) {}
    timeAfter = date.getTime();
    return (timeBefore-timeAfter);
}
let m=20;
for (let index = 1; index < m; index++) {
    let n = Math.pow(10,index);
    console.log(`Time taken for 1-${n} is ${calculateTime(n)}`);
}
