function solve(massive){
    let allowedMistakes = +massive[0];
    let i = 1;
    let sum = 0;
    let isBreaking = false;
    let lastTask;
    let numberOfTasks = 0;
    let mistakes = 0;

    while(massive[i] !== "Enough"){
        lastTask = massive[i];
        numberOfTasks += 1;

        if(+massive[i+1] <= 4){
            mistakes += 1;
        }
        if(mistakes === allowedMistakes){
            console.log(`You need a break, ${mistakes} poor grades.`);
            isBreaking = true;
            break;
        }
        sum += +massive[i+1]
        i+=2;
    }
    if(!isBreaking){
        console.log(`Average score: ${(sum / numberOfTasks).toFixed(2)}`)
        console.log(`Number of problems: ${numberOfTasks}`);
        console.log(`Last problem: ${lastTask}`);
    }
}
solve(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])
