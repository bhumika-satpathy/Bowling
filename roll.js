let rolledOutScores=[];
function roll(numberOfPinsKnocked){
    rolledOutScores.push(numberOfPinsKnocked);
    return rolledOutScores;
}

module.exports=roll;