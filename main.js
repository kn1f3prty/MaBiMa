var nome_Usuario = ''; // configurando o noe de uuário
var texto = document.querySelector('span'); //

while(nome_Usuario == '' ){ // || nome_Usuario == null
nome_Usuario = prompt('Digite seu apelido aqui! :)');
}

if(nome_Usuario == null){
texto.textContent = 'usuário';
}else{
texto.textContent = nome_Usuario;
}
