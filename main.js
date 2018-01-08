import * as DynamicStyle from "./modules/dynamic-style.jquery.js";
import * as Transpose from "./modules/transpose.js";
import * as Write from "./modules/write.js";
import * as Receive from "./modules/receive.js"

// onload functions are wrapped in a document ready jquery statement
$(document).ready(function () {

  /*
  let pageSource = './modules/dropdown.html';
  $("#dropdown").html(); // TODO: add a way for the page above to be recited in this function
  */

  console.log("page ready");
  
  DynamicStyle.setDynamicStyle() // Experimental JQuery style function
});

$("#submit").clicked(function () {
  let note = Receive.receiveNote();
  let key = Receive.receiveKey();
  let newNote = Transpose.transpose(note, key)
  console.log(newNote);
  Write.write(newNote);
});