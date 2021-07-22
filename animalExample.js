let animals = ["Wombat", "Lion", "Jaguar", "Dragon", "Anteater", "Capybara"];
// // Combine all strings with comma and space
// function combineStr(animalArr){
//     let animalsStr = "";
//     for(let i=0; i<animalArr.length;i++){
//         animalsStr += animalArr[i];
//         if(i !== animalArr.length-1){
//             animalsStr += ", ";
//         }
//     }
//     return animalsStr;
// }
// console.log(combineStr(animals));

// // Is an certain animal in the array?
// function isAnimalInArr(animalArr, animalToFind){
//     let hasFoundAnimal = false;
//     for(let i=0;i<animalArr.length;i++){
//         let animalInArr = animalArr[i];
//         if(animalInArr === animalToFind){
//             hasFoundAnimal = true;
//         }
//     }
//     return hasFoundAnimal;
// }
// console.log(isAnimalInArr(animals, "Cat"));


const animalsObjArr = [
    { name: "Wombat", age: 1, species: "Vombatus ursinus"},
    { name: "Lion", age: 8, species: "Panthera leo"},
    { name: "Jaguar", age: 6, species: "Panthera onca"},
    { name: "Dragon", age: 100, species: "Hungarian horntail"},
    { name: "Anteater", age: 1, species: "Tridactyla"},
    { name: "Capybara", age: 3, species: "Hydrochoerinae"},
];

// Combine all names of anmials into a string with comma and space between

// Is a certain animal in the array?
    // Return true/false
    // Return the animal

// Filter array by number of letters in animal name

// Filter animals older than given age

// Find the average age of the animals

// Find oldest animal
    // Return the age
    // Return the animal

// Find youngest animal
    // Return the age
    // Return the animal