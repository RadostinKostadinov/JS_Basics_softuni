function solve(massive){
    num1 = +massive[0];
    num2 = +massive[1];
    num3 = +massive[2];
    let isReady = false;
    let combinations = 0;

    for(let i = num1; i <= num2; i++){
        for(let j = num1; j <= num2; j++){
            let sum = i + j
            combinations++;
            if(sum === num3){
                console.log(`Combination N:${combinations} (${i} + ${j} = ${num3})`);
                isReady = true;
                break;
            }
        }
        if(isReady){
            break;
        }
    }
    if(!isReady){
        console.log(`${combinations} combinations - neither equals ${num3}`)
    }
}
solve([23,
24,
20]);