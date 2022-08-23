// Lesson Module 3


//Lesson Question 3.1 - 1

// const menuIsOpen = false;

// if (menuIsOpen){
//     console.log("truthy");
// } else {
//     console.log("falsy");
// }


// Lesson Question 3.1 - 2

// platforms=4
// genres=action
// publishers=354


// Lesson Question 3.1 - 3

// const url = "https://noroff.herokuapp.com/v1/cat-facts/facts";

// async function getCatFacts (){
//     const response = await fetch(url);
//     const results = await response.json();
//     console.log(results.length);
// }
// getCatFacts();








// Lesson Question 3.2 - 1

// https://noroff.herokuapp.com/v1/cat-facts/facts

function greet(name = "John") {
    return `Hello ${name}!`;  
}



const greetFunction = greet();

console.log(greetFunction);





// Lesson Question 3.2 - 2


const messageContainer = document.querySelector(".container");

const message = dynamicMessage("messageClass", "Welcome");

messageContainer.innerHTML = message;



