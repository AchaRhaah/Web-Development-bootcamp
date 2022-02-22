var bottlesOfBeer = 99;


while(bottlesOfBeer >= 1){
    if(bottlesOfBeer == 0){
        console.log("No more bottles of beer on the wall. Go to the store and buy more");
    }
    console.log(bottlesOfBeer+" bottles of beer on the wall " + bottlesOfBeer + " bottles of beer on the wall");
    bottlesOfBeer--;
    console.log("Take one down and pass it around, "+bottlesOfBeer+" bottles of beer on the wall.\n\n\n")
}