function scholarship(familyEarnings, averageSuccess, minimumWage) {
    familyEarnings = Number(familyEarnings);
    averageSuccess = Number(averageSuccess);
    minimumWage = Number(minimumWage);

    let excScolarship = 0;
    let socScolarship = 0;

    //Execellent scolarship
    if (averageSuccess >= 5.5) {
        excScolarship = Math.floor(averageSuccess * 25);
    }

    //Social scolarship
    if (averageSuccess >= 4.5) {
        if (familyEarnings < minimumWage) {
            socScolarship = Math.floor(minimumWage * 0.35);
        }
    }

    if (excScolarship === 0 && socScolarship === 0) {
        console.log("You cannot get a scholarship!");
    } else if (socScolarship > excScolarship) {
        console.log(`You get a Social scholarship ${socScolarship} BGN`);
    } else if (excScolarship >= socScolarship) {
        console.log(`You get a scholarship for excellent results ${excScolarship} BGN`);
    }

}