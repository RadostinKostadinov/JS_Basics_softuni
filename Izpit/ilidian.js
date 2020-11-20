function solve(people, strenght, health){
    people = +people;
    strenght = +strenght;
    health = +health;

    strenght = people * strenght;

    if(strenght >= health){
        console.log(`Illidan has been slain! You defeated him with ${strenght - health} points.`);
    } else {
        console.log(`You are not prepared! You need ${health - strenght} more points.`);
    }
}