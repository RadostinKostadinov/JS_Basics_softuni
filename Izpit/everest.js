function solve(massive) {
    let mStart = 5364;
    let mFinish = 8848;
    let days = 1;
    let i = 0;
    let isFinished = false;
    let isDays5 = false;

    while (massive[i] !== "END") {

        if (massive[i] === "Yes") {
            days++;
            if (days > 5) {
                isDays5 = true;
                break;
            }
        }
        i++;
        mStart += +massive[i]
        i++;
        if (mStart >= mFinish) {
            isFinished = true;
            break;
        }
        
    }
    if (isFinished) {
        console.log(`Goal reached for ${days} days!`)
    } else {
        console.log(`Failed!`);
        console.log(mStart);
    }
}
solve(["Yes",
    "535",
    "Yes",
    "849",
    "Yes",
    "499",
    "Yes",
    "400",
    "Yes",
    "500"]);