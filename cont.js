const botoes = document.querySelectorAll('.objetivos');
console.log(botoes.length);

let i = 0;

for(let i = 0; i<botoes.length; i++){
console.log(i);
botoes[i].onclick = functio(){
    botoes[i].classList.add('ativo');
    //botoes[i].classList.remove('ativo');
}
}
