function maxNum(massive){

    let lastNum = massive[0];
    let i = 1;
    
    while(massive[i] !== "Stop"){
        if(lastNum > +massive[i]){
            lastNum = massive[i]
        }
        i++;
    }

    console.log(lastNum);
}
maxNum(["100",
"99",
"80",
"70",
"Stop"])
;