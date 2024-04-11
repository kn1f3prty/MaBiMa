const botoes = document.querySelectorAll('.objetivos');
console.log(botoes.length);

let i = 0;

for(let i = 0; i<botoes.length; i++){
console.log(i);
botoes[i].onclick = function(){
    for (let j = 0; j<botoes.length; j++){
    botoes[j].classList.remove('ativo');
    }
    botoes[i].classList.add('ativo');
}
}
