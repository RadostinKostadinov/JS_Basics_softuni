function divide(massive) {
    let n = Number(massive[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    for (let i = 1; i <= n; i++) {
        let h = Number(massive[i]);
        if (h % 2 == 0) {
            p1++;
        } 
        if (h % 3 == 0) {
            p2++;
        }
         if (h % 4 == 0) {
            p3++;
        }
    }

    p1 = (p1 / n) * 100;
    p2 = (p2 / n) * 100;
    p3 = (p3 / n) * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
}
divide(["10",
"680",
"2",
"600",
"200",
"800",
"799",
"199",
"46",
"128",
"65"])
;

