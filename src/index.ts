import fs from 'fs'

const matches = fs.readFileSync('football.csv',{
    encoding: 'utf-8'
}).split('\n')
.map((row: string): string[] => {
    return row.split(',')
})

let manUnitedWins = 0;

// A set of possible outcomes
// enum - enumeration
enum MatchResult {
    HomeWin = 'H',
    AwayWin = 'A',
    Draw = 'D'
}

for (let match of matches) {
    if(match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    }else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}

console.log(`Man United won ${manUnitedWins} games`);

/**
 * Enum
 * 1. What are enums and when to use it
 * 
 * --> Follow near-identical syntax rules as normal objects
 * --> Creates an object with the same keys and values when converted from TS to JS
 * --> Primary goal is to signal other engineers that these are all closely related values
 * --> Use whenever we have a small fixed set of values that are all closely realted and known at compile time
 */


