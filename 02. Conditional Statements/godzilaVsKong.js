function solve(budget, actors, pricePerActor){
    budget = Number(budget);
    actors = Number(actors);
    pricePerActor = Number(pricePerActor);

    let decor = budget * 0.10;
    if(actors > 150){
        priceForClothes = (pricePerActor * actors) * 0.90; 
    } else {
        priceForClothes = pricePerActor * actors;
    }

    totalNeeded = decor + priceForClothes;

    if(budget < totalNeeded){
        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalNeeded - budget).toFixed(2)} leva more.`);
    } else { 
	    console.log("Action!"); 
	    console.log(`Wingard starts filming with ${(budget - totalNeeded).toFixed(2)} leva left.`);
    }
}