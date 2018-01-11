var slideNumber = 0;
var currentDesign = 1;
var modal;
var img;
var modalImg;
var captionText;
var span;


window.onload = function() {

	modal = document.getElementById("myModal");
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
	$("#addtobasket").click(function() {
		alert("Item has been added to basket");
	})

updateDesign();
}




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




function blackshirt() {
  document.getElementById("BlackShirt").style.display = "block";
	document.getElementById("WhiteShirt").style.display = "none";
	document.getElementById("RedShirt").style.display = "none";
	document.getElementById("BlueShirt").style.display = "none";
	currentShirtColor = "black";
}
function whiteshirt() {
  document.getElementById("BlackShirt").style.display = "none";
	document.getElementById("WhiteShirt").style.display = "block";
	document.getElementById("RedShirt").style.display = "none";
	document.getElementById("BlueShirt").style.display = "none";
	currentShirtColor = "white";
}
function redshirt() {
  document.getElementById("BlackShirt").style.display = "none";
	document.getElementById("WhiteShirt").style.display = "none";
	document.getElementById("RedShirt").style.display = "block";
	document.getElementById("BlueShirt").style.display = "none";
	currentShirtColor = "red";
}
function blueshirt() {
  document.getElementById("BlackShirt").style.display = "none";
	document.getElementById("WhiteShirt").style.display = "none";
	document.getElementById("RedShirt").style.display = "none";
	document.getElementById("BlueShirt").style.display = "block";
	currentShirtColor = "blue";
}




function nextCustomiser() {
    if(currentDesign == 3) {
        currentDesign = 1;
    } else {
        currentDesign++;
    }
    updateDesign();
}
function lastCustomiser() {
    if(currentDesign == 1) {
        currentDesign = 3;
    } else {
        currentDesign--;
    }
    updateDesign();
}
function updateDesign() {
    switch(currentDesign) {
        case 1:
            $("#customiserDesign").attr("src", "Assets/Logo.png");
            break;
        case 2:
            $("#customiserDesign").attr("src", "Assets/smash_mouth.png");
            break;
        case 3:
            $("#customiserDesign").attr("src", "Assets/smashmouthtshirt.png");
            break;
    }
};
