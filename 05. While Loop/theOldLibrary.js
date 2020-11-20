function solve(massive){
    let bookSearched = massive[0];
    let i = 1;
    let flag = false;

    while(massive[i] !== "No More Books"){
        if(massive[i] === bookSearched){
            console.log(`You checked ${i-1} books and found it.`);
            flag = true;
            break;
        }
        i++;

    }
    if(!flag){
        console.log(`The book you search is not here!`)
        console.log(`You checked ${i-1} books.`)
    }
    
}
solve(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"]);