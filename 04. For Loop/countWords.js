function count(text){
    let stringLength = text.length;

    let counter = 0;

    for(let i = 0; i <= stringLength; i++){
        if(text[i] === " "){
            counter++;
        }
    }

    counter++;

    if(counter > 10){
        console.log(`The message is too long to be send! Has ${counter} words.`);
    } else {
        console.log('The message was send successfully!');
    }
}
count("This message has exactly eleven words. One more as it's allowed!")