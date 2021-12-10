const fs = require('fs');

//const USER_F = fs.readFileSync("./userss.json");
const userss = require("./userss.json");
let ord = { "dang": "yo"};
userss.push(ord);

var sord = JSON.stringify(ord, null, 2);
fs.writeFileSync(USER_F, sord, 'utf8')
//const file = fs.readFileSync(USER_F, 'utf8');
//return JSON.parse(file);

