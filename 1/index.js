console.log('Step 1')

fs = require('fs')
fs.readFile('input.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  

  let lines = data.toString().split('\n')
  let startingPoint = 0

  for( let i = 0; i < lines.length; i++ ) {
      let currentElement = parseInt(lines[i])
      startingPoint += currentElement
  }

  console.log('Finale result: ', startingPoint)


});
