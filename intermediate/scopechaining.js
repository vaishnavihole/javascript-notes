var name = "Vaishnavi";

console.log("Line number 3", name);

function sayName(){
    var name = "My V"
    console.log("Line number 6", name);

    function sayNameTwo(){
        console.log("Line number 10",name);
    }
}


sayName();