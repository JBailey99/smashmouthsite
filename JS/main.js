var slideNumber = 0;

window.onload = function() {
	init();
	showSlides(slideNumber);
}

function init() {
	console.log("init fired");
}

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("gallerySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    slideNumber++;
    if (slideNumber > slides.length) {slideNumber = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideNumber - 1].style.display = "block";
    dots[slideNumber - 1].className += " active";
    setTimeout(showSlides, 10000);
}

jQuery(document).ready(function($) {
    $(".rowlink").click(function() {
        window.location = $(this).data("href");
    });
});
