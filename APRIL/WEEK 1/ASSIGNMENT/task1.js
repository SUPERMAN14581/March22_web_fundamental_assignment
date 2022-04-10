const x = prompt('enter a value for x')
const y = prompt('enter a value for y')
const z = prompt('enter a value for z')
console.log("value of x,y,z is - ", x, y, z )
if(x<y){
    if(x<z){
        console.log("x is smaller")
    }
}
if(y<x){
    if(y<z){
        console.log("y is smaller")
    }
}
else{
    console.log("z is smaller")
}

