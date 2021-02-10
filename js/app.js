(()=>{

    let result = document.querySelector('#result');
    const btn = document.querySelector('#btn');

    btn.addEventListener('click',()=>{
        let ipt = document.querySelector('#ipt').value;
        let data = (new Date() - Date.parse(ipt))/86400000;
        data = (isFinite(data))? 'Você viveu '+data.toFixed(0)+' Dias' : 'Selecione uma data'
        result.innerHTML = data;
        console.log(data);
    });
})();