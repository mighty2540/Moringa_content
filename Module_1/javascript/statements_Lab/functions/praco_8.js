// function result grades

function calculateGrade(examScore){
    let  letterGrade;
if( examScore >= 90){
    letterGrade = "A";
} else if( examScore >= 80){
    letterGrade = "B";
} else if ( examScore >= 70){
    letterGrade = "C";
} else if ( examScore >= 60){
    letterGrade = "D";
} else{
    letterGrade = "F";
}

return letterGrade;
}

console.log("The grade of student is", calculateGrade(85));