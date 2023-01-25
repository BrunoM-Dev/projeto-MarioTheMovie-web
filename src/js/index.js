const botaoFecharModal = document.querySelector(".fechar-modal");
const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");

/* 1 - ABRINDO MODAL */

// identificando qnd o usuario clicar no botao
botaoTrailer.addEventListener("click", () => 
{
    // abrindo modal na tela
    modal.classList.add("aberto");
    // adicionando link do src
    video.setAttribute("src", "https://www.youtube.com/embed/Cb4WV4aXBpk");
}
);


/* 2 - FECHANDO MODAL */

// identificando qnd o usuario clicar no botao
botaoFecharModal.addEventListener("click", () =>
{
    // fechando modal na tela
    modal.classList.remove("aberto");
    // removendo link do src
    video.setAttribute("src", "");
}
)








