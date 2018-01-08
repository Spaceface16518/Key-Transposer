import * as DynamicStyle from "./modules/dynamic-style.jquery.js";
import * as Transpose from "./modules/transpose.js";
import * as Write from "./modules/write.js";
import * as Receive from "./modules/receive.js"

// onload functions are wrapped in a document ready jquery statement
$(document).ready(function () {
  console.log("page ready");


  
  DynamicStyle.setDynamicStyle() // Experimental JQuery style function
  console.log("Onload functions completed");
});

$("#submit").clicked(function () {
  console.log("Submit button pressed, signal received");
  let note = Receive.receiveNote();
  let key = Receive.receiveKey();
  let newNote = Transpose.transpose(note, key)
  console.log(newNote);
  Write.write(newNote);
});