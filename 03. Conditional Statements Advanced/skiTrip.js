function skiTrip(days, roomType, assessment) {
    days = Number(days);
    nights = days - 1;
    let discountedPrice = 0;

    switch (roomType) {
        case "room for one person":
            discountedPrice = nights * 18.00;
            break;
        case "apartment":
            if (nights < 10) {
                discountedPrice = (nights * 25.00) * 0.70;
            } else if (nights >= 10 && nights <= 15) {
                discountedPrice = (nights * 25.00) * 0.65;
            } else if (nights > 15) {
                discountedPrice = (nights * 25.00) * 0.50;
            } break;
        case "president apartment":
            if (nights < 10) {
                discountedPrice = (nights * 35.00) * 0.90;
            } else if (nights >= 10 && nights <= 15) {
                discountedPrice = (nights * 35.00) * 0.85;
            } else if (nights > 15) {
                discountedPrice = (nights * 35.00) * 0.80;
            } break;
    }
    if (assessment === "positive") {
        discountedPrice = discountedPrice * 1.25;
    } else {
        discountedPrice = discountedPrice * 0.90;
    }

    console.log(discountedPrice.toFixed(2));
}