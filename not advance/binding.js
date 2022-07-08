const vaishnavi = {
    firstName :"Vaishnavi",
    lastName :  "Hole",
    role : "Admin",
    courseCount: 3,
    getInfo : function(){
        console.log(`
          First name is ${this.firstName}
          Last name  is ${this.lastName}
          His role is ${this.role}
          and he is studying ${this.courseCount}courses
        `);
        
           
    }
}