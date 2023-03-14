//part1
const edsFriends = (name1, name2, name3) => {
    console.log(`Welcome ${name1}, ${name2}, ${name3}.`);
}
edsFriends('Tinky Wink','Dipsy','Lala'); //Welcome Tinky Wink, Dipsy, Lala.

//part2
function Edage(birthYear) {
    const age = 2023 - birthYear;
    return age
}

console.log(Edage(1990));
//33


//part3
const edsFriendsAndAge = (name_1, name_2, name_3, age_1, age_2, age_3) => {
    console.log(`Welcome ${name_1}, you are ${age_1}. Welcome ${name_2}, you are ${age_2}.Welcome ${name_3}, you are ${age_3}.`);
}
edsFriendsAndAge('Tinky Winky', 'Dipsy', 'Lala', 28, 25, 30);
//Welcome Tinky Winky, you are 28. Welcome Dipsy, you are 25.Welcome Lala, you are 30.
