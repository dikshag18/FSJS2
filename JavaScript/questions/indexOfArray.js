// Declare an array containing multiple values
var valuesArray = ["Java", "Python", "JavaScript", "C++", "pw skills", "pw skills", "pw skills", "Ruby"];

// Use lastIndexOf to determine the position of the first occurrence of "pw skills"
var firstOccurrenceIndex = valuesArray.indexOf("pw skills");

// Use lastIndexOf to determine the position of the last occurrence of "pw skills"
var lastOccurrenceIndex = valuesArray.lastIndexOf("pw skills");

// Output the positions
console.log("First occurrence of 'pw skills' is at index:", firstOccurrenceIndex);
console.log("Last occurrence of 'pw skills' is at index:", lastOccurrenceIndex);
