function solve(pens, boardMarkers, boardCleanerLiters, discount){
    pens = +pens;
    boardMarkers = +boardMarkers;
    boardCleanerLiters = +boardCleanerLiters;
    discount = +discount;

    let penPrice = 5.80;
    let boardMarkerPrice = 7.20;
    let cleanerPrice = 1.20;

    let pensPrice = pens * penPrice;
    let boardMarkersPrice = boardMarkers * boardMarkerPrice;
    let boardCleanerTotalPrice = boardCleanerLiters * cleanerPrice;

    let totalPrice = pensPrice + boardCleanerTotalPrice + boardMarkersPrice;
    totalPrice = totalPrice - ((totalPrice * discount) / 100);

    console.log(totalPrice.toFixed(3));
}
solve(2,
    3,
    2.5,
    25
    )