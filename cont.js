const botoes = document.querySelectorAll('.objetivos');
const textos = document.querySelectorAll('.aba-conteudo');


let i = 0;

for(let i = 0; i<botoes.length; i++){
console.log(i);
botoes[i].onclick = function(){
    for (let j = 0; j<botoes.length; j++){
    botoes[j].classList.remove('ativo');
    textos[j].classList.remove('ativa');
    }
    botoes[i].classList.add('ativo');
    textos[i].classList.add('ativa');
    }
}
const contadores = document.querySelectorAll('.contador');
let tempoAtual = new Date ();
let tempoObjetivo1 = new Date ('2024-04-19T00:00:00')
let tempoFinal = tempoFinal - tempoAtual;
let segundos =  tempoFinal/1000;

contadores[0].textContent = tempoObjetivo1 - tempoAtual;