var keyOffset;
var newNote;
function setKey(key) {
  switch (key) {
    case 'A':
      keyOffset = -3
      break;
    case 'B flat':
    case 'Bb':
      keyOffset = -2
      break;
  }
}

function transpose(note) {
newNote = note + keyOffset;
}
