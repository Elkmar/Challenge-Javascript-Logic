/* Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3] */

const answer = (array, targetNumber) => {
    for (let index1 = 0; index1 < array.length; index1++) {
        for (let index2 = 0; index2 < array.length; index2++) {
            if (index1 !== index2 && array[index1] + array[index2] === targetNumber) {
                return [array[index1], array[index2]];
            }
        }
    }
}