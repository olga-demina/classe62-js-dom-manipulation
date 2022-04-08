// Al click del hamburger button aggiungo la classe active al div.hamburger-menu
const hamburgerOpenBtn = document.querySelector(".header-right > a");
console.log(hamburgerOpenBtn);

const menu = document.querySelector(".hamburger-menu");

hamburgerOpenBtn.addEventListener("click", 
    function() {
        menu.classList.add("active");
    }
);


// Al click del button close tolgo la classe active dal div.hamburger-menu
const hamburgerCloseBtn = document.querySelector(".hamburger-menu .close");
console.log(hamburgerCloseBtn);

hamburgerCloseBtn.addEventListener("click",
    function() {
        menu.classList.remove("active");
    }
);