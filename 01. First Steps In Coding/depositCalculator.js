function depCalc(arg1, arg2, arg3){
    let depositedSum = Number(arg1);
    let numberOfMonths = Number(arg2);
    let interestRate = Number(arg3);
    let interestForOneMonth = ((depositedSum*interestRate)/100) / 12;
    let FinalSum = depositedSum + (numberOfMonths*interestForOneMonth)
    console.log(FinalSum);
}

depCalc("200", "3", "5.7");