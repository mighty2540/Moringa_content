// I am a manager at Tamy imports. I have currently added the number of toyota models to 5 and maxda 5. The current inventory/stock is 30 toyota and 25 mazda. use object

const myCarYard = {
    toyota : 30,
    mazda  : 25,
};


for( let key in myCarYard){
    myCarYard[key] += 5;
    console.log(`${key} : ${myCarYard[key]}`)
}

//console.log(myCarYard);