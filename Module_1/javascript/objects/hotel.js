let menuItem = {
};
menuItem.name = "Margherite pizza";
menuItem.price = 12.99;
menuItem.isAvailable = true;

menuItem["price"] = 14.99;
delete menuItem["isAvailable"]
console.log(menuItem);
