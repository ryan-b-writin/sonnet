// Take the contents of the sonnet div and place it in a variable
var sonnet = document.getElementById("sonnet").innerHTML;

// Find and output the starting position of the word "orphans"
var orphans = sonnet.indexOf("orphans");
console.log("orphan index is a good metal band name", orphans);


// Output the number of characters in the sonnet
var longSonnet = sonnet.length;
console.log("sonnet length is ", longSonnet);


// Replace the first occurance of the string "winter" with "yuletide"
var yule = sonnet.replace("winter", "yuletide");
console.log("here's the new sonnet", yule);

// Replace all occurances of the string "the" with "a large"
var large = sonnet.replace(/the(\b)/g, "a large");
console.log("changed it again", large);


// Set the content of the sonnet div with the new string
document.getElementById("sonnet").innerHTML = large;
