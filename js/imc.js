(()=>{

    const btn = document.querySelector('#imc-btn');
    btn.addEventListener('click',()=> {
        const resultado = document.querySelectorAll('.result');
        const [result,resultTxt] = resultado;
        let ipts = document.querySelectorAll('.imc-ipt');
        let [massa,altura] = ipts;
        let t = 0;
        let txt = '';
        resultTxt.style.color = '#000000d2';

        t = massa.value / (Math.pow(altura.value,2));
        
        if(isFinite(t)) {
            if (t<18.5) {
                txt = 'Magreza';
               resultTxt.style.color = '#dfe233';
            } else if (t>=18.5 && t<=24.9) {
                txt = 'Normal';
                resultTxt.style.color = '#63ff6a';
            } else if(t>=24.9 && t<=30) {
                txt = 'Sobrepeso';
                resultTxt.style.color = '#dfe233';
            } else if(t>=30 && t<=35) {
                txt = 'Obesidade I';
                resultTxt.style.color = 'yellow';
            } else if(t>=35 && t<=40) {
                txt = 'Obesidade II';
                resultTxt.style.color = 'orange';
            } else {
                txt = 'Obesidade III';
                resultTxt.style.color = 'red';
            }
        } else {
            t = 0;
            txt = 'Digite valores válidos';
        }
        result.innerHTML = t.toFixed(2);
        resultTxt.innerHTML = txt;
    });


})();

/*  Magreza, quando o resultado é menor que 18,5 kg/m2;
    Normal, quando o resultado está entre 18,5 e 24,9 kg/m2;
    Sobrepeso, quando o resultado está entre 24,9 e 30 kg/m2;
    Obesidade, quando o resultado é maior que 30 kg/m2. */ 