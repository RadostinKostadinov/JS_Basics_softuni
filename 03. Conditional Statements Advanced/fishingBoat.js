function solve(budget, season, numberOfPeople) {
    budget = Number(budget);
    numberOfPeople = Number(numberOfPeople);

    let boatPrice = 0;

    switch (season) {
        case "Spring":
            boatPrice += 3000;
            break;
        case "Summer":
            boatPrice += 4200;
            break;
        case "Autumn":
            boatPrice += 4200;
            break;
        case "Winter":
            boatPrice += 2600;
            break;
    }

    if (numberOfPeople <= 6) {
        boatPrice = boatPrice * 0.90;
    } else if (numberOfPeople > 6 && numberOfPeople <= 11) {
        boatPrice = boatPrice * 0.85;
    } else if (numberOfPeople > 12) {
        boatPrice = boatPrice * 0.75;
    }

    if ((numberOfPeople % 2 === 0) && (season !== "Autumn")) {
        boatPrice *= 0.95;
    }

    let result = Math.abs(boatPrice - budget);

    if (budget >= boatPrice) {
        console.log(`Yes! You have ${result.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${result.toFixed(2)} leva.`)
    }
}

