function solve(age, price, toyPrice) {
    age = Number(age);
    price = Number(price);
    toyPirce = Number(toyPrice);

    let numberOfToys = 0;
    let helpPlus = 0;
    let sumYears = 0;
    for (i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            helpPlus += 10;
            sumYears += helpPlus;
            sumYears -= 1;
        } else {
            numberOfToys += 1;
        }
    }

    sumYears += (numberOfToys * toyPrice);

    let result = Math.abs(sumYears - price);

    if (sumYears >= price) {
        console.log(`Yes! ${result.toFixed(2)}`);
    } else {
        console.log(`No! ${result.toFixed(2)}`);
    }

}
solve("10", "170", "6");