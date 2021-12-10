var fs = require('fs');
const ABSOLUTE_PATH = "./data";
const bodyparser = 'body-parser';
const userfilee = "/users.json";
const fruser = './data/users.json';
class DB{
  constructor(){
    this.users = this.openFile(userfilee);
  }
  //gemmer til database
saveFile(fileName,contentString){
     fs.writeFileSync(ABSOLUTE_PATH + fileName, contentString, );
}


 checkId = (request, response, next) => {
  const { id } = request.params

  const index = this.users.findIndex(x => x.id = request.params)
  if (index < 0) {
    return response.status(404).json({ message: "User not found" })
}

  next()
}



openFile(fileName){
  const file = fs.readFileSync(ABSOLUTE_PATH+fileName);
return JSON.parse(file)
}
findesDet(user){
  return this.users.find((data)=> user.email=data.email)
}
//login og push user til database
saveUser(user){
  this.users.push(user);
  this.saveFile(userfilee, JSON.stringify(this.users));
return true;
}


// slet brugeren
sletbruger(user){
  this.users = this.users.filter((noget)=> noget.email != user.email);
  this.saveFile(userfilee, JSON.stringify(this.users));
  }

  slett(user){
    this.users = this.users.filter((noget)=> noget.id != user.id);
    this.saveFile(userfilee, JSON.stringify(this.users));
    }


// opdater
updaterbruger(user){
  this.users = this.users.replace((noget)=> noget.email = user.email);
  this.saveFile(userfilee, JSON.stringify(this.users));
  }


}

//save file
// saveFile(fileName,contentString){
  // fs.writeFileSync(ABSOLUTE_PATH+fileName, contentString);
// }
// class DB {
//   constructor() {
//  this.users = this.openFile(ABSOLUTE_PATH+'/users.json');
// }

// //save
// saveFile(fileName, contentString) {
//     fs.writeFileSync(ABSOLUTE_PATH, fileName, contentString);
// }

fs.readFile(ABSOLUTE_PATH + userfilee, 'utf8',function (err, data) {
  if (err) throw err;
  console.log(data);
});

module.exports = new DB();
