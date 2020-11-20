function salary(massive){
    let n = Number(massive[0]);
    let salary = Number(massive[1]);
    let isSalaryLost = false;

    for(let i = 2; i <= n+2; i++){
        let currentTab = massive[i];
        
        if(currentTab === "Facebook"){
            salary -= 150;
        } else if(currentTab === "Instagram"){
            salary -= 100;
        } else if(currentTab === "Reddit"){
            salary -= 50;
        }

        if(salary <= 0){
            isSalaryLost = true;
            break;
        }

    }

    if(isSalaryLost){
        console.log(`You have lost your salary.`)
    } else {
        console.log(salary);
    }
}

