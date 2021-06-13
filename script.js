let botaoCalcular = document.getElementById('btnCalcular')
var peso_slide = document.getElementById('peso_slide')
var peso_dig = document.getElementById('peso_dig')
var altura_slide = document.getElementById('altura_slide')
var altura_dig = document.getElementById('altura_dig')

function mostrarPeso(newVal){
  peso_slide.value = newVal;
}

peso_slide.addEventListener("input", atualizarPeso );

function atualizarPeso(e){
  peso_dig.value = e.srcElement.value;
}

//NOVA FUNÇÃO
function mostrarAltura(newVal){
  altura_slide.value = newVal;
}

altura_slide.addEventListener("input", atualizarAltura );

function atualizarAltura(e){
  altura_dig.value = e.srcElement.value;
}



function calculandoIMC(){
  let peso = document.getElementById('peso_dig').value;
  let altura = document.getElementById('altura_dig').value/100;
  let resultado = document.getElementById('resultado');
    
  if(peso !== "" && altura !== ""){
    let imc = (peso / (altura ** 2)).toFixed(1);
    let mensagem = "";
    if(imc < 18.5){
      mensagem = "Abaixo do Peso"   
    }else if(imc < 25){
      mensagem = "Peso Normal"
    }else if(imc < 30){
      mensagem = "Sobrepeso"
    }else if(imc < 35){
      mensagem = "Obesidade Grau I"
    }else if(imc < 40){
      mensagem = "Obesidade Grau II"
    }else{
      mensagem = "Obesidade Grau III ou Mórbida"
    }
    resultado.textContent = `Seu imc é ${imc}: ${mensagem}`
  }else{
    resultado.textContent = "Digite seu peso e altura!!!"
  }  
}

botaoCalcular.addEventListener('click', calculandoIMC);