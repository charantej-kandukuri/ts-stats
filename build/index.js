"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
const reader = MatchReader_1.MatchReader.csvMatchReader('football.csv');
reader.load();
const winsSummary = Summary_1.Summary.winsSummary('Man United');
winsSummary.buildandPrintReport(reader.matches);
