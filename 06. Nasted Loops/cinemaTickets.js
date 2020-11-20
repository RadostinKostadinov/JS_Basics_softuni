function cinemaTickets(massive){
    let i = 0;
    let seats = 0;
    isFilmName = true;
    let standardTickets = 0;
    let kidTickets = 0;
    let studentTickets = 0;
    let totalClients = 0;
    let totalStandard = 0;
    let totalKid = 0;
    let totalStudent = 0;   
    let filmName = "";

    while(massive[i] !== "Finish" && massive[i] !== undefined){
        
            while(massive[i] !== "End" && massive[i] !== "Finish" && massive[i] !== undefined){
                if(isFilmName) {
                    filmName = massive[i];
                    i++;
                    seats = +massive[i];
                    i++;
                    isFilmName = false;
                }

                switch(massive[i]){
                    case "standard":
                        standardTickets++;
                    break;
                    case "kid":
                        kidTickets++;
                    break;
                    case "student":
                        studentTickets++;
                    break;
                }
                i++;
            }

            ticketsForFilm = standardTickets + kidTickets + studentTickets;
            capacityTaken = (ticketsForFilm / seats) * 100;
            console.log(`${filmName} - ${capacityTaken.toFixed(2)}% full.`)
            
            totalClients += ticketsForFilm;
            totalKid += kidTickets;
            totalStandard += standardTickets;
            totalStudent += studentTickets;
            kidTickets = 0;
            standardTickets = 0;
            studentTickets = 0;
            ticketsForFilm = 0;

            isFilmName = true;
            i++;
    }
    console.log(`Total tickets: ${totalClients}`)
    console.log(`${((totalStudent / totalClients) * 100).toFixed(2)}% student tickets.`)
    console.log(`${((totalStandard / totalClients) * 100).toFixed(2)}% standard tickets.`)
    console.log(`${((totalKid / totalClients) * 100).toFixed(2)}% kids tickets.`)
}
cinemaTickets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])
;