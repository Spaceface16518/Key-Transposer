const Transpose = {}

/*
var keyOffset;
var newNote;
var numericalNoteValue;
*/

Transpose.transpose = function (note, key) {
  /*
  let keyOffset = KeyOffset(key);
  let noteNumber = convertNoteToNumber(note);
  keyOffset = keyOffset % 10;
  noteNumber = noteNumber + keyOffset;
  return noteNumber;
  */

  /*
  keyOffset = KeyOffset(key); // the keyoffset variable is commented out
  noteNumber = convertNoteToNumber(note);
  for (var i = 0; i < keyOffset; i++) {
    if (noteNumber > 10) {
      noteNumber = 0;
    } else {
      noteNumber += 1;
    }
  }
newNote = convertNumberToNote(noteNumber);
console.log(newNote);
return newNote;
*/

}

Transpose.setKeyOffset = function (key) {
  switch (key) {
    case 'A':
      keyOffset = 8
      break;
    case 'B flat':
    case 'Bb':
      keyOffset = 9
      break;
    case 'B':
      keyOffset = 10
      break;
    case 'C':
      keyOffset = 0
      break;
    case 'Db':
    case 'D flat':
      keyOffset = 1
      break;
    case 'D':
      keyOffset = 2
      break;
    case 'Eb':
    case 'E flat':
      keyOffset = 3
      break;
    case 'E':
      keyOffset = 4
      break;
    case 'F':
      keyOffset = 5
      break;
    case 'G':
      keyOffset = 6
      break;
    case 'Ab':
    case 'A flat':
      keyOffset = 7
      break;
    default:
      console.log('invalid key ' + key);
  }
  return keyOffset;
}

Transpose.convertNoteToNumber = function (note) {
  switch (note) {
    case 'A':
      numericalNoteValue = -3
      break;
    case 'B flat':
    case 'Bb':
      numericalNoteValue = -2
      break;
    case 'B':
      numericalNoteValue = -1
      break;
    case 'C':
      numericalNoteValue = 0
      break;
    case 'Db':
    case 'D flat':
      numericalNoteValue = 1
      break;
    case 'D':
      numericalNoteValue = 2
      break;
    case 'Eb':
    case 'E flat':
      numericalNoteValue = 3
      break;
    case 'E':
      numericalNoteValue = 4
      break;
    case 'F':
      numericalNoteValue = 5
      break;
    case 'G':
      numericalNoteValue = 6
      break;
    case 'Ab':
    case 'A flat':
      numericalNoteValue = 7
      break;
    default:
      console.log('error transposing note into a numerical value');
  }
  return numericalNoteValue;
}

Transpose.convertNumberToNote = function (number) {
  // TODO: add this function
}
module.exports = Transpose;