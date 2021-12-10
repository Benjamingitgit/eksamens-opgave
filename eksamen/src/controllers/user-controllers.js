const express = require('express');
const router = express.Router();
const db = require('./../helpers/db.js');
const DEEZ = require('./../helpers/produkter.js');
const fs = require('fs');
const uuid = require("uuid")
const multer = require('multer');
const storage= multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function(req , file, cb){
        cb(null, file.originalname);
    }
});
const upload = multer({storage: storage});
const userModel = require('./../models/user.js');


// router.post('/create', (req, res)=>{
// const user =new userModel(req.body.email, req.body.password);
// console.log(user);
// DB.saveUser(user);
// });


// her laver vi et sted hvior brugeren kan gemme deres data i vores database fil(JSON)
// Vi bruger dbsaveuser til at pushe den information vi får i html body, ind i vores database.
router.post('/create',(req,res,next)=>{
    const {email, password} = req.body;
    const user = { id: uuid.v4(), email, password }

    let foundUser = db.users.find((noget) => req.body.email === noget.email);
    if (!foundUser) {

db.saveUser(user);
    console.log(req.body);
    res.status(200)
    
}
return res.send(('email bliver ')+ user.email + ('   Og koden bliver  ')+ user.password)


//next(res.redirect('/register.html'))

});

// her vil vi kunne logge ind. Det gør vi ved at checke om req.body har en email value, som er en som vi allerede har.
router.post('/login', (req,res, next)=>{
    const {email, password} = req.body;
    const user = { id: uuid.v4(), email, password }

    let foundUser = db.users.find((noget) => req.body.email === noget.email);
if (foundUser) {
    let foundCode = db.users.find((x) => req.body.password == x.password);
    if(foundCode){
        console.log('findes !!!');
        res.send('Du er logget ind')


        // res.status(200).send('kfc')
        // return res.send('y')


    }
    if(!foundCode){
        console.log('findes ikke')
        res.send('Du er I K K E logget ind')

        // res.status(200).send('false')
        // return res.send('n')

    }

}
if (!foundUser){
    console.log('ikke engang emailen findes ')
    res.send('Din bruger findes bare ikke')
}


//return res.redirect('/register.html')

}
)




router.get('/', (req,res) =>{
    res.status(200).send(true);
});


router.delete('/slet', (req,res, next)=>{
    const {email, password} = req.body;
    const user = { id: uuid.v4(), email, password }

    let foundUser = db.users.find((noget) => req.body.email === noget.email);
    if (foundUser){
        db.sletbruger(user)
        res.send('findes')
        

    }
    if (!foundUser){
        res.send('findes ikke')


    }
})

// router.put('/ret', (req,res,next)=>{
//     const user = new userModel(req.body.email, req.body.password);
//     let foundUser = db.users.find((noget) => req.body.email === noget.email);
// if (foundUser){
//     db.updaterbruger(user)
// }
// })
//nu til get request som er svært!!
const dataen = require('./../../data/users.json')
const produkter = require('./../../data/produkter.json')

router.get('/f', (request, response) => {
    return response.send(dataen)
})




//nu til at lave vores put request som er helt klart det sværreste!!

const checkId = (request, response, next) => {
    const { id } = request.params

    const index = dataen.findIndex(user => user.id === id)

    if (index < 0) {
        return response.status(404).json({ message: "findes ikke" })
    }

    request.userIndex = index
    request.userID = id

    next()
}

//her er get til specifikt id!
router.get('/:id',checkId, (request, response, send) => {
const w=dataen.find(c=> c.id=request.params);
const gg=w;
if(w!=undefined){
    return response.send('din email er:  ' + w.email + 'dit password er:  '+w.password)}

})

router.put('/:id', checkId, (request, response) => {
    const { email, password } = request.body
    const index = request.userIndex
    const id = request.userID

    const updateUser = { id, email, password }

    const user = dataen[index] = updateUser
  

dataen.push(updateUser)
db.saveUser(updateUser);
db.slett(user)
db.saveUser(updateUser);


    return response.json(updateUser); 
     
})



const prod = require('./../models/user.js');

// nu  til at lave produkter/varer som man kan sende ind!!! 
// aka den spændende del!
router.post('/nyprodukt', upload.single('produktbillede'), (req,res,next)=>{
    const {pris, kategori, email, } = req.body;
    const produktbillede= req.file.path;
    const produkt = { id: uuid.v4(), kategori, email, pris, produktbillede }


    console.log(req.file);
    console.log(produktbillede);


DEEZ.saveProdukt(produkt);
    console.log(req.body);

    res.status(200)
    

return res.send('sendt produkt uden fejl')


//next(res.redirect('/register.html'))

});

const produktId = (request, response, next) => {
    const { id } = request.params

    const index = produkter.findIndex(produkt => produkt.id === id)

    if (index < 0) {
        return response.status(404).json({ message: "findes ikke" })
    }

    request.userIndex = index
    request.userID = id

    next()
}

