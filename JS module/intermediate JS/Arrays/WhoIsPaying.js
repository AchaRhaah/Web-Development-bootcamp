var guessList = ["Trephina", "Acha", "Ngoh", "bethel", "Favor", "Perry"];
function whoIsPaying(list){
    var index = Math.floor(Math.random() * (guessList.length) )
    console.log(list[index]);
}
whoIsPaying(guessList);
