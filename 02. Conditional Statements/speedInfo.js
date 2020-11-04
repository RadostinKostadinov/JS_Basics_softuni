function speedInfo(input) {
    input = Number(input);

    if (input <= 10) {
        console.log("slow");
    } else if (input <= 50) {
        console.log("average");
    } else if (input <= 150) {
        console.log("fast");
    } else if (input <= 1000) {
        console.log("ultra fast");
    } else {
        console.log("extremely fast")
    }
}