import { ConsoleReport, OutputTarget } from "./ConsoleReport";
import { MatchData } from "./MatchData";
import { Analyzer, WinsAnalysis } from "./WinsAnalysis";

export class Summary  {
    static winsSummary(teamName: string): Summary {
        return new Summary( new WinsAnalysis(teamName), new ConsoleReport())
    }

    constructor(public analysis: Analyzer, public outputTarget: OutputTarget){}

    buildandPrintReport(matches: MatchData[]): void {
        const report = this.analysis.run(matches);
        this.outputTarget.print(report);
    }

}