"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const ConsoleReport_1 = require("./ConsoleReport");
const WinsAnalysis_1 = require("./WinsAnalysis");
class Summary {
    static winsSummary(teamName) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(teamName), new ConsoleReport_1.ConsoleReport());
    }
    constructor(analysis, outputTarget) {
        this.analysis = analysis;
        this.outputTarget = outputTarget;
    }
    buildandPrintReport(matches) {
        const report = this.analysis.run(matches);
        this.outputTarget.print(report);
    }
}
exports.Summary = Summary;
