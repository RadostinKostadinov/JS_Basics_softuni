function racing(fuelInTank, fuelConsumption, laps){
    fuelInTank = Number(fuelInTank);
    fuelConsumption = Number(fuelConsumption);
    laps = Number(laps);
    let isOutOfFuel = false;

    for(let i = 1; i < laps; i++){
        fuelInTank -= fuelConsumption;
        fuelConsumption -= 0.1;
        if(fuelInTank < fuelConsumption){
            isOutOfFuel = true;
            console.log(`You are out of fuel in round ${i+1}!`);
            break;
        }
    }

    if(!isOutOfFuel){
        console.log(`Congrats! You won the race!`);
    }
}

racing("50", "4.3", "30")