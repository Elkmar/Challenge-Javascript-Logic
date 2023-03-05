/* Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3] */

//array is the array we're loonking into, targetNumber the sum of the two numbers we are looking for 
const findSumEqualToTargetNumber = (array, targetNumber) => {
    //double loop to iterate over our array since we need two values 
    for (let index1 = 0; index1 < array.length; index1++) {
        for (let index2 = 0; index2 < array.length; index2++) {
            //we check if we're not double checking the same number by being sure it's not at the same index 
            if (index1 !== index2 && array[index1] + array[index2] === targetNumber) {
                return [array[index1], array[index2]];
            }
        }
    }
}

const answer = findSumEqualToTargetNumber;