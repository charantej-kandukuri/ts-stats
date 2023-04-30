"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const MatchReader_1 = require("./MatchReader");
const MatchResult_1 = require("./MatchResult");
const matchreader = new MatchReader_1.MatchReader(new CsvFileReader_1.CsvFileReader('football.csv'));
matchreader.load();
matchreader.matches;
// const reader = new MatchReader('football.csv');
// reader.read();
let manUnitedWins = 0;
for (let match of matchreader.matches) {
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(`Man United won ${manUnitedWins} games`);
