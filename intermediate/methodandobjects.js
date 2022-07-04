var user  = {
    firstName : "Vaishnavi",
    lastName  : "Hole",
    role      : "Admin",
    loginCount :  21,
    facebookSignedIn : true,
    courseList: [],
    buyCourse: function (courseName) {
        this.courseList
    },
    getCourseCount: function (){
        return `${this.firstName} is enrolled in total of ${this.courseList.lenght}courses`;


    },

};
var courseList = true;
console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("React JS course");
user.buyCourse("Java course");
console.log(user.getCourseCount());