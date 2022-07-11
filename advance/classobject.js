// import User from "./class.js";

const User = require("./class.js");

const vaishnavi = new User("vaishnavi", "vaishu@.dev");

console.log(vaishnavi.getInfo());
vaishnavi.enrollCourse("React js");
vaishnavi.enrollCourse("Angular js");

console.log(vaishnavi.getCourseList);