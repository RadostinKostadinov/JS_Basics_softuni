function solve(massive){
    let cake = +massive[0] * +massive[1];
    let piecesEated = 0;
    let i = 2;

    while(massive[i] !== "STOP" && massive[i] !== undefined){
        piecesEated += +massive[i];
        i++;
    }

    if(piecesEated > cake){
        console.log(`No more cake left! You need ${piecesEated - cake} pieces more.`)
    } else if (piecesEated < cake){
        console.log(`${cake - piecesEated} pieces are left.`)
    }
}
solve(["10",
"10",
"20",
"20",
"20",
"20",
"21"])
;
