function solve(massive) {
    let moneyNeeded = +massive[0];
    let money = +massive[1];

    let i = 2;
    let days = 0;
    let daysspend = 0;

    while (daysspend < 5 && money < moneyNeeded && massive[i] !== undefined) {

        if (massive[i] === "spend") {
            daysspend++;
            money = Math.max(0, (money - +massive[i + 1]));
        } else if (massive[i] === "save") {
            daysspend = 0;
            money += +massive[i + 1]
        }
        days += 1;
        i += 2;
    }

    if (money >= moneyNeeded) {
        console.log(`You saved the money for ${days} days.`)
    } else {
        console.log("You can't save the money.")
        console.log(days);
    }


}


solve(["110",
    "60",
    "spend",
    "10",
    "spend",
    "10",
    "save",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10"])

