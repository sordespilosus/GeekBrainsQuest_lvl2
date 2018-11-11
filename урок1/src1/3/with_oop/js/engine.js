var Bread = {
  Small: {
    price: 50,
    calories: 20
  },
  Large: {
    price: 100,
    calories: 40
  }
}

var Topping = {
  Mayo: {
    name: "Mayo",
    price: 20,
    calories: 5
  },
  Spice: {
    name: "Spice",
    price: 15,
    calories: 0
  }
}

var Stuffing = {
  Cheese: {
    name: "Cheese",
    price: 10,
    calories: 20
  },
  Salad: {
    name: "Salad",
    price: 20,
    calories: 5
  },
  Potato: {
    Potato: "Potato",
    price: 15,
    calories: 10
  }
}

/**
* Класс, объекты которого описывают параметры гамбургера. 
* 
* @constructor
* @param size        Размер
* @param stuffing    Начинка
* @throws {HamburgerException}  При неправильном использовании
*/
function Hamburger(size, stuffing) {
  this.size = Bread.Small;
  this.toppings = [];
  this.stuffing = [];
  this.stuffing.push(stuffing);
} 

/**
* Добавить добавку к гамбургеру. Можно добавить несколько
* добавок, при условии, что они разные.
* 
* @param topping     Тип добавки
* @throws {HamburgerException}  При неправильном использовании
*/
Hamburger.prototype.addTopping = function (topping) {
  this.toppings.forEach(t => {
    if ( t.name === topping.name ) {
      throw new HamburgerException("Topping already added");
    };
  });
  this.toppings.push(topping);
}


/**
 * Убрать добавку, при условии, что она ранее была 
 * добавлена.
 * 
 * @param topping   Тип добавки
 * @throws {HamburgerException}  При неправильном использовании
 */
Hamburger.prototype.removeTopping = function (topping) {
  let idx = this.toppings.indexOf(topping);
  if(idx === -1)
    throw new HamburgerException("Topping not found");
  this.toppings.splice(idx, 1);
}


/**
 * Получить список добавок.
 *
 * @return {Array} Массив добавленных добавок, содержит константы
 *                 Hamburger.TOPPING_*
 */
Hamburger.prototype.getToppings = function () {
  return this.toppings;
}


/**
 * Узнать размер гамбургера
 */
Hamburger.prototype.getSize = function () {
  return this.size;
}


/**
 * Узнать калорийность
 * @return {Number} Калорийность в калориях
 */
Hamburger.prototype.calculateCalories = function () {
  let calories = this.size.calories;
  this.stuffing.forEach(s => {
    calories += s.calories;
  });
  this.toppings.forEach(t => {
    calories += t.calories;
  });
  return calories;
}

Hamburger.prototype.calculatePrice = function () {
  let price = this.size.price;
  this.stuffing.forEach(s => {
    price += s.price;
  });
  this.toppings.forEach(t => {
    price += t.price;
  });
  return price;
}


/**
 * Представляет информацию об ошибке в ходе работы с гамбургером. 
 * Подробности хранятся в свойстве message.
 * @constructor 
 */
function HamburgerException (message) { 
  this.message = message;
}
