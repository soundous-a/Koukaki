// const { all } = require("axios");
// foce-child/js/script.js

document.addEventListener("DOMContentLoaded", function() {

    // *************** VIDÉO DE FOND *************** \\
    const banner = document.querySelector(".banner");
    const video_background = document.createElement("video");
    banner.prepend(video_background);
    if (window.innerWidth > 1000){
        video_background.src = "wp-content/themes/foce-child/src/video_koukaki.mp4";
        video_background.autoplay = true;
        video_background.muted = true;
        video_background.loop = true;
        video_background.classList.add("background_video");
        // On enlève l'image de fond SEULEMENT si la vidéo est chargée
        banner.style.backgroundImage = "none";
    }
    
    // Parallax
    const logo_to_remove = document.querySelector(".banner img");
    logo_to_remove.remove();
    const parallax_logo = document.createElement("div");
    const logo = document.createElement("img");
    logo.src = "http://koukaki.local/wp-content/themes/foce/assets/images/logo.png";
    parallax_logo.appendChild(logo);
    parallax_logo.classList.add("parallax_logo");
    logo.classList.add("logo-floating");
    document.querySelector(".banner").appendChild(parallax_logo);

    window.addEventListener("scroll", () => {
    const scrollValue = window.scrollY;
    parallax_logo.style.transform = `translateY(${scrollValue * 0.4}px)`;
});

    // *************** FADE-IN *************** \\
    const sections = document.querySelectorAll("section");
    for (let index = 0; index < sections.length; index++) {
        sections[index].classList.add("section__fadein");
    }

    // *************** TRANSITION H2 *************** \\
    let allH2 = document.querySelectorAll("h2");
    allH2.forEach(h2 => {
        let text = h2.textContent;
        h2.textContent = "";
        let span = document.createElement("span");
        span.classList.add("h2__text-base");
        span.textContent = text;
        h2.appendChild(span);
    });

    const option = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting)
                entry.target.querySelector(".h2__text-base").classList.add("h2__span");
        });
    }, option);
    allH2.forEach(h2 => observer.observe(h2));

    // *************** CARROUSEL *************** \\
    const elementToRemove = document.querySelectorAll("figure");
    for (let index = 0; index < elementToRemove.length; index++) {
        elementToRemove[index].remove();
    }
    const characters = [
        { "name": "Kawaneko",  "src": "http://koukaki.local/wp-content/uploads/2022/06/Kawaneko.png"    },
        { "name": "Orenjiiro", "src": "http://koukaki.local/wp-content/uploads/2022/06/Orenjiiro-1.png" },
        { "name": "Pinku",     "src": "http://koukaki.local/wp-content/uploads/2022/06/Pinku-1.png"     },
        { "name": "Tenshi",    "src": "http://koukaki.local/wp-content/uploads/2022/06/Tenshi-1.png"    },
        { "name": "Jaakuna",   "src": "http://koukaki.local/wp-content/uploads/2022/06/Jaakuna-1.png"   }
    ];
    const container = document.getElementById("characters");
    container.innerHTML = '';

    const swiperDiv = document.createElement("div");
    swiperDiv.className = "swiper mySwiper";

    const wrapper = document.createElement("div");
    wrapper.className = "swiper-wrapper";

    characters.forEach(char => {
        const slide = document.createElement("div");
        slide.className = "swiper-slide";
        slide.innerHTML = `
            <img src="${char.src}" alt="${char.name}">
            <p>${char.name}</p>
        `;
        wrapper.appendChild(slide);
    });

    swiperDiv.appendChild(wrapper);
    container.appendChild(swiperDiv);

    new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        loop: true,
        observer: true,
        observeParents: true,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
        },
        pagination: ".swiper-pagination",
    });

    // *************** NOUVELLE SECTION OSCAR *************** \\
    const new_article = document.createElement("article");
    new_article.classList.add("section__oscar__article");

    const new_h3_background = document.createElement("img");
    new_h3_background.classList.add("section__oscar__article__h3--background");
    new_h3_background.src = "http://koukaki.local/wp-content/uploads/2026/02/background_image_oscar.png";
    new_article.appendChild(new_h3_background);

    const new_h3 = document.createElement("h3");
    new_h3.classList.add("section__oscar__article__h3");
    new_h3.innerHTML = "Fleurs d'oranger & chats errants <br> est nominé aux Oscars Short <br> Film Animated de 2022 !";
    new_article.appendChild(new_h3);

    const new_image = document.createElement("img");
    new_image.classList.add("section__oscar__article__image");
    new_image.src = "http://koukaki.local/wp-content/uploads/2026/02/oscar_koukaki.png";
    new_article.appendChild(new_image);

    const new_section = document.createElement("section");
    new_section.classList.add("section__oscar");
    new_section.appendChild(new_article);

    document.querySelector("main").appendChild(new_section);

    // *************** EFFET SUR LES NUAGES *************** \\
    const little_cloud = document.createElement("img");
    little_cloud.classList.add("little_cloud");
    little_cloud.src = "http://koukaki.local/wp-content/uploads/2026/02/little_cloud.png";

    const big_cloud = document.createElement("img");
    big_cloud.classList.add("big_cloud");
    big_cloud.src = "http://koukaki.local/wp-content/uploads/2026/02/big_cloud.png";

    document.querySelector("#place").appendChild(little_cloud);
    document.querySelector("#place").appendChild(big_cloud);

