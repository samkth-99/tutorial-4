let password = "secret";
let wrong = 1;
let attemps = 1;


let passwordEntered = prompt("Please enter your password : ");
if (passwordEntered == "secret") {
    console.log(`You entered the correct password after ${attemps} attempt(s)`);
} else {
    while (attemps <3) {
        let promptValue = prompt("Enter your password again: ");
        if (passwordEntered == "secret") {
            console.log("You entered the correct password after " + wrong + " attempt(s)");
        break;
        } else {
            wrong ++;
            attemps ++;
        }
        if (wrong == 3) {
            console.log("Your account is locked! You failed to enter the correct password " +
            wrong + " times");   
        } 
    }
};