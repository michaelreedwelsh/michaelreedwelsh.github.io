//Problem: It look gross in smaller browser widths and small devices
//Solution: To hide the text links and swap them out with a more appropriate navigation

//creat menu and append
var $dropdown = $("<select></select>");
$("#menu").append($dropdown);

//cycle through menu links
$("#menu a").each(function() {
  var $anchor = $(this);
  //create an option
  var $option = $("<option></option>");
  //options text is the text of link
  var $anchorText = $anchor.text();
  $option.text($anchorText);
  //options value is href
  $option.val($anchor.attr('href'));
  //append options to menu
  $dropdown.append($option);
});

// Making the sun rotate on mouseover!!!!

//deal with selected options depending on the current page

  
  
  

//create button
// var $button = $("<button>Go</button>");
//$("#menu").append($button);

//bind click to button
$dropdown.change(function() {
  //go to select's location
  window.location = $dropdown.val();
  
  
}); 
  


//modify css to hide links on small size and show button and select
  //also hides the select on larger screens

