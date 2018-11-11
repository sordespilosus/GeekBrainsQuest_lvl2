var hamburger_size = ["small", "large"];
var hamburger_cost = [50, 100];
var hamburger_calories = [20, 40];

var stuffing_cheese = [10, 20];
var stuffing_salad = [20, 5];
var stuffing_potato = [15, 10];

var spice_topping = [15, 0];
var mayo_topping = [20, 5];

var hamburger = [];

var total_cost = 0;
var total_calories = 0;
var describe;

function HamCost() {
	var size = document.getElementsByName('size');
	if (size[0].checked) {
		total_cost = 50;
		total_calories = 20;
	} else if (size[1].checked) {
		total_cost = 100;
		total_calories = 40;
	} else {
		alert('Не выбран размер гамбургера!');
	}

	var stuffing = document.getElementsByName('stuffing');
	if (stuffing[0].checked) {
		total_cost = total_cost + 10;
		total_calories = total_calories + 20;
	} else if (stuffing[1].checked) {
		total_cost = total_cost + 20;
		total_calories = total_calories + 5;
	} else if (stuffing[2].checked) {
		total_cost = total_cost + 15;
		total_calories = total_calories + 10;
	} else {
		alert('Не выбрана начинка!');
	}

	var topping = document.getElementsByName('topping');
	if (topping[0].checked) {
		total_cost = total_cost + 15;
		total_calories = total_calories;
	} else if (topping[1].checked) {
		total_cost = total_cost + 20;
		total_calories = total_calories + 5;
	} else {
		alert('Не выбрана добавка!');
	}

	

	return;
}


