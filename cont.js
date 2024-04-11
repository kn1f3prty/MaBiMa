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
    botoes[i].classList.add('ativa');
}
}
