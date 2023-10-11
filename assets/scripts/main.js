let domain = 'https://animalderuacg.vercel.app/';

let cookieConfig = {
  title: "Aviso de Cookies 🍪",
  description: "Este site utiliza cookies para garantir que você obtenha a melhor experiência possível. Ao continuar a navegar neste site, você concorda com o uso de cookies. Para mais informações consulte nossa Política de Privacidade e Cookies.",
  link: '<a href="/pages/privacy-policy.html" target="_blank">Para que serve?</a>',
  button: "Entendi 👍"
};

let permited_scroll = true;

class Main {
  constructor() {
    this.initEvents();
    this.cookieConsent();
    this.correctYear();
    this.changeScroll();
  }

  initEvents() {
    document.querySelector(".logo").addEventListener("click", () => {
        window.location.href = domain;
    });

    document.getElementById("whatsappLink").addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById("inputBox").style.display = "block";
        this.changeScroll(false);
    });
}
  
  changeScroll(boolean = true) {
  if (!boolean) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto"; // ou "scroll" se desejar a barra de rolagem sempre visível
  }
}

  openFullscreen(element) {
    const imageSrc = element.src;
    document.getElementById('fullscreen-img').src = imageSrc;
    document.getElementById('fullscreen').style.display = 'block';
    this.changeScroll(false);
  }


  closeFullscreen(element) {
    console.log(element);
    document.getElementById(element).style.display = 'none';
    this.changeScroll();
  }


  activeMenu() {
    const x = document.getElementById("myNavbar");
    const logo = document.querySelector(".logo");
    const iconBar = document.querySelector(".icon-bar");

    if (x.className === "navbar") {
      x.className += " responsive";
      logo.classList.add("hide");
    } else {
      x.className = "navbar";
      logo.classList.remove("hide");
    }

    iconBar.classList.toggle("change");
  }

  correctYear() {
    document.querySelector("#year").innerText = new Date().getFullYear();
  }

  // Restante do seu código aqui...

  fadeIn(element, display) {
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

  fadeOut(element) {
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

  setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  getCookie(name) {
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

  cookieConsent() {
    if (!this.getCookie("purecookieDismiss")) {
      document.body.innerHTML +=
        '<div id="cookieConsentContainer" class="cookieConsentContainer">' +
        '<div class="cookieTitle"><span>' + cookieConfig.title + '</span></div>' +
        '<div class="cookieDesc"><p>' + cookieConfig.description + " " + cookieConfig.link + '</p></div>' +
        '<div class="cookieButton"><a onClick="main.purecookieDismiss();">' + cookieConfig.button + '</a></div>' +
        '</div>';
      this.fadeIn("cookieConsentContainer");
    }
  }

  purecookieDismiss() {
    this.setCookie("purecookieDismiss", "1", 7);
    this.fadeOut("cookieConsentContainer");
  }
}

const main = new Main();