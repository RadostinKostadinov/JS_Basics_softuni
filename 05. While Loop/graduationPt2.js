function solve(massive){
    let name = massive[0];
    let yearOfStudy = 1;
    let avgGrade = 0;
    let excluding = 0;
    let i = 1;


    while(yearOfStudy <= 12){
        if(+massive[i] >= 4){
            avgGrade += +massive[i];
            yearOfStudy += 1;
        }else{
            excluding += 1;
        }
        if(excluding >= 2){
            console.log(`${name} has been excluded at ${yearOfStudy} grade`)
            break;
        }
        i++;
    }

    if(excluding < 2){
        console.log(`${name} graduated. Average grade: ${(avgGrade / (yearOfStudy - 1)).toFixed(2)}`)
    }

}
solve(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])
