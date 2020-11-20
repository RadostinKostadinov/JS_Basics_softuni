function minimumNum(massive){
    let massLength = massive[0];

    currentMinNumber = Number.MAX_SAFE_INTEGER;
    for(let i = 1; i <= massLength; i++){
        if(Number(massive[i]) < currentMinNumber) currentMinNumber = Number(massive[i]);
    }

    console.log(currentMinNumber);
}

minimumNum(["2",
"100",
"99"])
;