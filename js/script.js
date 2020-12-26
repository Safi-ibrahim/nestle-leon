// loader
window.addEventListener("load", () => {
    $(".loader").fadeOut('slow');
});
////////////
function lang_fun() {
    var a = document.getElementById("lang_box").className;
    var lang_opt =
        `<h1>عربي</h1>
    <h1>english</h1>
    <h1>كردي</h1>`;
    if (a == "lang_box_hide") {
        document.getElementById("lang_box").className = "lang_box";
        document.getElementById("lang_box").innerHTML = lang_opt;
    } else {
        document.getElementById("lang_box").className = "lang_box_hide";
        document.getElementById("lang_box").innerHTML = "";

    }
}

function menu_fun() {
    document.getElementById("sideBar").classList.remove("menu");
    document.getElementById("sideBar").classList.add("menu_js");

}

function exit_fun() {
    document.getElementById("sideBar").classList.remove("menu_js");
    document.getElementById("sideBar").classList.add("menu");
}