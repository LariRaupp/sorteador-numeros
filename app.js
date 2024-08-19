function sortear(){
    let quantidadeNumeros = parseInt(document.getElementById('quantidade').value);
    let numeroMin = parseInt(document.getElementById('de').value);
    let numeroMax = parseInt(document.getElementById('ate').value);
    
    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidadeNumeros; i++) {
    numero = obterNumerosSorteados(numeroMin, numeroMax);
    while (sorteados.includes(numero)){
       numero = obterNumerosSorteados(numeroMin, numeroMax);
    } 
        sorteados.push(numero);      
    
   alterarTexto('resultado', `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`);
}
alterarBotao();
}

function obterNumerosSorteados(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarTexto(tag, texto) {
    let campo = document.getElementById(tag);
    campo.innerHTML = texto;
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    alterarTexto('resultado', '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>');
    alterarBotao();
}

function alterarBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')){
     botao.classList.remove('container__botao-desabilitado');
     botao.classList.add('container__botao'); 
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado'); 
    }
}