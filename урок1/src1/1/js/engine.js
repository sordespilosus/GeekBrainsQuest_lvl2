function Container()
{
  this.id = "";
  this.className = "";
  this.htmlCode = "123";
}

Container.prototype.render = function()
{
   return this.htmlCode;
}

Container.prototype.remove = function()
{
    var node = document.getElementsById(this.id);
	node.remove();
	return
}

function Menu(id, my_class, my_items){
   Container.call(this, id);
   this.id = id;
   this.className = my_class;
   this.items = my_items;
}

Menu.prototype = Object.create(Container.prototype);
Menu.prototype.constructor = Menu;

Menu.prototype.render = function(){
	var result = "<ul class='"+this.className+"' id='"+this.id+"'>";
	for(var item in this.items){
		if(this.items[item] instanceof MenuItem){
			result += this.items[item].render();
		}
	}
	result += "</ul>";
	return result;
}

function MenuItem(id, my_href, my_name){
   Container.call(this, id);
   this.id = id;
   this.href = my_href;
   this.itemName = my_name;
}

MenuItem.prototype = Object.create(Container.prototype);
MenuItem.prototype.constructor = MenuItem;

MenuItem.prototype.render = function(){
	return "<li id='"+this.id+"' href='"+ this.href +"'>" + this.itemName + "</li>";
}

var m_item1 = new MenuItem("my_id_1", "/", "Главная");
var m_item2 = new MenuItem("my_id_2", "/catalogue/", "Каталог");
var m_item3 = new MenuItem("my_id_3", "/gallery/", "Галерея");
var m_items = {0: m_item1, 1: m_item2, 2: m_item3};

var menu = new Menu("my_menu", "My_class", m_items);
var div = document.write(menu.render());