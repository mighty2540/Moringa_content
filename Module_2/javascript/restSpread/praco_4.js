// rest

// function add(a,b){
//     return a + b;
// }

// console.log(10,20);

// if you dont know how many numbers the user will provide. This is where rest syntax becomes useful


// 


// function add(...numbers){
//     console.log(numbers);
// }
// add(10,20,30,40,50);






// function calculateAverage(...scores) {

//     const total = scores.reduce((sum,score)=> sum +score, 0);
//     return total / scores.length;
        
// }
//     console.log(calculateAverage(4,5,3));
//     console.log(calculateAverage(5,5,5,4));

//     //console.log(calculateAverage());


function add(...num){
    console.log(num);
}

add(10,20)