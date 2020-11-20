function solve(n){
    n = n + "";
    let sum = 0;

    for(let i = 0; i < n.length; i++){
        let help = Number(n[i]);
        sum += help;
    }

    console.log(`The sum of the digits is:${sum}`)
}