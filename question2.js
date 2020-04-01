/* Question 2: Write a javascript function that takes an array of numbers and a target number. 
The function should find two different numbers in the array that, when added together,
 give the target number. For example: answer([1,2,3], 4)should return [1,3] */

findSum = (array, target) => {
    for (let num1 of array) {
        for (let num2 of array) {
            if (num1 + num2 === target && num1 !== num2) {
                return [num1, num2];
            }
        }
    };
    return "No matches were found";
};

answer = findSum;