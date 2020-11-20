function solve(nOne, nTwo, operator) {
    nOne = Number(nOne);
    nTwo = Number(nTwo);
    let result = 0;

    switch (operator) {
        case "+":
            result = nOne + nTwo;
            if (result % 2 === 0) {
                console.log(`${nOne} + ${nTwo} = ${result} - even`);
            } else {
                console.log(`${nOne} + ${nTwo} = ${result} - odd`);
            }
            break;
        case "-":
            result = nOne - nTwo;
            if (result % 2 === 0) {
                console.log(`${nOne} - ${nTwo} = ${result} - even`);
            } else {
                console.log(`${nOne} - ${nTwo} = ${result} - odd`);
            }
            break;
        case "*":
            result = nOne * nTwo;
            if (result % 2 === 0) {
                console.log(`${nOne} * ${nTwo} = ${result} - even`);
            } else {
                console.log(`${nOne} * ${nTwo} = ${result} - odd`);
            }
            break;
        case "/":
            if (nTwo === 0) {
                console.log(`Cannot divide ${nOne} by zero`);
            } else {
                result = nOne / nTwo;
                console.log(`${nOne} / ${nTwo} = ${result.toFixed(2)}`);
            }
            break;
        case "%":
            if (nTwo === 0) {
                console.log(`Cannot divide ${nOne} by zero`);
            } else {
                result = nOne % nTwo;
                console.log(`${nOne} % ${nTwo} = ${result}`)
            }
            break;

    }
}
