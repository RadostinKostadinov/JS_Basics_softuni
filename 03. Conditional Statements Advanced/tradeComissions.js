function solve(city, trades) {
    trades = Number(trades);
    let comission = 0;

    switch (city) {
        case "Sofia":
            if (trades > 0 && trades <= 500) {
                comission = trades * 0.05;
            } else if (trades <= 1000) {
                if (trades < 0) {
                    console.log("error");
                    break;
                }
                comission = trades * 0.07;
            } else if (trades <= 10000) {
                comission = trades * 0.08;
            } else {
                comission = trades * 0.12;
            }
            console.log(comission.toFixed(2));
            break;
        case "Varna":
            if (trades > 0 && trades <= 500) {
                comission = trades * 0.045;
            } else if (trades <= 1000) {
                if (trades < 0) {
                    console.log("error");
                    break;
                }
                comission = trades * 0.075;
            } else if (trades <= 10000) {
                comission = trades * 0.10;
            } else {
                comission = trades * 0.13;
            }
            console.log(comission.toFixed(2));
            break;
        case "Plovdiv":
            if (trades > 0 && trades <= 500) {
                comission = trades * 0.055;
            } else if (trades <= 1000) {
                if (trades < 0) {
                    console.log("error");
                    break;
                }
                comission = trades * 0.08;
            } else if (trades <= 10000) {
                comission = trades * 0.12;
            } else {
                comission = trades * 0.145;
            }
            console.log(comission.toFixed(2));
            break;
        default:
            console.log("error");
    }
}