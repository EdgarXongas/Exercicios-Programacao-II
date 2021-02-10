(() => {

    const btn = document.querySelector('.adivinhe-btn');
    let rand = Math.floor(Math.random() * 100);
    let resultTxt = document.querySelector('.adivinhe-countTxt');
    let result = document.querySelector('.adivinhe-count');
    let reset = document.querySelector('.reset-btn');
    let teste = document.querySelector('.adivinhe-ipt');

    teste.addEventListener('keyup',(event)=>{
        if (event.key =='Enter') {
            btn.click();
        }
    });

    let count = 8;

    btn.addEventListener('click', () => {
        let ipt = document.querySelector('.adivinhe-ipt').value;
        let txt = '';
        teste.focus();
        if (isFinite(ipt)) {
            if (count <= 0) {
                txt = 'Clique "Reset" para jogar novamente';
                resultTxt.classList.remove('perdeu','venceu');
            } else {
                if (ipt > rand) {
                    txt = 'Chutou Alto!';
                    count--;
                    if (count <= 0) {
                        resultTxt.classList.add('perdeu');
                        txt = 'Você Perdeu!';
                    }
                } else if (ipt < rand) {
                    txt = 'Chutou Baixo!';
                    count--;
                    if (count <= 0) {
                        resultTxt.classList.add('perdeu');
                        txt = 'Você Perdeu!';
                    }
                } else {
                    txt = 'Você Venceu!';
                    resultTxt.classList.add('venceu');
                    count = 0;
                }
            }

        } else {
            txt = 'Digite um número entre 1 a 100';
        }
        console.log(ipt, rand);
        resultTxt.innerHTML = txt;
        result.innerHTML = 'Tentativas: ' + count;
    });
    reset.addEventListener('click',()=>{
        count = 8;
        resultTxt.classList.remove('perdeu','venceu');
        rand =  Math.floor(Math.random() * 100);
        resultTxt.innerHTML = 'Entre 1 a 100';
        result.innerHTML = 'Tentativas: ' + count;
        let iv = document.querySelector('.adivinhe-ipt').value = '';
    });

})();