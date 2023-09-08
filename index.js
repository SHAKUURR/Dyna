"use strict";
const header = document.querySelector(".nav-section");
const elements = document.querySelector(".nav-list");
const menu = document.querySelectorAll(".nav-link");
const icon = document.querySelector("#menu-icon i");

menu.forEach((element) => {
	element.addEventListener("click", () => {
		elements.classList.toggle("active");
		icon.classList.toggle("active");
	});
});

//Animation on scroll........................
ScrollReveal({ distance: "60px", duration: 2000, delay: 400 });

ScrollReveal().reveal(".hero, .about, .automate, .trade, .provide", {
	delay: 110,
	origin: "bottom",
	interval: 500,
	duration: 2200,
});

const trade = document.querySelector(".trade-img");
const provide = document.querySelector(".provide-img");

const webpage = function (e) {
	e.preventDefault();
	// window.location.href = "https://dynaswap.app/";
	window.open("https://dynaswap.app/", "_blank");
};

provide.addEventListener("click", webpage);
trade.addEventListener("click", webpage);
