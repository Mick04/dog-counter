let count = 0;
let lap1 = 34;
let lap2 = 33;
let lap3 = 36;
let countEl = document.getElementById("count-el");
//let save = document.getElementById("save");
let saveEl = document.getElementById("save-el");

function increment() {
    if (count <= 50) {
        count++;
        console.log(count);
        countEl.innerText = count;
    }
}

 decrement = () =>  {
    if (count >= 1) {
        count--;
        console.log(count);
        countEl.innerText = count;
    } else if (count <= 0){
        console.log("can't go below 0");
        countEl.innerText = "can't go below 0";
    }
 };

function save() {
    let outPut = ' - ' + count;
    console.log(outPut);
    //you can use this(innerText) but does't render 
    //all charactors
    /********************************
     *  saveEl.innerText += outPut; *
     *******************************/
    
    //or you can use this (textContent) whitch
    // does render all charactors

    saveEl.textContent += outPut;
    count = 0;
    countEl.innerText = count;
}
/*
reset = () => {
    saveEl.textContent = ' ';
}*/
let lap =1;
logOut = () => {
    let total = lap ++;
    console.log(total);
}

logOut();
logOut();
logOut();
let i =0
for (let i = 0; i < 3; i++) {
   logOut();
}

let user = 'mick';
let message = 'you have three new notifications';
let messageToUser = message + ', ' + user + '!' 
console.log(message + ', ' + user + '!');
console.log(messageToUser);


let Name = 42;
let greeting = 'Hi, my name is ';
let myGreeting = greeting + Name;
console.log(myGreeting);

console.log(4 + 5);//  9
console.log('2' + '4');// 24
console.log('5' + 1);// 51
console.log(100 + '100');//100100*/