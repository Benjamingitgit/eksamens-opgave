const fs = require('fs');
const { userInfo } = require('os');

//const ABSOLUTE_PATH = "/../../data/users.json";
const USER_FILE = ("./users.json", {root:__dirname} );

//const USER_F = "./src/helpers/users.json";



//const USER_F = "./users.json";
//fs.readFile(USER_F,'utf-8', function (err, data) {
  //  if (err) throw err;
    //console.log(data);
  //});
  //Dette over er for at få normal "node" i consollen til at virker for denne fil specifikt. Efter det blevv løst, er der den rigtige kode under

  fs.readFile(USER_F,'utf-8', function (err, data) {
    if (err) throw err;
    console.log(data);
  });
  // nu ved vi at vi kan læse data fra vores USER.JSON dokument, og vi kan arbejde videre via fs.







module.exports = new DB();
