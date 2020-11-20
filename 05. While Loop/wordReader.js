    function read(massive){
        let i = 0;
        while(true){
            if(massive[i] === 'Stop'){
                break;
            }
            console.log(massive[i]);
            i++;
        }
    }