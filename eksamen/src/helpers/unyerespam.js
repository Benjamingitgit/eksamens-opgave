const fs = require("fs");
   


// STEP 1: Reading JSON file
const users = require("./users");
   
// Defining new user
let user = {
    email: "ben@gmail.com",
    password: "pass"
};
   
fruser.push(users);

// Read users.json file
fs.readFile("./users.json", function(err, data) {
      
    // Check for errors
    if (err) throw err;
   
    // Converting to JSON
    const users = JSON.parse(data);
      
    console.log(users); // Print users 
});