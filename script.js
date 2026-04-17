
document.addEventListener("DOMContentLoaded", function() {
    let currentUrl = window.location.href;
    let menuLinks = document.querySelectorAll(".nav-menu a");
    let foundActive = false;

    for (let i = 0; i < menuLinks.length; i++) {
        let linkHref = menuLinks[i].getAttribute("href");
        if (currentUrl.includes(linkHref) && linkHref !== "") {
            menuLinks[i].classList.add("active-tab");
            foundActive = true;
        }
    }

    if (!foundActive && menuLinks.length > 0) {
        menuLinks[0].classList.add("active-tab");
    }

    let menuBtn = document.getElementById("menuBtn");
    let sidebar = document.getElementById("sidebar");

    if (menuBtn && sidebar) {
        menuBtn.addEventListener("click", function() {
            sidebar.classList.toggle("open");
        });
    }
});

