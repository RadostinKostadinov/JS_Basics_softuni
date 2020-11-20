function solve(massive){

    let steps = 0;
    let i = 0;

    while(massive[i] !== "Going home" && massive[i] !== undefined){
        steps += +massive[i];
        i++;
    }

    if(massive[i] === "Going home") steps += +massive[i+1];

    if(steps < 10000){
        console.log(`${10000 - steps} more steps to reach goal.`);
    } else if(steps >= 10000){
        console.log(`Goal reached! Good job!`);
        console.log(`${steps - 10000} steps over the goal!`);
    }
}

solve(["1500",
"300",
"2500",
"3000",
"Going home",
"200"])
