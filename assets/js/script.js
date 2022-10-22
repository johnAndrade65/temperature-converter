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
function alertMsg(){
    if(celsius.value == 0){
        alert("Type something 🤓")
    }else if(celsius.value <= -10){
        alert("I froze 🥶")
    }else if(celsius.value <= 7){
        alert("It's cold! 🥶")
    }else if(celsius.value <= 17){
        alert("Nice weather 🥰")
    }else if(celsius.value <= 30 && celsius.value <= 35){
        alert("It's hot 🥵")
    }else{
        alert("I melted ☠")
    }
}
