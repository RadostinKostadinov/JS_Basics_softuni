function solve(arg1, arg2, arg3, arg4){
    let a = Number(arg1);
    let b = Number(arg2);
    let h = Number(arg3);
    let asdf = Number(arg4);
    let total = ((a*b*h)*0.001) - ((((a*b*h)*0.001) * asdf) / 100)
    console.log(total);
}

solve(85, 75, 47, 17);