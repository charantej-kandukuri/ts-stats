import { MatchData } from "./MatchData";
import { MatchResult } from "./MatchResult";
import { dateStringToDate } from "./utils";

interface DataReader {
    data: string[][];
    read(): void
}

export class MatchReader {
    matches: MatchData[] = []
    constructor(private reader: DataReader){};

    load() {
        this.reader.read();
        this.matches = this.reader.data.map((row: string[]): MatchData => {
            return [
                dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5] as MatchResult, // type assertions
                row[6]
            ]
        })
    }

}