import { OutputTarget } from "./ConsoleReport";
import { MatchData } from "./MatchData";
import { Analyzer } from "./WinsAnalysis";

export class Summary  {

    constructor(public analysis: Analyzer, public outputTarget: OutputTarget){}

    buildandPrintReport(matches: MatchData[]): void {
        const report = this.analysis.run(matches);
        this.outputTarget.print(report);
    }

}