function solve(record, distance, secondsPerMeter) {
    record = Number(record);
    distance = Number(distance);
    secondsPerMeter = Number(secondsPerMeter);


    let waterResistance = distance / 15;
    waterResistance = Math.floor(waterResistance);
    waterResistance *= 12.5;



    let result = (distance * secondsPerMeter) + waterResistance;

    if (record > result) {
        console.log(`Yes, he succeeded! The new world record is ${result.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(result - record).toFixed(2)} seconds slower.`)

    }
}
solve("55555.67",
    "3017",
    "5.03")
