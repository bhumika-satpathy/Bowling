const computeBowlingScore=require('./Bowling');
const rollTheBall=require('./roll');

describe('The computeBowlingScore function: ',()=>{
    it('should return a number denoting the total score',()=>{
        let rollScores=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10];
        let totalScore=computeBowlingScore(rollScores);
        expect(typeof totalScore).toBe('number');
    })

    it('should return 0 if no throw earns a score',()=>{
        let rollScores=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        let totalScore=computeBowlingScore(rollScores);
        expect(totalScore).toBe(0);
    });

    it('should return 30',()=>{
        let rollScores=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10];
        let totalScore=computeBowlingScore(rollScores);
        expect(totalScore).toBe(30);
    });
});