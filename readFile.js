
exports.readTxt = function(fileLocation){

  var fs = require('fs');
  var array = fs.readFileSync(fileLocation).toString().split("\n");
  for (i = array.length - 1; i >= 0; i -= 1) {
    if (array[i] == "") {
        array.splice(i, 1);
    }
  }

  return array;
}
