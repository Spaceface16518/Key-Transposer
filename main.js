import * as DynamicStyle from "./modules/dynamic-style.jquery.js";
import * as Transpose from "./modules/transpose.js";
import * as Write from "./modules/write.js"
// onload functions are wrapped in a document ready jquery statement
$(document).ready(function() {
  let pageSource = './modules/dropdown.html';
  $("#dropdown").html(); // TODO: add a way for the page above to be recited in this function

  setDynamicStyle() // Experimental JQuery style function
});
