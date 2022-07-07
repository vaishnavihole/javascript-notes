//function init(){
    //var firstName = "vaishnavi"
    //function sayFirstName() {
   // console.log("I am init");

    //}
  //return  sayFirstName;
//}

//var value = init();

//value();

function doAddition(X){
    return function(y){
        return X + y;
    }
}

var add5 = doAddition(4)
console.log(add5(5));


console.log(doAddition(5)(5));

