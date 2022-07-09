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
        
           
    },
};


const dj = {
   firstName : "Vaishu",
   lastName : "Patil",
   role : "Sub-Admin",
   courseCount: 5,
}

//vaishnavi.getInfo();
//dj.getInfo();

//var djInfo  = vaishnavi.getInfo.bind(dj);
//djInfo();

vaishnavi.getInfo.call(dj);
