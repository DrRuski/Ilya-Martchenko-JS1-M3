// Lesson Module 3


//Lesson Question 3.1 - 1

const menuIsOpen = false;

if (menuIsOpen){
    console.log("truthy");
} else {
    console.log("falsy");
}


// Lesson Question 3.1 - 2

// platforms=4
// genres=action
// publishers=354


// Lesson QUestion 3.1 - 3

const url = "https://noroff.herokuapp.com/v1/cat-facts/facts";

async function getCatFacts (){
    const response = await fetch(url);
    const results = await response.json();
    console.log(results.length);
}
getCatFacts();

