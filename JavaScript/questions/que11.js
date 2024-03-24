
// Date 
var now = new Date();

//  year 
var year = now.getFullYear();

//  month as a number? 
var month = now.getMonth() + 1; 

//  date 
var date = now.getDate();

//  day today as a number 
var day = now.getDay();

//  hours 
var hours = now.getHours();

// minutes
var minutes = now.getMinutes();

//  numbers of seconds elapsed from January 1, 1970, to now.
var noseconds = now.getTime() / 1000; 

// Display the results
console.log(now);
console.log("Year today:", year);
console.log("Month today (as a number):", month);
console.log("Date today:", date);
console.log("Day today (as a number):", day);
console.log("Hours now:", hours);
console.log("Minutes now:", minutes);
console.log("Seconds elapsed from January 1, 1970, to now:", noseconds);
