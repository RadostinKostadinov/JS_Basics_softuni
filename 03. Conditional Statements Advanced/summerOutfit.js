function solve(degrees, dayStage) {
    degrees = Number(degrees);

    switch (dayStage) {
        case "Morning":
            if (10 <= degrees && degrees <= 18) {
                console.log(`It's ${degrees} degrees, get your Sweatshirt and Sneakers.`)
            } else if (18 < degrees && degrees <= 24) {
                console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`)
            } else if (degrees >= 25) {
                console.log(`It's ${degrees} degrees, get your T-Shirt and Sandals.`)
            }
            break;  

        case "Afternoon":
            if (10 <= degrees && degrees <= 18) {
                console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`)
            } else if (18 < degrees && degrees <= 24) {
                console.log(`It's ${degrees} degrees, get your T-Shirt and Sandals.`)
            } else if (degrees >= 25) {
                console.log(`It's ${degrees} degrees, get your Swim Suit and Barefoot.`)
            }
            break;


        case "Evening":
            if (10 <= degrees && degrees <= 18) {
                console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`)
            } else if (18 < degrees && degrees <= 24) {
                console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`)
            } else if (degrees >= 25) {
                console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`)
            }
            break;
    }
}

