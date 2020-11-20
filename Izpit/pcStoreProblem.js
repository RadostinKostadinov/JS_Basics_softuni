function solve(processorPrice, videoPrice, ramPrice, numOfram, discount){
    processorPrice = +processorPrice;
    videoPrice = +videoPrice;
    ramPrice = +ramPrice;
    numOfram = +numOfram;
    discount = +discount;

    processorPrice = processorPrice * 1.57;
    videoPrice = videoPrice * 1.57;
    ramPrice = ramPrice * 1.57;
    ramPrice = ramPrice * numOfram; 

    processorPrice *= (1 - discount);
    videoPrice *= (1 - discount);
 
    let total = processorPrice + videoPrice + ramPrice;
    console.log(`Money needed - ${total.toFixed(2)} leva.`)

}
solve(500,
    200,
    80,
    2,
    0.05
    )