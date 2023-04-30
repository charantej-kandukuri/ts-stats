import { MatchData } from "./MatchData";
import { MatchResult } from "./MatchResult";

export interface Analyzer {
    run(matches: MatchData[]): string;
}

export class WinsAnalysis {

    constructor(public teamName: string) {}

    run(matches: MatchData[]): string {
        let matchesWon = 0;
        for (let match of matches) {
            if(match[1] === this.teamName && match[5] === MatchResult.HomeWin) {
                matchesWon++;
            }else if (match[2] === this.teamName && match[5] === MatchResult.AwayWin) {
                matchesWon++;
            }
        }

        return `${this.teamName} won ${matchesWon} games`
    }

}