// Declaration
var plusBtns = Array.from(document.querySelectorAll(".fa-plus-circle"));
var minusBtns = Array.from(document.querySelectorAll(".fa-minus-circle"));
var deleteBtns = Array.from(document.querySelectorAll(".fa-trash-alt"));
var cards = Array.from(document.querySelectorAll(".card"));
var heartBtns = Array.from(document.querySelectorAll(".fa-heart"));

// Add button
for (let plus of plusBtns) {
	plus.addEventListener("click", function () {
		plus.nextElementSibling.innerHTML++;
		total();
	});
}

// Minus button
for (let minus of minusBtns) {
	minus.addEventListener("click", function () {
		minus.previousElementSibling.innerHTML > 0
			? minus.previousElementSibling.innerHTML--
			: null;
		total();
	});
}

//Remove button
for (let i in deleteBtns) {
	deleteBtns[i].addEventListener("click", function () {
		cards[i].remove();
		total();
	});
}

// Total price
function total() {
	let qte = Array.from(document.querySelectorAll(".qute"));
	let price = Array.from(document.querySelectorAll(".unitt-price"));
	let s = 0;
	for (let i = 0; i < price.length; i++) {
		s = s + price[i].innerHTML * qte[i].innerHTML;
	}
	document.getElementById("total-price").innerHTML = s;
}

// heart button
for (let heart of heartBtns) {
	let pair=0
	heart.addEventListener("click", function () {
		pair%2===0 
		? heart.style.color = 'red'
		: heart.style.color = 'black';
		pair=pair+1;
	});
}