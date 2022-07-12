fetch("https://api.chucknorris.io/jokes/random")
.then((response)=> {
     return responce.json();
})


.then ((data) => {
    console.log("DATA is :", data);
})
.catch()

