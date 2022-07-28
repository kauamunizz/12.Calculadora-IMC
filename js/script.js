document.querySelector('#calcular').addEventListener('click', retornarValor);

function retornarValor() {
    const { altura, peso } = document.forms.imc;
    const valorIMC = document.querySelector('.imc');
    const imc = (peso.value / (altura.value * altura.value)) * 10000;

    valorIMC.innerText = imc.toFixed(1);

    document.querySelector('#tabela').classList.remove('hide');
    document.querySelector(getTarget(imc)).classList.add('selected');
}

function getTarget(imc) {
    if (imc < 18.5) return '#menor';
    else if (imc >= 18.5 && imc < 25) return '#normal';
    else if (imc >= 25 && imc < 30) return '#sobrepeso';
    else if (imc >= 30 && imc < 35) return '#obesidade';
    else if (imc >= 35 && imc < 40) return '#obesidade-dois';
    else return '#obesidade-tres';
}