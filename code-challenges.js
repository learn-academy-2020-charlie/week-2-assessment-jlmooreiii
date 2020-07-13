// ASSESSMENT 2: Coding Practical Questions

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// Use the test variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisble by three"

// Declare the function that will take any number as an argument
const isDivisibleBy3 = (num) => {
    // Make sure the argument is a number before proceeding
    if (typeof num == "number") {
        // Logic to see if the number passed as an arg is divisible by 3
        if (num % 3 == 0) {
            return `${num} is divisible by 3`;
        } else {
            return `${num} is not divisible by 3`;
          }
    // If the arg is not a muber, instruct user to input a number as the arg    
    } else {
        return "Please use a number as an argument.";
    }   
} // Closes isDivisibleBy3()

// Test isDivisibleBy3() to makre sure that it works
console.log("-----CHALLENGE 1-----");
console.log("The result of isDivisibleBy3(num1) is: " + isDivisibleBy3(num1));
console.log("The result of isDivisibleBy3(num2) is: " + isDivisibleBy3(num2));
console.log("The result of isDivisibleBy3(num3) is: " + isDivisibleBy3(num3));
console.log("\n");



// --------------------2) Create a function that takes in the randomNouns variable and returns an array with all the words capitalized.

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

// Declare a function that can take in any array of words
const capitalizeWords = (array) => {
    // Use .map to iterate through the array given. Assign the array .map makes to a new variable
    let newArray = array.map(currentWord => {
        // Split the currentWord into an array of chars. Store array in a new variable
        let charArray = currentWord.split("");
        // Isolate first char of the charArray and replce it with its capital form
        charArray[0] = charArray[0].toUpperCase();
        // Join the charArray to make the word again and store in a new variable
        let newWord = charArray.join("");
        // Return the newWord
        return newWord;
    })
    // Return the final array to function I create
    return newArray
}

// Test to make sure capitalizeWords() works
console.log("-----CHALLENGE 2-----");
console.log("The result of capitalizeWords(randomNouns) is: ");              console.log(capitalizeWords(randomNouns));
console.log("This is the original array: ");
console.log(randomNouns);
console.log("\n");


// --------------------3) Create a function that takes in the mixedDataArray array and returns an array with ONLY NUMBERS sorted from least to greatest.

var mixedDataArray = [true, 8, "hello", 90, -8, null, 0, 46, 59, 107, "hey!"]
// Expected output: [-8, 0, 8, 46, 59, 90, 107]

// Declare a function that can take any array of data
const sortedNumsOnly = (array) => {
    //Part 1 of Function: Isolate the numbers
    // Use .filter to parse through the array, looking for a specific case. Be sure to store the new array that .filter spits out to a new variable
    numsOnlyArray = array.filter(value => {
        // The return condition for .filter is if the data type is "number"
        return (typeof value == "number");
    }) // Close the filter

    // Part 2 of Function: Sort the numbers
    // Use higher order function .sort((a,b) => a-b) to sort from least to greatest
    numsOnlyArray.sort((a,b) => a-b)
    // Return the now sorted array. .sort doesnt not create a new function
    return numsOnlyArray // Which is now sorted
}

// Test to make sure sortedNumsOnly() works
console.log("-----CHALLENGE 3-----");
console.log("The result of sortedNumsOnly(mixedDataArray) is: ");       
console.log(sortedNumsOnly(mixedDataArray));
console.log("This is the original array: ");
console.log(mixedDataArray);
console.log("\n");



// --------------------4) Create a function that takes in a string and logs the index of the first vowel.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "throw"
// Expected output: 3

