const uno = () => {
    console.log("I am One");
};

const dos = () => {
    setTimeout(() => {
        console.log("Wohoooo");
    }, 3000);
    
    console.log("I am One");
};

const tres = () => {
    console.log("I am One");
};

uno();
dos();
tres();