const grade = (score) => {
    return score === 11 ? 'Perfect' 
    : score >= 8 ? 'Excellent' 
    : score >= 5 ? true
    : false;
}

console.log(grade(7)); //true

