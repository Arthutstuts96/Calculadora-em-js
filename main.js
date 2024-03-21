//variáveis
const listaBotoes = document.querySelectorAll('.botao');

const inputNumeros = document.getElementById('inputNumeros');
const resultado = document.getElementById('calcularResultado');
const clear = document.getElementById('clear');
const backspace = document.getElementById('backspace');

//botões
listaBotoes.forEach(botao => botao.addEventListener('click', function(){
    const valorBotao = botao.value;
    inputNumeros.value += valorBotao;
}))
resultado.addEventListener('click', calcularResultado);
clear.addEventListener('click', limparInput);
backspace.addEventListener('click', voltarUmDigito);

//funções
function limparInput(){
    inputNumeros.value = "";
}
function calcularResultado(){
    if(inputNumeros.value != ""){
        try{
            inputNumeros.value = eval(inputNumeros.value);
        }
        catch(error){
            inputNumeros.value = 'Erro';
        }
    }
    else{ alert('Digite alguma expressão!'); }
}
function voltarUmDigito(){
    let numeroAtual = inputNumeros.value;
    numeroAtual = numeroAtual.substr(0, numeroAtual.length - 1);
    inputNumeros.value = numeroAtual;
}
