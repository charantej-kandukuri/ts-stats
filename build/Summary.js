"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
class Summary {
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
