function tocaSom(idElementAudio) {
    document.querySelector(idElementAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//01-11-2023- lista numerada
let contador = 0;

//enquanto
while (contador < listaDeTeclas.length) {
  
  conaole.log(instrumento) 
   
    const instrumento = listaDeTeclas[contador].classList[1];
    listaDeTeclas[contador].classList[1];

    listaDeTeclas[contador].onclick = function () {
        tocaSom('#som_tecla_pom')
    }
    contador = contador + 1;

    console.log(contador);
}