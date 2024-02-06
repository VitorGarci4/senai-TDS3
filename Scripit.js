function soma(){
    var num1 = document.getElementById("num1").valueAsNumber; 
    var num2 = document.getElementById("num2").valueAsNumber;
    var result = num1 + num2;
    document.getElementById("Soma").textContent = result.toFixed(2);

}

function subtração(){
    var numero1 = document.getElementById("numero1").valueAsNumber; 
    var numero2 = document.getElementById("numero2").valueAsNumber; 
    var result = numero1 - numero2;
    document.getElementById("subtracao").textContent = result.toFixed(2);

}

function divisão(){
    var num1 = document.getElementById("num1").valueAsNumber; 
    var num2 = document.getElementById("num2").valueAsNumber;
    var result = num1 / num2 
    document.getElementById("divisao").textContent = result.toFixed(2);
}

function média(){
    var num1 = document.getElementById("num1").valueAsNumber; 
    var num2 = document.getElementById("num2").valueAsNumber; 

}


function media(){
    var media1 = document.getElementById("media1").valueAsNumber;
    var media2 = document.getElementById("media2").valueAsNumber;
    var media3 = document.getElementById("media3").valueAsNumber;
    var resMedia = (media1 + media2 + media3) / 3;
    
    var x = document.getElementById("resMedia");
    console.log(x)
    
    document.getElementById("resMedia").textContent = resMedia.toFixed(2);
}

function limpar(){
    window.location.reload();
}