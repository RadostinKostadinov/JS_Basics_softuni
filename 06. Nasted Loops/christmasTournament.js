function tournament(massive) {
    let days = +massive[0];
    let index = 2;

    let gamesLost = 0;
    let gamesWon = 0;
    let moneyForDay = 0;
    let daysWon = 0;
    let daysLost = 0;
    let totalMoney = 0;

    for (let i = 0; i < days; i++) {

        while (massive[index] !== "Finish") {
            switch (massive[index]) {
                case 'win':
                    gamesWon++;

                    break;
                case 'lose':
                    gamesLost++;

                    break;
            }
            index++;
        }
        moneyForDay = gamesWon * 20;
        if (gamesWon > gamesLost) {
            moneyForDay *= 1.10;
            daysWon++;
        } else {
            daysLost++;
        }
        totalMoney += moneyForDay;
        moneyForDay = 0;
        gamesWon = 0;
        gamesLost = 0;
        index++;
    }
    if (daysWon > daysLost) {
        totalMoney *= 1.20;
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`)
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`)
    }

}
tournament(["2",
    "volleyball",
    "win",
    "football",
    "lose",
    "basketball",
    "win",
    "Finish",
    "golf",
    "win",
    "tennis",
    "win",
    "badminton",
    "win",
    "Finish",
])