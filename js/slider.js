function showSlide(n) {
    var i;
    var slides = document.getElementById("slider").getElementsByTagName("img");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[n - 1].style.display = "block";
}

var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var slides = document.getElementById("slider").getElementsByTagName("img");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(carousel, 5000);
}






