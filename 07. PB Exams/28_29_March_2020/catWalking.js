function solve(minutes, walkings, calories){

    minutes = +minutes * +walkings;
    minutes *= 5;
    calories = +calories / 2;
    if(minutes >= calories){
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${minutes}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${minutes}.`)
    }

}

