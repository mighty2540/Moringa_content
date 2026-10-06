// continue => does not stop the loop

const numbers = [ 10, 20, 30, 40, 50];


for( let i = 0; i < numbers.length; i++){
    if(numbers[i] === 40){
        continue;

    }

    console.log(numbers[i]);
}