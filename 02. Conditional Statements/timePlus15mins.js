function plusFiftheen(hours, minutes){
    hours = Number(hours);
    minutes = Number(minutes);

    minutes += 15;
    if(minutes >= 60){
        minutes -= 60;
        if(hours === 23){
            hours = 0;
        } else {
            hours += 1;
        }
    }

    if(minutes < 10){
        minutes = `0${minutes}`;
    }

    console.log(`${hours}:${minutes}`);
}
plusFiftheen("0", "01")

