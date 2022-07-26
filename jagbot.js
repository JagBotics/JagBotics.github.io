let test = document.getElementById("test");

// This handler will be executed only once when the cursor
// moves over the unordered list
test.addEventListener("mouseenter", function( event ) {
  // highlight the mouseenter target
  event.target.style.opacity = ".3";
  var elem = document.getElementById('tester');
  elem.style.visibility = "visible";
  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.opacity = "1";
    elem.style.visibility = "hidden"
  }, 1500);
}, false);


let testTwo = document.getElementById("testTwo");

// This handler will be executed only once when the cursor
// moves over the unordered list
testTwo.addEventListener("mouseenter", function( event ) {
  // highlight the mouseenter target
  event.target.style.opacity = ".3";
  var elem = document.getElementById('testerTwo');
  elem.style.visibility = "visible";
  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.opacity = "1";
    elem.style.visibility = "hidden"
  }, 1500);
}, false);


let testThree = document.getElementById("testThree");

// This handler will be executed only once when the cursor
// moves over the unordered list
testThree.addEventListener("mouseenter", function( event ) {
  // highlight the mouseenter target
  event.target.style.opacity = ".3";
  var elem = document.getElementById('testerThree');
  elem.style.visibility = "visible";
  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.opacity = "1";
    elem.style.visibility = "hidden"
  }, 1500);
}, false);


let testFour = document.getElementById("testFour");

// This handler will be executed only once when the cursor
// moves over the unordered list
testFour.addEventListener("mouseenter", function( event ) {
  // highlight the mouseenter target
  event.target.style.opacity = ".3";
  var elem = document.getElementById('testerFour');
  elem.style.visibility = "visible";
  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.opacity = "1";
    elem.style.visibility = "hidden"
  }, 1500);
}, false);

testFive.addEventListener("mouseenter", function( event ) {
  // highlight the mouseenter target
  event.target.style.opacity = ".3";
  var elem = document.getElementById('testerFive');
  elem.style.visibility = "visible";
  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.opacity = "1";
    elem.style.visibility = "hidden"
  }, 1500);
}, false);