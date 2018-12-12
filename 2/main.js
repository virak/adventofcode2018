console.log('Day 2')

fs = require('fs')
fs.readFile('input.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }

  let lines = data.toString().split('\n')
  let type2 = 0
  let type3 = 0

  for( let i = 0; i < lines.length; i++ ) {
    let currentLineArray = lines[i].split('')
    let foundType2 = false
    let foundType3 = false

    let uniqCurrentLineArray = removeDuplicates(currentLineArray)

    for( let j = 0; j < uniqCurrentLineArray.length; j++ ) {
        let currentLetter = uniqCurrentLineArray[j]
        console.log('>>> current letter: ', currentLetter)
        let regex = new RegExp( currentLetter, 'g' );
        let countOccurence = (lines[i].match(regex) || []).length;
        console.log(('>>> count occurence: ', countOccurence))

        if(countOccurence === 3 && foundType3 === false) {
            type3++
            foundType3 = true
        }
        if(countOccurence === 2 && foundType2 === false) {
            type2++
            foundType2 = true
        }

    }

    console.log('>>> type3 ', type3, '>>> type2 ', type2)
    console.log('>> current line: ', lines[i])

  }

  console.log('>>> checksum is ', type2 * type3)


});



function removeDuplicates(arr){
    let unique_array = []
    for(let i = 0;i < arr.length; i++){
        if(unique_array.indexOf(arr[i]) == -1){
            unique_array.push(arr[i])
        }
    }
    return unique_array
}