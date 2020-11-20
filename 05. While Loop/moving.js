function solve(massive){
    let totalSpace = +massive[0] * +massive[1] * +massive[2];
    let freeSpace = totalSpace;
    let i = 3;

    while(massive[i] !== 'Done'){
        freeSpace -= +massive[i];
        if(freeSpace < 0){
            console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`);
            break;
        }
        i++;
    }

    if(freeSpace > 0){
        console.log(`${freeSpace} Cubic meters left.`);
    }

}
solve(["10",
"1",
"2",
"4",
"6",
"Done"])
