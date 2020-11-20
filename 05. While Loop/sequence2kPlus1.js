function solve(massive){
    let fixedNumber = +massive;

    let total = 1;
    while(true){
        if(total > fixedNumber){
            break;
        }
        console.log(total);
        total = total * 2 + 1;
    }
}
solve(12);