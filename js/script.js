// IMC = Peso ÷ (Altura × Altura)

const sexo = document.querySelector('#sexo')
const altura = document.querySelector('#altura');
const peso = document.querySelector('#peso');
const calcular = document.querySelector('#calcular');

calcular.addEventListener('click', retornarValor);

function retornarValor () {
    let valorIMC = document.querySelector('.imc');
    let imc = (Math.round(peso.value / (altura.value /100 * altura.value /100)));

    valorIMC.innerHTML = imc;
    document.querySelector('#tabela').classList.remove('hide')
    
    // if (imc < 18,5) document.querySelector('#menor').style.backgroundColor = '#DC143C';
    // else if (imc >= 18,5 || imc < 24,9) document.querySelector('#normal').style.backgroundColor = '#8FBC8F';
    // if (imc >= 25 || imc < 29,9) document.querySelector('#sobrepeso').style.backgroundColor = '#FAFAD2';
    // if (imc >= 30 || imc < 34,9) document.querySelector('#obesidade').style.backgroundColor = '#DC143C';
    // if (imc >= 35 || imc < 35,9) document.querySelector('#obesidade-dois').style.backgroundColor = '#DC143C';
    // if (imc > 40) document.querySelector('#obesidade-tres').style.backgroundColor = '#DC143C';
}