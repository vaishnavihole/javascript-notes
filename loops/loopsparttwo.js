const names = ["Youtube","facebook","Instgram","Amazon"]

for(const n of names) {
    console.log(n);
}

const symbols = {
    yt: "Youtube",
    ig:  "Instagram",
    fb: "Facebook",
};
   for (const n in symbols) {
    console.log(symbols[`key is ${n} and value is: ${symbols[n]}`]);
   }