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

// function greet(name = "John") {
//     return `Hello ${name}!`;  
// }

// const greetFunction = greet();

// console.log(greetFunction);




// Lesson Question 3.2 - 2

// const messageContainer = document.querySelector(".container");

// const message = dynamicMessage("messageClass", "Error Occured");




// Lesson Question 3.2 - 3

// const url = "https://noroff.herokuapp.com/v1/cat-facts/facts";

// async function getFact() {

//     try {
//     const response = await fetch(url);
//     const results = await response.json();
//     console.log(results);
//     }

//     catch(error){
//     messageContainer.innerHTML = message;
//     console.log("Error");
//     }
//     finally  {
//         console.log("I did it");
//     }
// }
// getFact();





// Lesson Question 3.3 - 1

// const greet = (name) => console.log(`Hello ${name}!`);
  
// const add = (a, b) => console.log(a + b);

// greet("John");
// add(4,5);



// Lesson Question 3.3 - 2

// async function getCatFacts() {
//     try {
//       const response = await fetch("https://noroff.herokuapp.com/v1/cat-facts/facts");
//       const results = await response.json();
//       console.log(results.length);
//     } catch (error) {
//       console.log(error);
//     }
//   }


// fetch(url)
//   .then(function(response){
//     console.log(response);
//     return response.json();
//   })
//   .then(function(data){
//     createHTML(data);
//   })
//   .catch(function(error){
//     console.log(error);
//   })
 



// Lesson Question 3.4 - 1

