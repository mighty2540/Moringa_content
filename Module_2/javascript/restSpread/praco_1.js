// spread - allows to break apart/ spread out elements.
//spread expands an array or object into one element

//spread helps combining multiple arrays into one

const featuredProducts = ["Laptop", "Headphones", "Smartwatch"];

const newArrivals = ["4k MOnitor", "Gaming", "Mouse"];

const onSaleProducts = ["Tablet", "wireless", "keyboard"];


const promotionalItem = "Giftcard";
// featuresProducts, newArrivals, onSaleProducts are merged into weeklyCatalog
const weeklyCatalog = [promotionalItem, ...featuredProducts, ...newArrivals, ...onSaleProducts];

console.log(weeklyCatalog);