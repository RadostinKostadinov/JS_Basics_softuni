function solve(bitcoins, chineseYoan, comission){
    bitcoins = +bitcoins;
    chineseYoan = +chineseYoan;
    comission = +comission;

    bitcoins = bitcoins * 1168;
    chineseYoan = chineseYoan * 0.15;
    chineseYoan = chineseYoan * 1.76;
    let total = chineseYoan + bitcoins;
    total /= 1.95;
    total = total - ((total * comission) / 100);


    console.log(total.toFixed(2));
}

solve(20,5678,2.4);