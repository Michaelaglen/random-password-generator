// Basis for passwords
// eg<xWij@veiPUwK (15 characters)
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// Elements from HTML
let passwordOne = document.getElementById("pw-div-1");
let passwordTwo = document.getElementById("pw-div-2")

// Testing in GUI
passwordOne.textContent = "Hello World";
passwordTwo.textContent = "World Hello";

// Function that's connected to btn through onclick
function password() {
    // Math.floor() to remove decimals
    // Math.random() to get a random value from the array
    // A for loop to repeat the process 15 times
    // A way to store this values and print them in the GUI
    // A way to repeat this password for the 2nd password

    // displaying in GUI
    passwordOne.textContent // password 1 
    passwordTwo.textContent // password 2 
}
  //<!-- If you want to make the onclick function you'll have to change the divs into buttons. -->

  password();