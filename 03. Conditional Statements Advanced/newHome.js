function solve(type, quantity, budget) {
    quantity = Number(quantity);
    budget = Number(budget);
    let price = 0;

    switch (type) {
        case "Roses":
            price = quantity * 5;
            if (quantity > 80) {
                price = price * 0.90;
            }
            break;
        case "Dahlias":
            price = quantity * 3.80;
            if (quantity > 90) {
                price = price * 0.85;
            }
            break;
        case "Tulips":
            price = quantity * 2.80;
            if (quantity > 80) {
                price = price * 0.85;
            }
            break;
        case "Narcissus":
            price = quantity * 3;
            if (quantity < 120) {
                price = price * 1.15;
            }
            break;
        case "Gladiolus":
            price = quantity * 2.50;
            if(quantity < 80){
                price = price * 1.20;
            }
            break;
    }

    if(budget >= price){
        console.log(`Hey, you have a great garden with ${quantity} ${type} and ${(budget - price).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money, you need ${(price - budget).toFixed(2)} leva more.`)
    }
}

