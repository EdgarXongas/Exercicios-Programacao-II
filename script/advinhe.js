                // Olá Galerinha da CDL =)
(() => {
    const btn = document.querySelector('.adivinhe-btn');
    const reset = document.querySelector('.reset-btn');
    let resultadoTexto = document.querySelector('.adivinhe-countTxt');
    let resultado = document.querySelector('.adivinhe-count');
    let teste = document.querySelector('.adivinhe-ipt');
    
    teste.addEventListener('keyup',(event)=>{
        if (event.key =='Enter') {
            btn.click();
        }
    });

    let rand = Math.floor(Math.random() * 100);
    let count = 8;
    btn.addEventListener('click', () => {
        let ipt = document.querySelector('.adivinhe-ipt').value;
        let txt = '';
        teste.focus();
        ipt = parseFloat(ipt);
        if (isFinite(ipt) || ipt == '') {
            if (count <= 0) {
                txt = 'Clique "Reset" para jogar novamente';
                resultadoTexto.classList.remove('perdeu','venceu');
            } else {
                if (ipt > rand) {
                    txt = 'Chutou Alto!';
                    count--;
                    if (count <= 0) {
                        resultadoTexto.classList.add('perdeu');
                        txt = 'Você Perdeu!';
                    }
                } else if (ipt < rand) {
                    txt = 'Chutou Baixo!';
                    count--;
                    if (count <= 0) {
                        resultadoTexto.classList.add('perdeu');
                        txt = 'Você Perdeu!';
                    }
                } else {
                    txt = 'Você Venceu!';
                    resultadoTexto.classList.add('venceu');
                    count = 0;
                }
            }
        } else {
            txt = 'Digite um número entre 1 a 100';
        }
        resultadoTexto.innerHTML = txt;
        resultado.innerHTML = 'Tentativas: ' + count;
    });
    reset.addEventListener('click',()=>{
        count = 8;
        resultadoTexto.classList.remove('perdeu','venceu');
        rand =  Math.floor(Math.random() * 100);
        resultadoTexto.innerHTML = 'Entre 1 a 100';
        resultado.innerHTML = 'Tentativas: ' + count;
        document.querySelector('.adivinhe-ipt').value = '';           //
    });


                /* Show-Hide script */

    let sh = document.querySelector('.show-hide');
    let r = document.querySelector('.container');
    let img = document.querySelector('.img-con');
    sh.addEventListener('click',(event)=> {
        sh.classList.toggle('move-left');
        sh.value = (sh.value == 'Mostrar Script')? 'Esconder Script':'Mostrar Script';
        r.classList.toggle('move-left');
        img.classList.toggle('move-img');
    });

})();