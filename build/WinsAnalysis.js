"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
const MatchResult_1 = require("./MatchResult");
class WinsAnalysis {
    constructor(teamName) {
        this.teamName = teamName;
    }
    run(matches) {
        let matchesWon = 0;
        for (let match of matches) {
            if (match[1] === this.teamName && match[5] === MatchResult_1.MatchResult.HomeWin) {
                matchesWon++;
            }
            else if (match[2] === this.teamName && match[5] === MatchResult_1.MatchResult.AwayWin) {
                matchesWon++;
            }
        }
        return `${this.teamName} won ${matchesWon} games`;
    }
}
exports.WinsAnalysis = WinsAnalysis;
