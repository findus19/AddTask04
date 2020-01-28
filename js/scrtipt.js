'use strict';

let str = ("      fadasdfssddfsf sadsa a hdh a ld        ");
let str1 = 4;

const otherName = (a) => {
    if(typeof(a) === "string") {
        let a1 = a.trim();
        if(a1.length > 30) {  
            return a1.slice(0, 30)+"...";
        }
    } else {
        return('это не строка');
    }
};

console.log(otherName(str));