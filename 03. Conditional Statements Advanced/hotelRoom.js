function solve(month, nights) {
    nights = Number(nights);

    let priceStudio = 0;
    let priceApartment = 0;

    switch (month) {
        case "May":
        case "October":
            priceStudio = 50;
            priceApartment = 65;
            if (nights > 14) {
                priceStudio = 50 * 0.70;
            } else if (nights > 7){
                priceStudio = 50 * 0.95;
            }
            break;
        case "June":
        case "September":
            priceStudio = 75.20;
            priceApartment = 68.70;
            if(nights > 14){
                priceStudio = 75.20 * 0.80;
            }
            break;
        case "July":
        case "August":
            priceStudio = 76;
            priceApartment = 77;
            break;
        }
        if(nights > 14){
            priceApartment = priceApartment * 0.90;
        }

        let totalPriceStudio = priceStudio * nights;
        let totalPriceApartment = priceApartment * nights;
        console.log(`Apartment: ${totalPriceApartment.toFixed(2)} lv.`);
        console.log(`Studio: ${totalPriceStudio.toFixed(2)} lv.`)
}