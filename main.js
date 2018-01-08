// onload functions are wrapped in a document ready jquery statement
$(document).ready(function () {
  let pageSource = './modules/dropdown.html';
  $("#dropdown").html(); // TODO: add a way for the page above to be recited in this function

  setDynamicStyle() // Experimental JQuery style function
});

$("#submit").clicked(function () {

  let note = Receive.receiveNote;
  let key = Receive.receiveKey;
  let newNote = Transpose.transpose(note, key)
  console.log(newNote);
  Write.write(newNote);

});