var nome_Usuario = '';
var texto = document.querySelector('span');

while(nome_Usuario == ''){
    nome_Usuario = prompt('Digite seu apelido aqui!');
}

texto.textContent = nome_Usuario;
