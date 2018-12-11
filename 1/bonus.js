console.log('Step 1 - Bonus')


/**
 * 
 *  Issue found : Should get the frequency that appears TWICE and not once from the frequencyList
 * 
 * 
 * 
 */

fs = require('fs')
fs.readFile('input.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }

  let lines = data.toString().split('\n')
  let startingPoint = 0
  let frequencyList = [0]
  let loopCounter = 1

  for( let i = 0; i < lines.length; i++ ) {
      let currentElement = parseInt(lines[i])
      startingPoint += currentElement

      console.log('>>>> current frequency : ', startingPoint)


      // Check if the frequency has been found
      if( frequencyList.indexOf(startingPoint) === -1){
        // Add frequency found to the lsit of frequency for next checking
        frequencyList.push(startingPoint)
        if(i == lines.length-1) {
            i=-1;
            loopCounter++
            console.log('> Loop counter: ', loopCounter)
        }

      }else{
        console.log('>>> Found the frequency : ', startingPoint)
        i = lines.length + 1
      }

  }

  console.log('Finale result: ', startingPoint)


});
