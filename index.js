

// How to represent Arrays

let user = new Array(); //using the class key word

let toDo = [
    "kemi",
    "oyindamola",
     "seye", 
    {user:"kemsol", email:"kemsol@gmail.com"},
    90,
    678.3
    ];

// to check the length of character in an array

console.log(toDo);

let details = (toDo.length);

console.log(toDo[4]);

//to update or change a value in a specific position

toDo[3] = "beautiful"


//Mehtods of an Arrays
// how to add to the end of an array 

toDo.push("plait hair", "make sushi", "complete the arrays methods", "Go for swim");
console.log(toDo);

//to remove from the end of an array

toDo.pop();
console.log(toDo);

// removing an array from the begininng

toDo.shift();
console.log(toDo);

// to add to the begininig of an array

toDo.unshift("Build app to perfection");
console.log(toDo);

// to get the index of an array in a large numbers of element

console.log(toDo.indexOf("make sushi"));

// to get a portion from a whole array

//console.log(toDo.slice(0, 4));

//to get a copy of an array

let toDoCopy = toDo.slice();

console.log(toDoCopy);

// reserve an array

toDo.reverse();
console.log(toDo);

//arranging in alphabetical other

toDo.sort();
console.log(toDo);

//how to access arrays using loops
//it iterates over all the list

for(let toDos of toDo){
    console.log(`My todos for today ${toDo}`);
}

//using a for... in loops to iterate an array, you get the index of the array.

for(let index in toDo){
    console.log(`The index is ${index} and the value is ${toDo[index]}`);
}

//using a map to interate an array

let usernames = ["titilayo", "setemi", "pelumi", "emaeka", "felix"]

let usernameInUpperCase = usernames.map((username) =>{
 // transformation goes in here
   transformToUpperCase = username.toUpperCase()
   return transformToUpperCase

})
console.log(usernameInUpperCase)

let usernameInItalics = usernames.map((username) =>{
    // transformation goes in here
    transformToUnderline = username.italics()
      return transformToUnderline
   
   })
   console.log(usernameInItalics)

// Filter is used to get a particular

let theAphabethWithGrreaterThan6 = usernames.filter((usernames) =>{
    if (usernames.length > 6){
        return usernames
    }
})
console.log(theAphabethWithGrreaterThan6)

let populations = [30, 50, 100, 5, 89, 2000, 40]

let populationLessThan40 = populations.filter((populations) =>{
    if(populations < 40 && populations == 89){
        return populations
    }
})

// Sets in javascript
// Set is a type of collecions that stores unique values
// represented by

let setUserId = new Set()

// Examples

let mary = {name : "mary", age: 20}
let john = {name : "john", age: 20}

setUserId.add(mary)
// numbers can be stored.

setUserId.add(100)

// arrays can be stored

setUserId.add([23, "fantasy", "franchise"])

// whenever an object or value is entered twice in a set,it get ignored by the compiler
// it does not accept duplicate value
 setUserId.add(john)

 // to check the size of a set
 console.log(setUserId.size)

 // to check if a valus is in the set
 console.log(setUserId.has(100))

 // to delete
 console.log(setUserId.has(mary))

 // it is iterable

 for (let user of setUserId){
    console.log(user)
 }

 // Add
 setUserId.add("Darl")

 // to convert to an array
 let userArry = Array.from(setUserId)

console.log(setUserId)

console.log(userArry)

//Destructuring Assignment
// it is a special syntax that allows to "unpack" arrays or objects into a bunch of variable conviently

let names = ["Temison", "Gideon", "Gedoni", "temiloluwa", "shanty", "christabel"]

//it gets the varible on the first
let [firstname] = names

console.log(firstname);

// to get any value in the arrays

let [, , , name4] = names
console.log(name4)

// the use of rest get the remains of the values
// after a variable has been unpack, the remaining is pack into variables
 
let [, name2, ...restOfNames] = names
console.log(name2);
console.log(restOfNames);

// destructuring objects
//
let settings = {theme : "Dark mode", FontSize : "20px", fontFamily: "courier"} 

let {theme, fontSize, fontFamily} = settings

console.log(settings);// get only one factor in the object.

console.log(fontFamily);

//to get values multiple times

let { theme: mytheme} = settings
let {theme: themeness} = settings

console.log(mytheme);
console.log(themeness);

//Destructuing in functions
function getUserInfo({name, height}){
    console.log(name);
    console.log(height);
}

const userProperty = {
    name: "franklin",
    height: 6.9
}

getUserInfo(userProperty);

//DOM
// Document Object Model, or DOM for short, represents all web page content as objects that can be modified.
// The document object is the main “entry point” to the page. We can change or create anything on the page using it.
// Properties and methods are described in the specification: DOM Living Standard.
// An HTML/XML document is represented inside the browser as the DOM tree.
// DOM is used to interact with the HTML
// the page in which the HTML is being displayed is called the window

//BOM
//Browser Object Model
//they are feactures provided by those i=that made the browsers

//Display the title
alert(document.title);

// innnerHTML is also known as getting the body
console.log(document.body);

//childnodes returns all the child node you have in the body
console.log(document.body.childNodes);

// list all the children in the body
console.log(document.body.children);

// gets the firstchild in the element
console.log(document.body.firstChild);

//loop through each tag of the nodes
for(let i = 0; i < document.body.childNodes.length; i++ ){
    console.log(document.body.childNodes[i]);
}

//DOM NAVIGATION AND SEARCHING
//to get previous siblings of the body tag
console.log("Next siblings: ", document.head.nextElementSibling);

//same goes with prevoius siblings

//DOM searching Method
//getElementByid
//querySelector {using css properties to select}
//querySelectorAll {returns the kind of selector you specify}

