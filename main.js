
var day = ("./daySolution/" + process.argv[2] + ".js");
var textFile = ("./dayFile/" + process.argv[2] + ".txt");

//reading .txt from /dayFile
var readFile = require("./readFile.js");
var arrayFile = readFile.readTxt(textFile)

//importing function from /daySolution
var day = require(day);

day.solution(arrayFile);

//console.log(day);
//console.log(textFile);
//console.log(arrayFile)
