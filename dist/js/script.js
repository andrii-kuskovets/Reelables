let mobileMenu = document.querySelector('.menu-desktop');
let btn = document.querySelector('.header__btn');

let itemMenu = document.getElementsByClassName("list__multi");
let itemMenuFooter = document.getElementsByClassName("footer__item");
let i;
function openMenu() {
    btn.classList.toggle('active');
    mobileMenu.classList.toggle('menu-desktop__active');
}

function openActiveItem(item) {
    for (i = 0; i < item.length; i++) {
        item[i].addEventListener("click", function() {
            let parent = this.parentElement;
            parent.classList.toggle("active");
            this.classList.toggle("active");
            let panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
}

openActiveItem(itemMenu);
openActiveItem(itemMenuFooter);
