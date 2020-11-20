function solve(money, months){
    money = +money;
    let moneyP = +money;
    let moneyS = +money;
    months = +months;

    for(let i = 0; i < months; i++){
        moneyP += money * 0.03;
        moneyS += moneyS * 0.027;
    }

    console.log(`Simple interest rate: ${moneyP.toFixed(2)} lv.`);
    console.log(`Complex interest rate: ${moneyS.toFixed(2)} lv.`);
    if(moneyP > moneyS){
        console.log(`Choose a simple interest rate. You will win ${(moneyP - moneyS).toFixed(2)} lv.`)
    } else {
        console.log(`Choose a complex interest rate. You will win ${(moneyS - moneyP).toFixed(2)} lv.`)
    }


}
solve(50555.50,
    36
    )