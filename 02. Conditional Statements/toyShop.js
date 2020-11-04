function toyShop(excursionPrice, puzzlesCnt, talkingDollsCnt, teddyBearsCnt, minionsCnt, trucksCnt){
    excursionPrice = Number(excursionPrice);
    puzzlesCnt = Number(puzzlesCnt);
    talkingDollsCnt = Number(talkingDollsCnt);
    teddyBearsCnt = Number(teddyBearsCnt);
    minionsCnt = Number(minionsCnt);
    trucksCnt = Number(trucksCnt);

    let orderToysPrice = puzzlesCnt*2.60 + talkingDollsCnt*3 + teddyBearsCnt*4.10 + minionsCnt*8.20 + trucksCnt*2;
    let orderToysCnt = puzzlesCnt + talkingDollsCnt + teddyBearsCnt + minionsCnt + trucksCnt;

    if(orderToysCnt >= 50){
        orderToysPrice = orderToysPrice * 0.75;
    }

    let TotalProfit = orderToysPrice * 0.9;

    if(TotalProfit >= excursionPrice){
        let moneyLeft = TotalProfit - excursionPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        let moneyNeed = excursionPrice - TotalProfit;
        console.log(`Not enough money! ${moneyNeed.toFixed(2)} lv needed.`)
    }
}