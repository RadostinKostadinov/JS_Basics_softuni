function travelling(massive){
    let destination = massive[0];
    let moneyNeeded = +massive[1];
    let totalSum = 0;


    let masIndex = 2;
    
    while(massive[masIndex] !== undefined){
        let isNumber = isNaN(massive[masIndex]);
        if(!isNumber){
            totalSum += +massive[masIndex];
        } else if(isNumber){
            console.log(`Going to ${destination}!`);
            destination = massive[masIndex];
            totalSum -= moneyNeeded;
            moneyNeeded = +massive[masIndex + 1];
            masIndex++;
        }
        masIndex++;
    }


}
travelling(["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"])
;