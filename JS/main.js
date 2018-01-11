var slideNumber = 0;
var currentDesign = 1;
var modal;
var img;
var modalImg;
var captionText;
var span;
var local_basket = [];
var currentShirtColour = "Black";


window.onload = function() {

	modal = document.getElementById("myModal");
	modalImg = document.getElementById("modalImage");
	captionText = document.getElementById("caption");

	showSlides(slideNumber);

	if(localStorage.getItem("basket")) {
		local_basket = JSON.parse(localStorage.getItem("basket"));
	}
	else {
	}

	$("#addtobasket").click(function () {
	  var currentShirt = {"design": currentDesign, "colour": currentShirtColour, "price": "$14.99"};
		local_basket.push(currentShirt);
		localStorage.setItem("basket", JSON.stringify(local_basket));
		updateBasketTable();
	});

	updateBasketTable();

	$(document).on("click", "a.removeItem", function(event) {
		var itemno = event.target.id.split("-")[1];
		local_basket.splice(itemno, 1);
		localStorage.setItem("basket", JSON.stringify(local_basket));
		updateBasketTable();
	});

	$("#checkout").click(function() {
		var itemno = event.target.id.split("-")[1];
		if (local_basket < [1] ) {
			alert("There are no items in your basket");
		}
		else {
			local_basket.splice(itemno, 999);
			localStorage.setItem("basket", JSON.stringify(local_basket));
			updateBasketTable();
			alert("Items have been paid for and delivered to your location");
		}
	});

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




function updateBasketTable() {
	if(localStorage.getItem("basket") == null) {
		$("#basket").html("<tr id=\"basketHeaders\"><th style=\"width: 25%\">Design</th><th style=\"width: 25%\">Colour</th><th style=\"width: 25%\">Price</th><th style=\"width: 25%\">Remove Items</th></tr><tr><td colspan=\"4\">No items in your basket!</td></tr>");
	}
	else {
		var basket = local_basket;
		$("#basket").html("<tr id=\"basketHeaders\"><th style=\"width: 25%\">Design</th><th style=\"width: 25%\">Colour</th><th style=\"width: 25%\">Price</th><th style=\"width: 25%\">Remove Items</th></tr>");
		console.log(basket);
		for(var i = 0; i < basket.length; i++) {
			$("#basket").append("<tr><td>" + basket[i].design + "</td><td>" + basket[i].colour + "</td><td>" + basket[i].price + "</td><td><a class=\"removeItem\" id=\"item-"+ i +"\">Remove</a></td></tr>");
		}
	}
}




function blackshirt() {
  document.getElementById("BlackShirt").style.display = "block";
	document.getElementById("WhiteShirt").style.display = "none";
	document.getElementById("RedShirt").style.display = "none";
	document.getElementById("BlueShirt").style.display = "none";
	currentShirtColour = "Black";
}
function whiteshirt() {
  document.getElementById("BlackShirt").style.display = "none";
	document.getElementById("WhiteShirt").style.display = "block";
	document.getElementById("RedShirt").style.display = "none";
	document.getElementById("BlueShirt").style.display = "none";
	currentShirtColour = "White";
}
function redshirt() {
  document.getElementById("BlackShirt").style.display = "none";
	document.getElementById("WhiteShirt").style.display = "none";
	document.getElementById("RedShirt").style.display = "block";
	document.getElementById("BlueShirt").style.display = "none";
	currentShirtColour = "Red";
}
function blueshirt() {
  document.getElementById("BlackShirt").style.display = "none";
	document.getElementById("WhiteShirt").style.display = "none";
	document.getElementById("RedShirt").style.display = "none";
	document.getElementById("BlueShirt").style.display = "block";
	currentShirtColour = "Blue";
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
