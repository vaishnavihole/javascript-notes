var user  = {
    firstName : "Vaishnavi",
    lastName  : "Hole",
    role      : "Admin",
    loginCount :  21,
    facebookSignedIn : true
};

console.log(user,firstName);
console.log(user["lastName"]);

console.log(user.loginCount);
user.loginCount  = 40;
console.log(user.loginCount);
console.table(user);