document.querySelector(".logo").addEventListener("click", ()=> {
  window.location.href="..,index.html"
});

function activeMenu() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
        x.className += " responsive";
        // Adicione a classe 'hide' para esconder a logo quando o menu está aberto
        document.querySelector(".logo").classList.add("hide");
    } else {
        x.className = "navbar";
        // Remova a classe 'hide' para mostrar a logo quando o menu é recolhido
        document.querySelector(".logo").classList.remove("hide");
    }
    // Adicionar classe 'change' para animar o ícone de hambúrguer
    var iconBar = document.querySelector(".icon-bar");
    iconBar.classList.toggle("change");
}

// Função para alternar o zoom das imagens
function toggleZoom(image) {
    var images = document.querySelectorAll(".square-image");

    // Remover a classe de zoom e adicionar a classe de desfoque em todas as imagens, exceto na imagem clicada
    images.forEach(function (img) {
        if (img !== image) {
            img.classList.remove("zoomed");
            img.classList.add("blurred");
        }
    });

    // Alternar a classe de zoom na imagem clicada
    image.classList.toggle("zoomed");
}

// Configuração para exibição do aviso de cookies
let cookieConfig = {
    title: "Aviso de Cookies 🍪",
    description: "Este site utiliza cookies para garantir que você obtenha a melhor experiência possível. Ao continuar a navegar neste site, você concorda com o uso de cookies. Para mais informações consulte nossa Política de Privacidade e Cookies.",
    link: '<a href="/pages/privacy-policy.html" target="_blank">Para que serve?</a>',
    button: "Entendi 👍"
};

function fadeIn(element, display) {
    var el = document.getElementById(element);
    el.style.opacity = 0;
    el.style.display = display || "block";

    (function fade() {
        var opacity = parseFloat(el.style.opacity);
        if ((opacity += 0.02) > 1) {
            return;
        }
        el.style.opacity = opacity;
        requestAnimationFrame(fade);
    })();
}

function fadeOut(element) {
    var el = document.getElementById(element);
    el.style.opacity = 1;

    (function fade() {
        if ((el.style.opacity -= 0.02) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var cookieName = name + "=";
    var cookieArray = document.cookie.split(";");
    for (var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i];
        while (cookie.charAt(0) === " ") {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return null;
}

function cookieConsent() {
    if (!getCookie("purecookieDismiss")) {
        document.body.innerHTML +=
            '<div id="cookieConsentContainer" class="cookieConsentContainer">' +
            '<div class="cookieTitle"><a>' + cookieConfig.title + '</a></div>' +
            '<div class="cookieDesc"><p>' + cookieConfig.description + " " + cookieConfig.link + '</p></div>' +
            '<div class="cookieButton"><a onClick="purecookieDismiss();">' + cookieConfig.button + '</a></div>' +
            '</div>';
        fadeIn("cookieConsentContainer");
    }
}

function purecookieDismiss() {
    setCookie("purecookieDismiss", "1", 7);
    fadeOut("cookieConsentContainer");
}

window.onload = function () {
    cookieConsent();
};
