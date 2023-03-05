/* Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]] */

let exempleArray = [1,2,4,591,, "1", "2", "2",392,391,2,5,10,2,1,1,1,20,20, "37", 19938, "324", [32, 44], undefined, NaN];

//Order an array in ascending order, the variable is refreshed
const orderInAscendingOrderArray = array => {
    array.sort((a, b) => a-b);
};

//This function takes an array and returns is with the values repeated grouped in sub-arrays
const groupSameValuesInSubArrays = (array) => {
    //an empty array that will contain the final result
    let result = [];
    //an empty array that will stock the values already treated in order to not treat them multiple times
    let valueTreated = [];

    const createSubArrayAndPush = (valueToCheck, index) => {
        //we check if the value has not been treated and if the array includes a value multiple times not counting itself, if it's not, just push it in the result array
        if (!valueTreated.includes(valueToCheck)) {
            if (array.includes(valueToCheck, index +1)) {
                //create un array that contains the same values, add it to the result and add the value to the treated values
                let sameValuesGrouped = array.filter( value => {
                    return (value === valueToCheck);
                })
                result.push(sameValuesGrouped);
                valueTreated.push(valueToCheck);
    
            } else {
                result.push(valueToCheck);
            }
        }
    }
    array.forEach(createSubArrayAndPush);
    return result;
};

//This function separates strings from numbers 
const separateDataTypes = (array) => {
    //we create an empty array for each data types we want, and one for the result 
    let arrayStrings = [];
    let arrayNumbers = [];
    let arrayOthers = [];
    let separatedArray = [];

    //depending on the data type, each element is sent to the corresponding array 
    array.forEach(element => {
        if (typeof element === "number") {
            arrayNumbers.push(element);
        } else if (typeof element === "string") {
            arrayStrings.push(element);
        } else {
            arrayOthers.push(element);
        }
    });

    //We check if the array is not empyt, if it isn't, we push it in the result array 
    [arrayNumbers, arrayStrings, arrayOthers].forEach(array2 => {
        if (array2.length > 0) {
            separatedArray.push(array2);
        } 
    });
    return separatedArray;
};

const answer = (array) => {
    orderInAscendingOrderArray(array);
    let separatedArray = separateDataTypes(array);
    let separatedAndGroupedArray = groupSameValuesInSubArrays(separatedArray);
    return separatedAndGroupedArray;
}

const test