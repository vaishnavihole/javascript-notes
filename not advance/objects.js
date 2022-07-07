var User = function(firstName, courseCount){
       this.firstName = firstName;
       this.courseCount = courseCount;
       this.getCourseCount = function(){
        console.log(`Course count is: ${this.courseCount}`);
       };
};

var vaishnavi =new User("vaishu",2)
console.log(vaishu);

var sam = new User("ram",1);
console.log(sam);