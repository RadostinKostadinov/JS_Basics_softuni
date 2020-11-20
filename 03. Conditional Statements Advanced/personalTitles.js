function solve(age, sex){
    age = Number(age);
    if(age >= 16 && sex === "m"){
        console.log("Mr.");
    }else if(age < 16 && sex === "m") {
        console.log("Master");
    }else if(age < 16 && sex === "f"){
        console.log("Miss");
    }else if(age >= 16 && sex === "f"){
        console.log("Ms.");
    }
}