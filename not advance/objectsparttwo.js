var User = {
    name: "",
    getUserName : function(){
        console.log(`User name is : ${this.name}`);
    },
};

var vaishavi = Object.create(User);
console.log(vaishnavi);
vaishnavi.name = "vaishnavi hole";
vaishnavi.getUserName(); 

var sam = object.create(User, {
    name: {value: "sammy"},
    courseCount: { value: 3},
});

sam.getUserName();
