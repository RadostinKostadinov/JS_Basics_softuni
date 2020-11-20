function solve(budget, season){
    budget = Number(budget);

    let destination = undefined;
    let spent = 0;
    let place = undefined;

    if(budget <= 100){
        destination = "Bulgaria";
        if(season === "summer"){
            spent = budget * 0.30;
            place = "Camp";
        } else if(season === "winter"){
            spent = budget * 0.70;
            place = "Hotel";
        }
    } else if(100 < budget && budget <= 1000){
        destination = "Balkans"
        if(season === "summer"){
            spent = budget * 0.40;
            place = "Camp";
        } else if (season === "winter"){
            spent = budget * 0.80;
            place = "Hotel";
        }
    } else if(budget > 1000){
        destination = "Europe"
        spent = budget * 0.90;
        place = "Hotel";
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${spent.toFixed(2)}`)
}
