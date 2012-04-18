function Menu(id, name) {
	this.id = id;
	this.name = name;
	this.menuItems = [];
}

Menu.prototype.add = function (menuItem) {
	this.menuItems.push(new Menu(menuItem.id, menuItem.name));
};

// http://www.openjs.com/scripts/data/json_encode.php
Menu.prototype.toJSON = function () {
	var itemsJson = [];
	for(var i=0; i < this.menuItems.length; i++) {
		var menuItemJson = 	'{' +
			'"id": '+ this.menuItems[i].id +','+
			'"name": "'+ this.menuItems[i].name +'"'
		+'}';

		itemsJson.push(menuItemJson);
	}

	var json = itemsJson.join(",");
	return JSON.parse('['+ json +']');
};
