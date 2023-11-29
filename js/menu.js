function toggleNav() {
    var menu = document.getElementById("menu");
    var main = document.getElementById("main");

    if (menu.style.width === "250px") {
        menu.style.width = "0";
        main.style.marginLeft = "0";
        document.querySelector('.openbtn').style.display = 'block';
        document.querySelector('.closebtn').style.display = 'none';
    } else {
        menu.style.width = "250px";
        main.style.marginLeft = "250px";
        document.querySelector('.openbtn').style.display = 'none';
        document.querySelector('.closebtn').style.display = 'block';
    }
}