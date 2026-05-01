document.addEventListener("DOMContentLoaded", function() {
    let currentUrl_ = window.location.href;\
    let currentUrl= currentUrl_.substring(0, currentUrl_.lastIndexOf('.'));
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
