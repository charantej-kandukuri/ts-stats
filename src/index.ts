import { ConsoleReport } from "./ConsoleReport";
import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
import { WinsAnalysis } from "./WinsAnalysis";

const reader = new MatchReader(new CsvFileReader('football.csv'));
reader.load();

const summary = new Summary(new WinsAnalysis('Man United'), new ConsoleReport());
summary.buildandPrintReport(reader.matches);