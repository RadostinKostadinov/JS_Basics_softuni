function building(massive){
    let floors = +massive[0];
    let roomsPerFloor = +massive[1];
    let isOnlyOneFloor = false;
    let outputString = "";


    for(let i = floors; i >= 1; i--){
        for(let j = 0; j < roomsPerFloor; j++){
          
            if(floors === 1){
                for(let k = 0; k < roomsPerFloor; k++){
                    outputString += (`L1${k} `);
                }
                isOnlyOneFloor = true;
                break;
            }

            if(floors !== 1 && i === floors){
                outputString += (`L${i}${j} `);
            } else if(i % 2 === 0){
                outputString += (`O${i}${j} `);
            } else if(i % 2 === 1){
                outputString += (`A${i}${j} `);
            } 
        }
        console.log(outputString);
        outputString = "";
        if(isOnlyOneFloor) break;
    }
}
building(["1", "4"]);
