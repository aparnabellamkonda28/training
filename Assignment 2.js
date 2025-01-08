let a = prompt("Enter a number for A")
let b = prompt("Enter a number for B")
let c = prompt("Enter a number for C")

if(a > b && a > c){
    console.log("A is the largest number")
}else if(b > a && b > c){
    console.log("B is the largest number")
}else if(c > a && c > b){
    console.log("C is the largest number")
}else if(a === b && a === c){
    console.log("All numbers are equal")
}
else{
    console.log("Enter a Valid Number")
}