// *************** BURGER *************** \\
document.querySelector(".main-navigation").remove();
document.querySelector(".site-header").innerHTML = `
    <h1>Fleurs d'orangers & chats errants</h1>
`;
const openBtn = document.createElement("span");
openBtn.classList.add("burgerBtn");
openBtn.innerHTML = `
    <span class="burgerBtn--style"></span>
    <span class="burgerBtn--style"></span>
    <span class="burgerBtn--style"></span>
`;
document.querySelector("header").appendChild(openBtn);

// Menu déroulant
const menu_deroulant = document.createElement("div");
menu_deroulant.classList.add("menu_deroulant");
menu_deroulant.innerHTML = `
    <img id="logo_menu" src="http://koukaki.local/wp-content/themes/foce/assets/images/logo.png">
    <img class="fleur_animation" id="fleur_orange" src="wp-content/themes/foce/assets/images/flower.png">
    <img class="fleur_animation" id="fleur_violette_gauche" src="wp-content/themes/foce/assets/images/orchid.png">
    <img class="fleur_animation" id="fleur_blanche" src="wp-content/themes/foce/assets/images/Sunflower.png">
    <img class="fleur_animation" id="random_flower" src="wp-content/themes/foce/assets/images/random_flower.png">
    <img class="fleur_animation" id="grande_fleur_orange" src="wp-content/themes/foce/assets/images/Hibiscus.png">
    <img class="chat_animation" id="chat_noir" src="http://koukaki.local/wp-content/uploads/2026/03/Group-180.png">
    <img class="chat_animation" id="chat_orange" src="http://koukaki.local/wp-content/uploads/2026/03/cat-1.png">
    <img class="chat_animation" id="chat_bleu" src="http://koukaki.local/wp-content/uploads/2026/03/cat.png">
    <nav>
    <ul>
        <li class="menu-items"><a href="#story">Histoire</a></li>
        <li class="menu-items"><a href="#characters">Personnages</a></li>
        <li class="menu-items"><a href="#place">Lieu</a></li>
        <li class="menu-items"><a href="#studio">Studio Koukaki</a></li>
        <p>STUDIO KOUKAKI</p>
        </ul>
    </nav>
`;
document.documentElement.appendChild(menu_deroulant);
openBtn.addEventListener("click", () => {
    menu_deroulant.classList.add("menu_open");
    document.body.classList.add("no-scroll");
    openBtn.innerHTML = `<span id="x">✕</span>`;

    const x = document.getElementById("x");
    x.addEventListener("click", (event) => {
        event.stopPropagation(); 
        openBtn.innerHTML = `
            <span class="burgerBtn--style"></span>
            <span class="burgerBtn--style"></span>
            <span class="burgerBtn--style"></span>
        `;
        menu_deroulant.classList.remove("menu_open");
        document.body.classList.remove("no-scroll");
    });
});

const ancres = menu_deroulant.querySelectorAll(".menu-items");
ancres.forEach(ancre => {
    ancre.addEventListener("click", () => {
        openBtn.innerHTML = `
            <span class="burgerBtn--style"></span>
            <span class="burgerBtn--style"></span>
            <span class="burgerBtn--style"></span>
        `;
        menu_deroulant.classList.remove("menu_open");
        document.body.classList.remove("no-scroll");
    });
}); 
});