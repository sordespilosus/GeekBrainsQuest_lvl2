var hamburger_size = ["small", "large"];
var hamburger_cost = [50, 100];
var hamburger_calories = [20, 40];

var stuffing_cheese = [10, 20];
var stuffing_salad = [20, 5];
var stuffing_potato = [15, 10];

var spice_topping = [15, 0];
var mayo_topping = [20, 5];

var hamburger = [];

var describe;

function HamCost() {
	let components = document.getElementsByClassName("component");
	let total_price = 0;
	let total_calories = 0;
	console.log(components);
	Array.from(components).forEach(component => {
		if(component.checked) {
			total_price += parseInt(component.dataset.price);
			total_calories += parseInt(component.dataset.calories);
		}
	});
	alert(`total price: ${total_price}\ntotal calories:${total_calories}`);
	return;
}


