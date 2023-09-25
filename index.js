//array storing all possible characters for password creation
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U",
"V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u",
"v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^",
"&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const firstPassword = document.getElementById("first-option"); //selects first password 
const secondPassword = document.getElementById("second-option"); //selects second password 
let currentSelection = ""; //stores currently selected password, either first or second password
const passwordLength = 11; //password length

firstPassword.addEventListener("click", () => setSelectedPassword(firstPassword)); //selects first password for copy sequence
secondPassword.addEventListener("click", () => setSelectedPassword(secondPassword)); //selects second password for copy sequence

function setSelectedPassword(element) { //sets currently selected password to either first or second password
    currentSelection = element.textContent;
    keyboardCopier();
}

function keyboardCopier() //copies currently selected password to keyboard and displays alert if successful
{
    navigator['clipboard'].writeText(currentSelection).then(() => {
        alert("successfully Copied Password: " + currentSelection);
      })
      .catch(() => {
        alert("something went wrong" + currentSelection.textContent + "-" + firstPasswordOption);
      });;
  }

function generatePasswordOptions() { // calls generateRandomPassword(length) to set first and second password
    firstPassword.textContent = generateRandomPassword(passwordLength);
    secondPassword.textContent = generateRandomPassword(passwordLength);
}

function generateRandomPassword(length) // sets a random password option and returns it 
{   
    let password = ""
    
    for(let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * characters.length);
        password += characters[index];
    }
    return password
}

