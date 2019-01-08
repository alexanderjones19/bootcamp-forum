let commonmark = require('commonmark');

let reader = new commonmark.Parser();
let writer = new commonmark.HtmlRenderer();


let parsed = reader.parse("Hello *world* \n### potato"); // parsed is a 'Node' tree


// transform parsed if you like...
let result = writer.render(parsed); // result is a String

console.log(result);