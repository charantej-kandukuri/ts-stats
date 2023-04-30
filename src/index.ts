import { ConsoleReport } from "./ConsoleReport";
import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
import { WinsAnalysis } from "./WinsAnalysis";

const reader = MatchReader.csvMatchReader('football.csv');
reader.load();

const winsSummary = Summary.winsSummary('Man United');
winsSummary.buildandPrintReport(reader.matches);