// Declare a function that can take any string
const wheresFirstVowel = (string) => {
    // Split the string into an array of chars. Be sure to assign the new array to a new variable
    let charArray = string.split("");
    console.log(charArray);
    // Create an array of all the possible vowels (no "y")
    let vowelArray = [ "A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];
    //Create an array that will hold the indexes of the vowels
    let arrayOfVowelIndexes = [];
    //See if charArray contains a vowel using .filter on the array of characters. 
    let doesNotHaveVowel = false;
    if (doesNotHaveVowel == charArray.filter(value => vowelArray.includes   (value))) {
        //If the array does not have a vowel, then use .includes to see if the char array contains a "y". 
        if (charArray.includes("y", "Y")) {
            //If the array does contain a "y", we assume that "y" to be a vowel and we need to return the index of all the "y"s to the new array. Because .map is required to return a value at every index, I will get undefined for each consonant. Therefore, I need to use a for loop.
            //For loop will iterate through the charArray until it hits the first "y" or "Y". At the first "y" or "Y" it hits, it will push the index to the array to hold the indexes of the vowels.
            for (let i = 0; arrayOfVowelIndexes < 1; i++) {
                if (charArray[i] == "y" || charArray[i] == "Y") {
                    arrayOfVowelIndexes.push(i);
                }
            }
        //End of the only "y"s logic    
        } else {
            return "There are no vowels in the string."
          } //End of the no vowels at all logic
        
    // Else if the array does contain a vowel, use a for loop on the char array to iterate through the array until it hits the first vowel. At the first vowel, arrayOfVowelIndexes will have the index of the vowel from charArray added.
    } else {
        for (let i = 0; arrayOfVowelIndexes < 1; i++) {
            if (vowelArray.includes(charArray[i])) {
                arrayOfVowelIndexes.push(i);
            }
        }

      }
        
    // For final return, return the first value of the new array.
    return arrayOfVowelIndexes[0];

}

// Check to make sure that wheresFirstVowel() works
console.log("-----CHALLENGE 4-----");
console.log("The result of wheresFirstVowel(vowelTester1) is: ");       
console.log(wheresFirstVowel(vowelTester1));
console.log("This is the original vowelTester1 string: ");
console.log(vowelTester1);
console.log("\n");
console.log("The result of wheresFirstVowel(vowelTester2) is: ");       
console.log(wheresFirstVowel(vowelTester2));
console.log("This is the original vowelTester2 string: ");
console.log(vowelTester2);
console.log("\n");
console.log("The result of wheresFirstVowel(\"rhythm\") is: ");       
console.log(wheresFirstVowel("rhythm"));
console.log("\n");
console.log("The result of wheresFirstVowel(\"nvwl\") is: ");       
console.log(wheresFirstVowel("nvwl"));
console.log("\n");



// --------------------5) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]

var toonimals = [ 
    {name: "Itchy", animal: "mouse"}, 
    {name: "Stimpy", animal: "cat"}, 
    {name: "Daffy", animal: "duck"}, 
    {name: "Scratchy", animal: "cat"},
    {name: "Ren", animal: "dog"}, 
    {name: "Felix", animal: "cat"}
]

//Declare a function that can take any array of objects
const onlyCats = (arrayOfObjects) => {
    // Use a .filter to interate through the array. be sure to assign a variable to the array that .filter spits out
    // If the element in the array has a key value of "cat", then push the whole object to the new array created by the filter method.
    let onlyCatsArray = arrayOfObjects.filter(value => value.animal == "cat")
    // Return the new array created by the .filter
    return onlyCatsArray;
} 

// Test to make sure that onlyCats() works
console.log("-----CHALLENGE 5-----");
console.log("The result of onlyCats(toonimals) is: ");       
console.log(onlyCats(toonimals));
console.log("This is the original toonimals string: ");
console.log(toonimals);
console.log("\n");

// --------------------6) Using the toonimals variable, create a function that returns only the names of the non-cats.
// Expected output: "Itchy" "Daffy" "Ren"

// Declare a function that can take any array of objects
const onlyNonCatNames = (arrayOfObjects) => {
    // Use a .filter to interate through the array. be sure to assign a variable to the array that .filter spits out
    // If the element in the array has a key value that does not equal "cat", then push the object to the new array created by the filter method.
    let onlyNonCatsArray = arrayOfObjects.filter(value => value.animal !== "cat");
    // Now tha twe have an array of only non-cat object, we are going to iterate through this onlyNonCatsArray using .map, but only return the names to a new array
    let onlyNonCatNamesArray = onlyNonCatsArray.map(value => value.name);
    // Return the new array created by the .filter
    return onlyNonCatNamesArray;
}
// Test to make sure that onlyCats() works
console.log("-----CHALLENGE 6-----");
console.log("The result of onlyNonCatNames(toonimals) is: ");       
console.log(onlyNonCatNames(toonimals));
console.log("This is the original toonimals string: ");
console.log(toonimals);
console.log("\n"); 
