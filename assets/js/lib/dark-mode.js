function setDarkMode() {
    if (window.document.body.getAttribute("data-theme")) {
        window.localStorage.setItem('theme', window.document.body.getAttribute("data-theme"));
    }
    if (window.document.body.getAttribute("data-theme") == "dark") {
        window.document.querySelector("#dark-mode").innerHTML = "brightness_high";
    } else {
        window.document.querySelector("#dark-mode").innerHTML = "brightness_low";
    }
}

if (window.localStorage.getItem('theme')) {
    window.document.body.setAttribute("data-theme", window.localStorage.getItem("theme"));
}

setDarkMode();
document.getElementById("dark-mode").addEventListener("click", function () {
    if (window.document.body.getAttribute("data-theme") != "dark") {
        window.document.body.setAttribute("data-theme", "dark");
    } else {
        window.document.body.setAttribute("data-theme", "light");
    }
    setDarkMode();
});
