// // console.log("Hello, World!");
// // console.log("Welcome to my website.");

// // window.alert("This is a simple alert message.");
// // window.confirm("Do you want to continue?");
// // window.prompt("Please enter your name:");

// document.getElementById("myH1").textContent = "Welcome to My Website!";
// document.getElementById("myP").textContent = "Paragraf baru";

// Operasi Aritmatika
let x;
let y;

x = 100;
y = 150;

console.log("X = " + x);
console.log("Y = " + y);

let sum = x + y;
console.log("Sum = " + sum);

let multiplication = x * y;
console.log("Multiplication = " + multiplication);

// tipe data boolean
let online = true;
let offline = false;

console.log(`Bro is online: ${online}`);
console.log(`Bro is offline: ${offline}`);

let gpa = 3.5;
//logika if else
if (gpa < 3.5) {
    console.log("Learn Again");
} else if (gpa > 3.5 ){
    console.log("Good Job");
} else {
    console.log("Perfect");
}

if (gpa >= 3.5) {
    console.log("Kamu keren");
} if (gpa < 3.5) {
    console.log("Kamu harus belajar lagi");
} else {
    console.log("Kamu sempurna");
}

//If pintu bertingkat
if (gpa >= 3.5) {
    if (gpa > 3.5) {
        console.log("Kamu keren");
    } else {
        console.log("OK");
    }
} else {
    console.log("Belajar lagi");
}