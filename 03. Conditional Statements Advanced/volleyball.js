function solve(year, holidays, goesHome){
    holidays = Number(holidays);
    goesHome = Number(goesHome);

    let weekendsPlaying = 48 - goesHome;
    weekendsPlaying = weekendsPlaying * 3 / 4;

    let weekendsHome = goesHome;

    let holidaysPlaying = holidays * 2 / 3;

    let playing = weekendsHome + weekendsPlaying + holidaysPlaying;
 
    // playing = ((holidays / 3) * 2) + ((48 / 4) * 3);

    if(year === "leap"){
        playing = playing * 1.15;
    }
    
    playing = Math.floor(playing);
    console.log(playing);
}

solve("normal",
"6",
"13")
