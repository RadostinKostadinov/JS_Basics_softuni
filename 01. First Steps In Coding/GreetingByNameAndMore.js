function greeting(arg){
    let name = arg;
    console.log(`Hello, ${name}!`);
}

function greeting2(arg1,arg2,arg3,arg4){
    let name = arg1;
    let lastname = arg2;
    let age = Number(arg3);
    let town = arg4;
    console.log(`You are ${name} ${lastname}, a ${age}-years old person from ${town}.`) 
}

function projectarch(arg1, arg2){
    let name = arg1;
    let numberOfProjects = Number(arg2);
    let hoursNeeded = numberOfProjects * 3;
    console.log(`The architect ${name} will need ${hoursNeeded} hours to complete ${numberOfProjects} project/s.`)
}

function petShop(arg1, arg2){
    let dogs = Number(arg1);
    let others = Number(arg2);
    let sum = dogs*2.5 + others*4;
    console.log(`${sum} lv.`);
}

function greening(arg1){
    let area = Number(arg1);
    let totalPrice = area * 7.61;
    let discount = totalPrice * 0.18;
    totalPrice = totalPrice - discount;
    console.log(`The final price is ${totalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}