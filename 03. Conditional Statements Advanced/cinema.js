function solve(type, rows, colums) {

    rows = Number(rows);
    colums = Number(colums);

    seats = rows * colums;
    profit = 0;

    switch (type) {
        case "Premiere":
            profit = seats * 12.00;
            break;
        case "Normal":
            profit = seats * 7.50;
            break;
        case "Discount":
            profit = seats * 5.00;
            break;

    }

    console.log(profit.toFixed(2));
}