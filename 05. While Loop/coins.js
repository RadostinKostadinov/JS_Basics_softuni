function solve(input){
    input = +input[0];
    let coins = 0;

    while(input > 0){

        if(input >= 2){
            input -= 2;
        } else if(input >= 1){
            input -= 1;
        } else if(input >= 0.50){
            input -= 0.5;
        } else if(input >= 0.20){
            input -= 0.20;
        } else if(input >= 0.10){
            input -= 0.10;
        } else if(input >= 0.05){
            input -= 0.05;
        } else if(input >= 0.02){
            input -= 0.02;
        } else if(input >= 0.01){
            input -= 0.01;
        }

        coins++;
        input = +(input.toFixed(2))
    }
    console.log(coins);
}
solve(["3"]);