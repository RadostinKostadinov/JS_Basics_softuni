function metricConverter(value, from, to){
    value = Number(value);

    if(from === "mm"){
        if(to === "cm"){
            value = value / 10;
        } else if (to === "m"){
            value = value / 1000;
        }
    } else if(from === "cm"){
        if(to ==="mm"){
            value = value * 10;
        } else if(to === "m"){
            value = value / 100;
        }
    } else if(from === "m"){
        if(to === "cm"){
            value = value * 100;
        } else if(to === "mm"){
            value = value * 1000;
        }
    }
    console.log(`${(value.toFixed(3))}`);
}

metricConverter("45", "cm", "mm")
