var guessList = ["Trephina", "Acha", "Ngoh", "bethel", "Favor", "Perry"];
// to get the number of elements in an array
console.log(guessList.lenght);
// to get a particular element
console.log(guessList[3]); //get element  at position 3
// to check if a particular element is in the array
// returns true if it is there and false if it is not there
guessList.includes("bethel");


// Exercise
var guessName = prompt("enter a name:");
guessList.includes(name);
if (guessList.includes(name)){
    console.log('Welcome')
}
else{
    console.log("not on the guess list");
}