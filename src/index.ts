import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";

const matchreader = new MatchReader(new CsvFileReader('football.csv'));
matchreader.load();
matchreader.matches;
// const reader = new MatchReader('football.csv');
// reader.read();


let manUnitedWins = 0;

for (let match of matchreader.matches) {
    if(match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    }else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}

console.log(`Man United won ${manUnitedWins} games`);