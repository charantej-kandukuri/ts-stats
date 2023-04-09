"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const matches = fs_1.default.readFileSync('football.csv', {
    encoding: 'utf-8'
}).split('\n')
    .map((row) => {
    return row.split(',');
});
let manUnitedWins = 0;
// A set of possible outcomes
// enum - enumeration
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
for (let match of matches) {
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
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
