function solve(massive) {
    let number = +massive[0];

    let i = 1;
    let sum = 0;

    while(true){
        if(sum >= number){
            break;
        }
        sum += +massive[i];
        i++;
    }

    console.log(sum);
}

solve(["20",
"1",
"2",
"3",
"4",
"5",
"6"])
;