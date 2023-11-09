//characters array stores all possible keyboard characters for password creation
const characters = [...Array(95).keys()].map(i => String.fromCharCode(i+32))
const firstPassword = document.getElementById("first-option")
const secondPassword = document.getElementById("second-option")
const generateBtn = document.getElementById("generate-btn")

document.body.addEventListener("click", (e)=> {
    generateRandomPassword(e.target.id)
    setSelectedPassword(e.target.id)
    updatePasswordLength(e.target.id) 
})

//generates a single random password
function generateRandomPassword(id) {   
    if(id === generateBtn.id) {
        let passwordOption = ""
        let passwordLength = document.getElementById("passwordSlider").value

        for(let i = 0; i < passwordLength; i++) {
            const index = Math.floor(Math.random() * characters.length)
            passwordOption += characters[index]
        }
        return passwordOption
    }
}

//displays first and second password options to page
function displayPasswordOptions() {
    firstPassword.textContent = generateRandomPassword(generateBtn.id)
    secondPassword.textContent = generateRandomPassword(generateBtn.id)
}

//selects current password option after user click
function setSelectedPassword(password) {
    if(password === firstPassword.id) {keyboardCopier(firstPassword.textContent)}
    else if(password === secondPassword.id) {keyboardCopier(secondPassword.textContent)}
}

//copies selected password to keyboard
function keyboardCopier(password) {
    navigator['clipboard'].writeText(password)

    //checks if alert message structure exists, then displays alert and removes it
    if(!document.getElementById("alert")) { 
        document.getElementById("header").innerHTML += 
            ` <div class ="alert" id ="alert"> COPIED PASSWORD: </br> 
                <span id ="alert-password"> ${password} </span> </div> `
        setTimeout(()=>{ document.getElementById("alert").classList.toggle("none")}, 2800)
    }
    //if alert message structure exists, its conversion is replaced with new selection
    else {
        document.getElementById("alert").classList.toggle("none")
        document.getElementById("alert-password").textContent = password       
        setTimeout(()=>{ document.getElementById("alert").classList.toggle("none")}, 2800)
    }
}

function updatePasswordLength(id) {
    if(id === document.getElementById("passwordSlider").id) {
        document.getElementById("passwordLength").textContent = 
            document.getElementById("passwordSlider").value
    }
}
