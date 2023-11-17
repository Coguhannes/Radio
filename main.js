function tocaSom(idElementAudio) {
    document.querySelector(idElementAudio).play();
}

cont listaDeTeclas = document.querySelectorAll(".Tecla")

for(let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listDeTeclas[contador];
    const efeito = tecla.classlist[1]
    const idAudio = `#som_${efeito}`;
    tecla.onclick = function() {
        tocaSom(idAudio);
    };
}