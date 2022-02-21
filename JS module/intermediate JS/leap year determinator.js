function isLeap(year){
    if(year % 4 == 0 && year % 100 == 0 && year % 400 == 0 ){
        console.log("the year "+year+" is a leap year");       
    }
    else{
        console.log("the year "+year+" is not a leap year");        
    }
}
year = prompt("Enter a year:");
isLeap(year);