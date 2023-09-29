// Script para tornar o menu responsivo

function activeMenu() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
    // Adicionar classe 'change' para animar o ícone de hambúrguer
    var iconBar = document.querySelector(".icon-bar");
    iconBar.classList.toggle("change");
}

function toggleZoom(image) {
    var images = document.querySelectorAll(".square-image"); // Obtém todas as imagens

    // Remove a classe de zoom e adiciona a classe de desfoque em todas as imagens
    for (var i = 0; i < images.length; i++) {
        if (images[i] !== image) {
            images[i].classList.remove("zoomed");
            images[i].classList.add("blurred");
        }
    }

    // Adiciona a classe de zoom na imagem clicada
    image.classList.toggle("zoomed");
}
