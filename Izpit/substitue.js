function solve(massive){
    let K = +massive[0]; // [0x:8]
    let L = +massive[1]; // [9x:0]
    let M = +massive[2]; // [0x:8]
    let N = +massive[3]; // [9x:0]
    let printed = 0;
    let isSix = false;

    for(let i = K; i <= 8; i++){
        for(let j = 9; j >= L; j--){
           for(let m = M; m <= 8; m++){
               for(let n = 9; n >= N; n--){
                   if(i % 2 === 0 && j % 2 === 1 && m % 2 === 0 && n % 2 === 1){
                       if(i === m && j === n){
                           console.log(`Cannot change the same player.`)
                       } else {
                           console.log(`${i}${j} - ${m}${n}`)
                           printed++;
                       }
                       if(printed === 6){
                           isSix = true;
                           break;
                       }
                   }
                   if(isSix) break;
               }
               if(isSix) break;
           }
           if(isSix) break; 
        }
        if(isSix) break;
    }
}
solve(["6",
"7",
"5",
"6"
]);