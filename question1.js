/* Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20],
make a function that organizes these into individual array that is ordered. 
For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]] */

let exercice = [1,2,"3",4,591,392,"3",391,"1","343",2,5,10,2,1,1,1,20,20];

//order an array in Ascending order
let orderArray = array => array.sort((a, b) => {return a-b});

//returns an array with only the strings from an array
let onlyString = array => array.filter(elem => typeof elem === "string");

//returns an array with only the numbers from an array
let onlyNum = array => array.filter(elem => typeof elem === "number");

//returns an array with identical values grouped in arrays
let groupArray = array => {
    //initialize precedentNum to use it in order to avoid creating the same arrays multiples times
    let precedentNum = undefined;
    //initialize the final array that will be returned 
    let groupedArray = [];
 
    array.forEach((num, index) => {
        let arrayedValues = array.filter((num) => {return num === array[index]});
        let lengthArrayedValues = arrayedValues.length;

        //check if the value has not already been treated and if there is more than one element in order to avoid pushing arrays with single values
        if (num !== precedentNum && lengthArrayedValues > 1 ) {
            groupedArray.push(arrayedValues);
        }
        //if we have a single element, we directly push it without converting it to an array
        else if (num !== precedentNum && lengthArrayedValues === 1) {
            groupedArray.push(num)
        }
        precedentNum = array[index];
    });
    return groupedArray;
}

//order an array in Ascending order then clean it by grouping similar values while separating the numbers from the strings
let cleanOrderArray = array => {

    let onlyNumArray = onlyNum(array);
    
    let onlyStringArray = onlyString(array);

    let orderedNumArray = orderArray(onlyNumArray);

    let orderedStringArray = orderArray(onlyStringArray);

    let groupedOrderedNumArray = groupArray(orderedNumArray);

    let groupedOrderedStringArray = groupArray(orderedStringArray);

    let cleanedOrderedArray = [];

    cleanedOrderedArray.push(groupedOrderedNumArray);

    cleanedOrderedArray.push(groupedOrderedStringArray);

    return cleanedOrderedArray;
    
}

answer = cleanOrderArray;
