// document.querySelector('h1').innerHTML = '<img class="normal-size" src="Ravi.jpg" alt="">'

const imageElement = document.querySelector('img')
imageElement.addEventListener('mousemove', increasesize)
function increasesize(){
    imageElement.classList = 'large-size'
}

imageElement.addEventListener('mouseout',orignalsize)
function orignalsize(){
    imageElement.classList = 'normal-size'
}