function solve(number1, number2){
    number1 = Number(number1);
    number2 = Number(number2);

    let sum = 0;

    for(let i = number1; i <= number2; i++){
        if(i % 9 === 0){
            sum += i;
        }
    }

    console.log(`The sum: ${sum}`);

    
    for(let i = number1; i <= number2; i++){
        if(i % 9 === 0){
            console.log(i);
        }
    }
}