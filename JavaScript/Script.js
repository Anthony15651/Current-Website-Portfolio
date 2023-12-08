// window.onbeforeunload = function () {
//     window.scrollTo(0, 0);
// }

$(document).ready(function () {
    window.scrollTo(0,0);
});


window.onload=function() {
    // window.scrollTo(0, 0);
    const dropBtn = document.querySelector(".dropbtn");
    dropBtn.addEventListener("click", showMenu);

    function showMenu() {
        const menu = document.querySelector(".dropdown-content");
        if(menu.style.display == "block") {
            menu.style.display = "none";
        }
        else {
            menu.style.display = "block";
        }
    }
}