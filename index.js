

     let design = document.getElementById("wordes").style.color ="magenta"
    let designFont = document.getElementById("wordes").style.fontFamily ="courier"
    let designSize = document.getElementById("wordes").style.fontSize ="50px"
  

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