// Olá Galerinha da CDL ò_ó
(() => {
    const btn = document.querySelector('#btn');
    let result = document.querySelector('#result');

    btn.addEventListener('click', () => {
        let ipt = document.querySelector('#ipt').value;
        let data = (new Date() - Date.parse(ipt)) / 86400000;
        data = (isFinite(data)) ? 'Você viveu ' + data.toFixed(0) + ' Dias' : 'Selecione uma data';
        result.innerHTML = data;
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