//til at  se 1 produkt id 
//her er get til specifikt id!
router.get('/i/:id',produktId, (request, response, send) => {
    const w=produkter.find(c=> c.id=request.params);
    const gg=w;
    if(w!=undefined){
        return response.send('din email er:  ' + w.email + '  Pris:  '+w.pris + '   kategorien er :   '+ w.kategori + '      Billedet kan findes på: .  . .'+w.produktbillede + ' .  .  For at se billede skal du sætte upload/xx.JPG i stedet for /users/i/xxxxx')}
    
    })

//nu en get til at se produkter
router.get('/p', (req,res,next)=>{
produkter.find()
    .select("email pris id produktbillede")
    .exec()
    .then(docs=>{
        const response = {
            count:docs.length,
            produkter: docs.map(doc =>{
                return{
                    email: doc.email,
                    pris: doc.pris,
                    produktbillede: doc.produktbillede,
                    id: doc.id,
                    request: {
                        type: "GET",
                        url: "localhost:8080/users/" + doc.id
                    }
                }
            })
        }
        res.status(200).json(response);

    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
})
// router.delete('/slet', (req,res, next)=>{
//     const {email, password} = req.body;
//     const user = { id: uuid.v4(), email, password }

//     let foundUser = db.users.find((noget) => req.body.email === noget.email);
//     if (foundUser){
//         db.sletbruger(user)
//         res.send('findes')
        

//     }
//     if (!foundUser){
//         res.send('findes ikke')


//     }
// })
// til at slette produkt 
router.delete('/slettt', (req,res, next)=>{
    // const {id} = req.body;
    const {email, pris, kategori, produktbillede, id} = req.body;

    const produkt = { id: uuid.v4(), email, pris, kategori, produktbillede }

    let foundproduct = DEEZ.produkter.find((noget) => req.body.email === noget.email);
    if (foundproduct){
        DEEZ.slettt(produkt)
        res.send('findes:) Det betyder at alle dine produkter er nu døde')
        

    }
    if (!produkt){
        res.send('findes ikke')
        DEEZ.slett(produkt)


    }
})

// // til at opdatere produkter!!
// router.put('/i/:id', produktId, (request, response) => {
//     const {   kategori, pris, email, produktbillede } = request.body
//     const index = request.produktIndex
//     const id = request.produktID

//     const updatevare = { id, kategori, pris, produktbillede , email}

//     const produkt = produkter[index] = updatevare
  
//     produkter.push(updatevare)

// DEEZ.saveProdukt(updatevare);
// DEEZ.slett(produkt)

// // DEEZ.saveProdukt(updatevare);
// // DEEZ.slett(updatevare)




//     return response.json(updatevare); 
     
// })
router.put('/i/:id', produktId, (request, response) => {
    const { email, pris, produktbillede, kategori } = request.body
    const index = request.userIndex
    const id = request.userID

    const updateUser = { id, email, produktbillede, kategori, pris }

    const user = produkter[index] = updateUser
  

produkter.push(updateUser)
DEEZ.saveProdukt(updateUser);
// DEEZ.slett(user)
DEEZ.slett(user)

DEEZ.saveProdukt(updateUser);


    return response.json(updateUser); 
     
})


// nu til at vise en bruger alle deres vare!


const emailid = (request, response, next) => {
    const { email } = request.params

    const index = produkter.findIndex(produkt => produkt.email === email)

    if (index < 0) {
        return response.status(404).json({ message: "mashallah, din bruger findes ikke" })
    }

    request.userIndex = index
    request.useremail = email

    next()
}

//her er get til specifik email!
router.get('/o/:email',emailid, (request, response, send) => {
    const w=produkter.find(c=> c.email=request.params);
    const gg=w;
    if(w!=undefined){
        return response.send('du har produkter. <br></br>'  + '  Pris:  '+w.pris + ' <br></br>  kategorien er :   '+ w.kategori + '     <br></br> Billedet kan findes på: .  . .'+w.produktbillede + ' . <br></br> .  For at se billede skal du sætte upload/xx.JPG i stedet for /users/i/xxxxx')}
    
    })

    // her til at se kategorier

    const kategoriid = (request, response, next) => {
        const { kategori } = request.params
    
        const index = produkter.findIndex(produkt => produkt.kategori === kategori)
    
        if (index < 0) {
            return response.status(404).json({ message: " din kategori findes ikke" })
        }
    
        request.userIndex = index
        request.userkategori = kategori
    
        next()
    }
router.get('/u/:kategori',kategoriid, (request, response, send) => {
    const w=produkter.find(c=> c.kategori=request.params);
    const gg=w;
    if(w!=undefined){
        return response.send('der findes produkter her!. <br></br>'+'id:<br></br>'+gg.id   +'<br></br>email til produkt  . '+gg.email + ' <br></br> Pris:  '+w.pris  + '     <br></br> Billedet kan findes på: .  . .'+ gg.produktbillede + ' . <br></br> .  For at se billede skal du sætte upload/xx.JPG i stedet for /users/u/xxxxx')}
    
    })
module.exports=router;