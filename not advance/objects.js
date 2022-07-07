var User = function(firstName, courseCount){
       this.firstName = firstName;
       this.courseCount = courseCount;
       this.getCourseCount = function(){
        console.log(`Course count is: ${this.courseCount}`);
       };
};

User.prototype.getFirstname = function () {
       console.log(`Your firstname is : ${this.firstName}`);
};

var vaishnavi =new User("vaishu",2)
vaishu.getCourseCount();
vaishu.getFirstname();


var sam = new User("ram",1);
sam.getCourseCount();
sam.getFirstname();