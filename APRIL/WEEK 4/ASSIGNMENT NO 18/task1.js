const nameElement = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm-password')
const buttonElement = document.getElementById('submit-btn')
const nameSmall = document.getElementById('name-small')

const entireForm = document.querySelector('form')

entireForm.addEventListener('submit', submitForm)

function buttonClick(){
    console.log("button is clicked")
}

function submitForm(e){
    e.preventDefault()

    if(nameElement.value === "" || nameElement.value.includes("Abhishek") === true){
        console.log("Name is Empty")
        nameElement.classList = "error"
        nameSmall.classList = "display"
    }else{
        nameElement.classList = "success"
    }

    if(email.value === ""){
        console.log("email is Empty")
        email.classList = "error"
        nameSmall.classList = "display"
    }else{
        nameElement.classList = "success"
    } // add else conditions
   

    if(password.value === "" ){
        console.log("password is Empty")
        password.classList = "error"
    
    }
    

    if(confirmPassword.value === ""){
        console.log("confirm password is Empty")
        confirmPassword.classList = "error"
    }
    
    const characters = ['@', '$', '#', "!", 'A', 'B']

    let counter = 0

    for(i=0; i<characters.length; i++){
        if(password.value.includes(characters[i])===false){
            counter++
            console.log(characters[i], " - ", counter)
        }
        
        console.log("counter - ", counter)

        if(counter===characters.length){
            console.log('error')
        }
        else{
            console.log('password is satisfied')
        }
    }

    if(password.value===confirmPassword.value){
        document.querySelector('.container').innerHTML=`<p>thanks for submitting</p>`
    }
}
