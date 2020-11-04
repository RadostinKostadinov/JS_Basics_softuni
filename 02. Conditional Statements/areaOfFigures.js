function findArea(figure, num1, num2) {
    let area = 0;
    if (figure === "square") {
        let side = Number(num1);
        area = side * side;
    } else if (figure === "rectangle") {
        let sideA = Number(num1);
        let sideB = Number(num2);
        area = sideA * sideB;
    } else if (figure === "circle") {
        let radius = num1;
        area = Math.PI * (radius * radius);
    } else if (figure === "triangle") {
        let sideA = Number(num1);
        let heightA = Number(num2);
        area = (sideA * heightA) / 2;
    }
    console.log(area.toFixed(3));
}