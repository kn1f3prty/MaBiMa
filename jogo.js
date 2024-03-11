let numeroSecreto = 13; 

let chute = '';

while(chute == '' || chute== null){
    chute = prompt('Escolha um numero de 0 a 20');
}

/* prompt é o comando usado para enviar uma mensagem */



if(numeroSecreto == chute){
    alert ('Parabéns! Você acertou:');
} else{
    alert('Que triste! Você errou:(');
}