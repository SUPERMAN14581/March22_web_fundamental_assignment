const somePromise = fetch('https://reqres.in/api/users?page=2')

somePromise
    .then(data => data.json())
    .then(result => {
        console.log(result)
        const userArr = result.data
let indexToBeDisplayed = 0

const currentElement = userArr[indexToBeDisplayed]

const imageElement = document.querySelector("#image")
const nameElement = document.querySelector(".name")
const jobElement = document.querySelector(".email")

const nextBtn = document.querySelector("#next")
const prevBtn = document.querySelector("#prev")
const randomBtn = document.querySelector("#random")

nextBtn.addEventListener('click', displayNext)
prevBtn.addEventListener('click', displayPrev)

randomBtn.addEventListener('click', displayRandom)

function displayNext(){
    if(indexToBeDisplayed === userArr.length-1){
        indexToBeDisplayed = 0
    }else{
        indexToBeDisplayed++
    }
    console.log(indexToBeDisplayed)
    updateScreen( userArr[indexToBeDisplayed] )
}

function displayPrev(){
    if(indexToBeDisplayed === 0){
        indexToBeDisplayed = userArr.length-1
    }else{
        indexToBeDisplayed--
    }
    console.log(indexToBeDisplayed)
    updateScreen( userArr[indexToBeDisplayed] )
}
 
 
function displayRandom(){
    var indexToBeDisplayed = Math.random();
    indexToBeDisplayed = indexToBeDisplayed * (userArr.length - 1) + 1;
    console.log(Math.floor(indexToBeDisplayed))
    updateScreen( userArr[Math.floor(indexToBeDisplayed)] )
    
}

function updateScreen(ravi){
    nameElement.innerText = ravi.first_name
    jobElement.innerText = ravi.email
    imageElement.src = ravi.avatar
}

updateScreen(currentElement)

    })
    .catch(error => console.log("got some error - ", error))