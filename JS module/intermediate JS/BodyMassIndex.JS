function bmiCalculator (weight, height){
    var bmi = weight/Math.pow(height, 2);
    console.log("your BMI is:"+bmi);
    var interpretation;
    if(bmi < 18.5){
        interpretation  == console.log("You are underweight");
    }
    else if( bmi >= 18.5 && bmi < 24.9){
        interpretation == console.log("you have a normal weight");
    }
    else{
        interpretation == console.log("You are overweight");
    }
    return bmi;
}
console.log(bmiCalculator(70, 1.5));