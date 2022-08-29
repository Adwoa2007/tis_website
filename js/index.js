// change navbar style on scroll

window.addEventListener('scroll', ()=>{
    
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 100);
})

// scroll to top
const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // for smoothly scrolling
            });
        };

// show/hide navbar for smaller screens
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () =>{
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

closeBtn.addEventListener('click', () =>{
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
})