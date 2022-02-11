let hour = prompt("Enter the hour: ");
let min = prompt("Enter the minute: ");
let sec = prompt("Enter the second: ");

if (Number(hour) >= 0 && Number(hour) <= 23 &&
    Number(min) >= 0 && Number(min) <= 59 &&
      Number(sec) >= 0 && Number(sec) <= 59) 
  {
    sec ++; 
    console.log("You entered: " + hour + "h" + min + "m" + sec + "s");
    console.log("One second later: " + hour + "h" + min + "m" + sec++ + "s");
    
  }
else {
  console.log("Invalid input.")
}
      