let design = document.getElementById("wordes").style.color ="magenta";
let designFont = document.getElementById("wordes").style.fontFamily ="courier";
let designSize = document.getElementById("wordes").style.fontSize ="50px";
let designMarginTop =document.getElementById("wordes").style.marginTop = "50px"

let iners = document.getElementById("inner").style.color ="purple";

iners.innerText += document.getElementById("inner").innerHTML = "Contemporary Quest"

//DOM modification
//You can create element like the way it is inside HTML cn also be done in JavaScript

const createNew = document.createElement("div")
createNew.innerText = "This is javaScript created element"
createNew.style.color="brown"

//the element wouldnt show because it has not been append to the body
//this add the element to the end of the body
document.body.append(createNew)

//Removing an element
// const rmoveElment = document.querySelector("h1");
// rmoveElment.remove()

//BOM
//represent additional properties or feaures provided by the browser
//EXAMPLES: (1) navigator (2) location object
alert(location.href)

//to change the location of the page
if(confirm("Open Google ?")){
    location.href= "https://google.com"; //redirect to google page
}

//navigator can tell you details about your browser
//get browser name
alert("you are using " + navigator.userAgent);

//get creator of browser
alert("You are using an engine created by" + navigator.vendor);

//get language
alert("You are using " + navigator.language);

//get user location
navigator.geolocation.getCurrentPosition((position) =>{
    alert("You are at: " +position.coords.latitude + ", " + position.coords.longitude);
});

//More on Mozilla.com

// An event is a signal that something has happened. All DOM nodes generate such signals (but events are not limited to DOM).
// The following events can be tracked in the DOM:
// Mouse events: E.g click, mouseover, mouseup
// Keyboard events: E.g keydown, keyup
// Form element events: E.g submit, focus
// Document events: E.g DOMContentLoaded
// CSS events: E.g transitions
// Almost all the time, the second syntax is used. We can supply initial elements in the brackets:
// Array elements are numbered, starting with zero. We can get an element by its number in square brackets:
// An array can store elements of any type. Objects, functions, etc
// To react on events we can assign a handler – a function that runs in case of an event.
// We can set event handlers using:
// HTML Attributes: A handler can be set in HTML with an attribute named on<event>.
// DOM property: We can assign a handler using a DOM property on<event>.
// Methods event listeners. Explained in next slide
// Handlers are a way to run JavaScript code in case of user actions. There are several ways to assign a handler. Let’s see them, starting from the simplest one.
// For instance, to assign a click handler for an input, we can use onclick, like here: On mouse click, the code inside onclick runs.
// Please note that inside onclick we use single quotes, because the attribute itself is in double quotes. If we forget that the code is inside the attribute and use double quotes inside, like this: onclick=”alert(“Click!”)”, then it won’t work right.
// An HTML-attribute is not a convenient place to write a lot of code, so we’d better create a JavaScript function and call it there.
// As we know, HTML attribute names are not case-sensitive, so ONCLICK works as well as onClick and onCLICK… But usually attributes are lowercased: onclick.
// If the handler is assigned using an HTML-attribute then the browser reads it, creates a new function from the attribute content and writes it to the DOM property.

const someActions = document.getElementById("clicks")
someActions.addEventListener("click", (e)=>{
    console.log(e.target.id);
    console.log("coordinates: " + e.clientX + ":" + e.clientY)
})

someActions.addEventListener("mouseenter", () =>{
    alert("You've entered the button")
});


//WEEK 3
//CALL BACKS
//A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
// This execution may be immediate as in a synchronous callback, or it might happen at a later point in time as in an asynchronous callback.
// What if the script loading fails? Our callback should be able to react on that.
// Multiple asynchronous call back can result in the callback hell. 

// Callbacks
// Many functions are provided by JavaScript host environments that allow you to schedule asynchronous actions. In other words, actions that we initiate now, but they finish later. For instance, one such function is the setTimeout function.
// Luckily, there are other ways to avoid such pyramids. One of the best ways is to use “promises”, described in the next slide.

//Multiple callbacks can result in call back hell

//PROMISES

// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// A Promise object returns a promise to supply the resulting value at some point in the future. So we can wait for it to keep the promise
// A promise can be in any of these state: 
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

// A promise call cleanly handle multiple asynchronous operations.

// A promise is a cleaner way to handle asynchronous operations.

function getData(url) {
    return new Promise((resolve, reject) => {
        if (!url) {
            reject("No URL provided");
        }

        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.send();
        xhr.onload = function () {
            if (xhr.status === 200) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.status);
            }            

        };
    });
}

const url = prompt("Enter a URL");

getData(url)
//.then (as soon as it is successful run every code inside the then handler)
    .then((result) => {
        console.log("Success!"); // Runs on success
        console.log(result);
    }).catch(status => {
        console.log(`An error with status code ${status} occurred: `); // Runs on error
    });

 // async/await are special syntax to work with promises in a more comfortable fashion.
// The word “async” before a function means one simple thing: a function always returns a promise. Other values are wrapped in a resolved promise automatically.
// The keyword await makes JavaScript wait until that promise settles and returns its result.

// await only works inside an async function. If we try to use await in a non-async function, there would be a syntax error:
// Show example of converting the chapter Promises chaining and rewrite it using async/await:
// If a promise resolves normally, then await promise returns the result. But in the case of a rejection, it throws the error, just as if there were a throw statement at that line. So handle errors with try..catch
// When we use async/await, we rarely need .then, because await handles the waiting for us. And we can use a regular try..catch instead of .catch. That’s usually (but not always) more convenient.
// But at the top level of the code, when we’re outside any async function, we’re syntactically unable to use await, so it’s a normal practice to add .then/catch to handle the final result or falling-through error, like in the line (*) of the example above.

