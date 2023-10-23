const imagens = document.querySelectorAll(".slide");
const setaVoltar = document.getElementById("seta-voltar");
const setaAvancar = document.getElementById("seta-avancar");

let imagemAtual = 0;

setaAvancar.addEventListener("click", function(){

    if (imagemAtual === imagens.length - 1){
        return;
    }

    esconderImagemAberta();

    imagemAtual++;

    imagens[imagemAtual].classList.add("mostrar");
    

    mostrarOuEsconderSetas();

});

setaVoltar.addEventListener("click", function(){

    if( imagemAtual === 0){
        return;
    }

    esconderImagemAberta();

    imagemAtual--;

     imagens [imagemAtual].classList.add("mostrar");
     

    mostrarOuEsconderSetas();
});

function esconderImagemAberta(){
    const ImagemAberta = document.querySelector(".mostrar");
    ImagemAberta.classList.remove("mostrar");
}

function mostrarOuEsconderSetas(){
    const naoEhAPrimeiraImagem = imagemAtual !== 0;
    if (naoEhAPrimeiraImagem){
        setaVoltar.classList.remove("opacidade");
    } else{
        setaAvancar.classList.add("opacidade")
    }

    const ehAUltimaImagem = imagemAtual !== 0 && imagemAtual === imagens.length -1 
    if(ehAUltimaImagem){
        setaAvancar.classList.add("opacidade")
    } else{
        setaAvancar.classList.remove("opacidade")
    }
}