// In this example, a software engineer at an e-commerce company is tasked with automating inventory updates after each sale. Manually adjusting stock levels is time-consuming and prone to errors. 

//Array looping provides an efficient, scalable solution to process sales data, ensuring inventory levels are always accurate and up to date.


let sales = [
    {item: `widget`, qty: 2},
    {item: `gadget`, qty: 5}
];

let inventory = {
    widget : 100,
    gadget: 50
};


let i = 0;

while (i < sales.length) {
    let sale = sales[i];
    inventory[sale.item] -= sale.qty;
    i++;
}

console.log(inventory);