function sumSeconds(firstTime, secondTime, thirdTime) {
    firstTime = Number(firstTime);
    secondTime = Number(secondTime);
    thirdTime = Number(thirdTime);

    let totalTime = firstTime + secondTime + thirdTime;

    let minutes = Math.trunc(totalTime / 60);

    let seconds = totalTime % 60;

    if (seconds < 10) seconds = `0${seconds}`;

    console.log(`${minutes}:${seconds}`);
}

sumSeconds("35", "45", "44");