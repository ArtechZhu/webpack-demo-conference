const path = require("path");
console.log("__dirname= "+__dirname);
console.log("__filename= "+__filename);

console.log("path.join= "+path.join("/A/B/C","/1/2/3","/h1/h2/h3"));
console.log("path.resolve= "+path.resolve("./A/B/C","..","./h1/h2/h3"));
console.log("path.relative= "+path.relative("/A/B/C","/A/2/3"));