function solve(product, city, quantity) {
    quantity = Number(quantity);
    let finalPrint = 0;
    switch (city) {
        case "Sofia":
            if (product === "coffee") finalPrint = quantity * 0.50;
            if (product === "water") finalPrint = quantity * 0.80;
            if (product === "beer") finalPrint = quantity * 1.20;
            if (product === "sweets") finalPrint = quantity * 1.45;
            if (product === "peanuts") finalPrint = quantity * 1.60;
            break;
        case "Plovdiv":
            if (product === "coffee") finalPrint = quantity * 0.40;
            if (product === "water") finalPrint = quantity * 0.70;
            if (product === "beer") finalPrint = quantity * 1.15;
            if (product === "sweets") finalPrint = quantity * 1.30;
            if (product === "peanuts") finalPrint = quantity * 1.50;
            break;
        case "Varna":
            if (product === "coffee") finalPrint = quantity * 0.45;
            if (product === "water") finalPrint = quantity * 0.70;
            if (product === "beer") finalPrint = quantity * 1.10;
            if (product === "sweets") finalPrint = quantity * 1.35;
            if (product === "peanuts") finalPrint = quantity * 1.55;
            break;
    }
    console.log(`${finalPrint.toFixed(1)}`)
}