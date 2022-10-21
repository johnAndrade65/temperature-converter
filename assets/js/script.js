let celsius = document.getElementById("celsius")
let fahrenheit = document.getElementById("fahrenheit")
console.log(celsius, fahrenheit);


function celToFar(){
    let output = ( parseInt(celsius.value) * 9/5) + 32;
    fahrenheit.value = parseInt(output.toFixed(2));
}
function farToCel(){
    let output = ( parseInt(fahrenheit.value) - 32) * 5/9;
    celsius.value = parseInt(output.toFixed(2));
}
