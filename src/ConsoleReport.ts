export interface OutputTarget {
    print(report: string): void
}

export class ConsoleReport {
    print(report: string): void {
        console.log(report)
    }
}