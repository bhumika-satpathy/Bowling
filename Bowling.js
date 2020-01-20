let runningTotalScore=[];
let rollScores=[];
let finalScore=0;

function computeBowlingScore(rollingScores){

    rollScores=[];

    for(let i=0;i<rollingScores.length;){
        if(rollingScores[i]===10){
            rollScores.push(10);
            rollScores.push(0);
            i=i+1;
        }
        else{
            rollScores.push(rollingScores[i]);
            rollScores.push(rollingScores[i+1]);
            i=i+2;
        }
    }

    for(let i=0;i<19;){
        // The throw is a strike
        if(rollScores[i]===10){
            if(i===0){
                if(rollScores[i+2]===10 && rollScores[i+4]===10){
                    runningTotalScore[i]=runningTotalScore[i-1]+30;
                    runningTotalScore[i+1]=runningTotalScore[i];
                }
                else if(rollScores[i+2]===10 && rollScores[i+4]!=10){
                    runningTotalScore[i]=runningTotalScore[i-1]+10+rollScores[i+2]+rollScores[i+4];
                    runningTotalScore[i+1]=runningTotalScore[i];
                }
                else{
                    runningTotalScore[i]=runningTotalScore[i-1]+10+rollScores[i+2]+rollScores[i+3];
                    runningTotalScore[i+1]=runningTotalScore[i];
                }
                i=i+2;
                continue;
            }
            if(rollScores[i+2]===10 && rollScores[i+4]===10){
                runningTotalScore[i]=runningTotalScore[i-1]+30;
                runningTotalScore[i+1]=runningTotalScore[i];
            }
            else if(rollScores[i+2]===10 && rollScores[i+4]!=10){
                runningTotalScore[i]=runningTotalScore[i-1]+10+rollScores[i+2]+rollScores[i+4];
                runningTotalScore[i+1]=runningTotalScore[i];
            }
            else{
                runningTotalScore[i]=runningTotalScore[i-1]+10+rollScores[i+2]+rollScores[i+3];
                runningTotalScore[i+1]=runningTotalScore[i];
            }
            i=i+2;
        }

        // The throw is a spare
        else if(rollScores[i]+rollScores[i+1]===10){
            if(i===0){
                runningTotalScore[i]=rollScores[i]+rollScores[i+1]+rollScores[i+2];
                runningTotalScore[i+1]=runningTotalScore[i];
                i=i+2;
                continue;
            }
            runningTotalScore[i]=runningTotalScore[i-1]+rollScores[i+1]+rollScores[i+2]+rollScores[i];
            runningTotalScore[i+1]=runningTotalScore[i];
            i=i+2;
        }

        // For an open frame
        else{
            if(i===0){
                runningTotalScore[i]=rollScores[i]+rollScores[i+1];
                runningTotalScore[i+1]=runningTotalScore[i];
                i=i+2;
                continue;
            }
            runningTotalScore[i]=runningTotalScore[i-1]+rollScores[i]+rollScores[i+1];
            runningTotalScore[i+1]=runningTotalScore[i];
            i=i+2;
        }
    }
    //console.log(rollScores);
    finalScore=runningTotalScore[runningTotalScore.length-1];
    return score();
}

function score(){
    return finalScore;
}
let arr=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10];
console.log(computeBowlingScore(arr));
module.exports=computeBowlingScore;