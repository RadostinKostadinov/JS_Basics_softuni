function leapYears(leapYear, lastYear){
    leapYear = +leapYear;
    lastYear = +lastYear;

    for(leapYear; leapYear <= lastYear; leapYear += 4){
        console.log(leapYear);
    }
}