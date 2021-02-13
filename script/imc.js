(() => {            // Olá Galerinha da CDL =)
    const btn = document.querySelector('#imc-btn');
    btn.addEventListener('click', () => {
        const resultados = document.querySelectorAll('.result');
        const [resultado, resultadoTexto] = resultados;
        let ipts = document.querySelectorAll('.imc-ipt');
        let [massa, altura] = ipts;
        let imc = massa.value / (Math.pow(altura.value, 2));
        resultadoTexto.style.color = '#000000d2';
        let txt = '';
        let cor = '';
        if (isFinite(imc)) {
            if (imc < 18.5) {
                txt = 'Magreza'; cor = '#dfe233';
            } else if (imc >= 18.5 && imc <= 24.9) {
                txt = 'Normal'; cor = '#63ff6a';
            } else if (imc >= 24.9 && imc <= 30) {
                txt = 'Sobrepeso'; cor = '#dfe233';
            } else if (imc >= 30 && imc <= 35) {
                txt = 'Obesidade I'; cor = 'yellow';
            } else if (imc >= 35 && imc <= 40) {
                txt = 'Obesidade II'; cor = 'orange';
            } else {
                txt = 'Obesidade III'; cor = 'red';
            }
        } else {
            imc = 0; txt = 'Digite valores válidos';
        }
        resultado.innerHTML = imc.toFixed(2);
        resultadoTexto.innerHTML = txt;
        resultadoTexto.style.color = cor;
    });

                /* Show-Hide script */

    let sh = document.querySelector('.show-hide');
    let r = document.querySelector('.container');
    let img = document.querySelector('.img-con');
    sh.addEventListener('click', (event) => {
        sh.classList.toggle('move-left');
        sh.value = (sh.value == 'Mostrar Script') ? 'Esconder Script' : 'Mostrar Script'; r.classList.toggle('move-left');
        img.classList.toggle('move-img');
    });
})();

/*  Magreza, quando o resultado é menor que 18,5 kg/m2;
    Normal, quando o resultado está entre 18,5 e 24,9 kg/m2;
    Sobrepeso, quando o resultado está entre 24,9 e 30 kg/m2;
    Obesidade, quando o resultado é maior que 30 kg/m2. */