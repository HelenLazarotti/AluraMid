function tocaSom(idAudio){
    const elemento = document.querySelector(idAudio);

    //não pode ser nulo E tem que ser igual a tag áudio pra reproduzir o som:
    //posso por if (elemento &&....) js já entende que quero dizer 'se existe uma valor nulo vindo dessa variável......
    if (elemento != null && elemento.localName === 'audio'){
        elemento.play();
    } else {
        alert('Elemento não encontrado.');
    }

    
}
const listaTeclas = document.querySelectorAll('.tecla');   

//preciso acessar cada elemento INDIVIDUALMENTE, e atribuir um valor, logo:

//dai entra os arrays/lista:

//preciso criar um contador:
//let contador = 0

/*enquanto (contador for MENOR que a listaTeclas.peço pra contar){}

/*while (contador < listaTeclas.length){
    
    //pego a lista de sons, passo o contador que é o ID de cada uma desses sons:
    const tecla = listaTeclas[contador];

    const instrumento = tecla.classList[1];

    const idSom = `#som_${instrumento}`
    //o while acessa CADA tecla.
    //coloco [contador]
    
    tecla.onclick = function (){
        tocaSom(idSom);
    }
    contador += 1;
}*/

//ao invés do while, posso usar o FOR, pq muitas vezes, não sabemos o tamanho de interações que precisamos fazer:

for (i=0; i < listaTeclas.length; i++){
    const tecla = listaTeclas[i];

    //o classList armazena uma lista com TODAS as classes desse elemento, neste caso é os buttons.
    const instrumento = tecla.classList[1];

    const idSom = `#som_${instrumento}`;
    
    tecla.onclick = function (){
        tocaSom(idSom);
    }

    //pra quando eu precionar o botão do meu teclado pra baixo, ficar em vermelho:
    tecla.onkeydown = function(evento){
        
        if (evento.code === 'Space' || evento.code === 'Enter'){
            
            //adiciona o etilo lá do meu css:
            tecla.classList.add('ativa');
            //tentei usar o toggle, deu e não deu.
        }

    }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}

