let basic= ["cat","dog", "bunny","parrot", "mouse", "sheep"]

let medium = ["Mona Lisa","Chris Rock", "Giraffe","Hang man", "bookshelf"];

let hard = ["crocodile", "umbrella", "ticonderogo", "Locust Bean Gum",]

let wins = 0;
let losses = 0;


let lines = [];
let correctLetter = [];
let wrongLetter = [];


let ranNum = Math.floor(Math.random()*basic.length);
let word = basic[ranNum];

console.log(word);



let docUnderline=document.getElementsByClassName('lines');
let docCorrectLetter=document.getElementsByClassName('correctLetter');
let docWrongLetter=document.getElementsByClassName('wrongLetter');



let underline = () => {

    for (let i=0 ; i< word.length; i++) {

        lines.push('_');

    }

    return lines;
}

console.log (underline());



document.addEventListener('keypress',(event)=> {
   

    let letter= event.keyCode;
    let vay = String.fromCharCode(letter);
    console.log (vay);

    
    if (word.indexOf (vay) > -1) {

       correctLetter.push(vay);
       lines[word.indexOf(vay)]=vay;
       docUnderline[0].innerHTML=lines.join('');
       docCorrectLetter[0].innerHTML=correctLetter;

       if (lines.join('')==word) {

        wins ++;
       }

       console.log(lines);

    }
       else
        { wrongLetter.push(vay)};
        losses --;
       console.log(wrongLetter);
       document.wrongLetter[0].innerHTML=wrongLetter;

   
}

    
    
);




