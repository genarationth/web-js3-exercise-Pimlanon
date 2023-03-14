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
const greetingAndAge = (name1,name2,name3,birthYear1,birthYear2,birthYear3)=> {
    const age1 = 2023 - birthYear1;
    const age2 = 2023 - birthYear2;
    const age3 = 2023 - birthYear3;
    console.log(`Welcome ${name1}, you are ${age1}.Welcome ${name2}, you are ${age2}.Welcome ${name3}, you are ${age3}`);
};
greetingAndAge('Tinky Winky','Dipsy','Lala',1987,2005,1996);
//Welcome Tinky Winky, you are 36.Welcome Dipsy, you are 18.Welcome Lala, you are 27