const fs = require('fs');
const ABSOLUTE_PATH = "./data";
const bodyparser = 'body-parser';
const userprodukter = "/produkter.json";
const frprodukter = './data/produkter.json';

class DEEZ{
    constructor(){
      this.produkter = this.openFile(userprodukter);
    }
  saveFile(fileName,contentString){
       fs.writeFileSync(ABSOLUTE_PATH + fileName, contentString,);
  }
  openFile(fileName){
    const file = fs.readFileSync(ABSOLUTE_PATH+fileName);
  return JSON.parse(file)
  }
//sender/ pusher produkt til database
saveProdukt(produkt){


      this.produkter.push(produkt);
      this.saveFile(userprodukter, JSON.stringify(this.produkter));
    return true;
    }
//slet produkt
slett(produkt){
  this.produkter = this.produkter.filter((noget)=> noget.id != produkt.id);
  this.saveFile(userprodukter, JSON.stringify(this.produkter));
  }
  slettt(produkt){
    this.produkter = this.produkter.filter((noget)=> noget.email != produkt.email);
    this.saveFile(userprodukter, JSON.stringify(this.produkter));
    }
  // slet brugeren
sletpro(produkt){
  this.produkt = this.produkter.filter((noget)=> noget.id != produkt.id);
  this.saveFile(userprodukter, JSON.stringify(this.produkter));
  }


} 
fs.readFile(ABSOLUTE_PATH + userprodukter, 'utf8',function (err, data) {
    if (err) throw err;
    console.log(data);
  });
 
  module.exports = new DEEZ();
 