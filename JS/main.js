var slideNumber = 0;
var modal;
var img;
var modalImg;
var captionText;
var span;


window.onload = function() {
	modal = document.getElementById('myModal');
	modalImg = document.getElementById("img01");
	captionText = document.getElementById("caption");

	showSlides(slideNumber);

	$(".mediaimages").click(function() {
		modal.style.display = "block";
		modalImg.src = this.src;
		captionText.innerHTML = this.alt;
	});

	$(".close").click(function() {
	modal.style.display = "none";
	});

	$(".rowlink").click(function() {
	window.location = $(this).data("href");
	});
};

function showSlides() {
    try {
		var i;
    var slides = document.getElementsByClassName("gallerySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    slideNumber++;
    if (slideNumber > slides.length) {
		slideNumber = 1;
	}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideNumber - 1].style.display = "block";
    dots[slideNumber - 1].className += " active";
    setTimeout(showSlides, 10000);
	}
	catch(err) {

		}
}
