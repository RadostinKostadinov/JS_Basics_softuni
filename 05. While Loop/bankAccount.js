function solve(massive) {
    let i = 0;
    let totalMoney = 0;
    while (massive[i] !== 'NoMoreMoney') {
        if (massive[i] < 0) {
            console.log(`Invalid operation!`);
            break;
        }
        totalMoney += +massive[i];
        console.log(`Increase: ${(+massive[i]).toFixed(2)}`)
        i++;
      
    }
    console.log(`Total: ${totalMoney.toFixed(2)}`);
}