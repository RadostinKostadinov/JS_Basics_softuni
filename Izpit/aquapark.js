function solve(month, hours, people, time){
    hours = +hours;
    people = +people;
    let pricePerPerson = 0;

    switch(month){
        case "march":
        case "april":
        case "may":
            if(time === "day"){
                pricePerPerson = 10.50;

            } else {
                pricePerPerson = 8.40;
            }
        
        break;
        case "june":
        case "july":
        case "august":
            if(time === "day"){
                pricePerPerson = 12.60;

            } else {
                pricePerPerson = 10.20;

            }
        

        break;
    }

    if(people >= 4){
        pricePerPerson *= 0.90;
    }
    console.log(pricePerPerson);
    if(hours >= 5){
        pricePerPerson *= 0.50;
    }

    let totalPrice = (pricePerPerson * hours) * people;
    console.log(`Price per person for one hour: ${pricePerPerson.toFixed(2)}`);
    console.log(`Total cost of the visit: ${totalPrice.toFixed(2)}`);
}
solve("april",
    "50",
    "20",
    "day"
    )