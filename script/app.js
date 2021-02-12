                // Olá Galerinha da CDL ò_ó
(()=>{          
    const btn = document.querySelector('#btn');
    let result = document.querySelector('#result');

    btn.addEventListener('click',()=>{
        let ipt = document.querySelector('#ipt').value;
        let data = (new Date() - Date.parse(ipt))/86400000;
        data = (isFinite(data))? 'Você viveu '+data.toFixed(0)+' Dias' : 'Selecione uma data';
        result.innerHTML = data;
    });
})();