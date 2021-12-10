// const express = require('express');
// const router = express.Router();
// const db = require('./../helpers/db.js');
// const DEEZ = require('./../helpers/produkter.js');
// const fs = require('fs');
// const uuid = require("uuid")
// const multer = require('multer');
// const upload = multer({dest: '/uploads'})

// const userModel = require('./../models/user.js');


// // router.post('/create', (req, res)=>{
// // const user =new userModel(req.body.email, req.body.password);
// // console.log(user);
// // DB.saveUser(user);
// // });


// // her laver vi et sted hvior brugeren kan gemme deres data i vores database fil(JSON)
// // Vi bruger dbsaveuser til at pushe den information vi får i html body, ind i vores database.
// router.post('/create',(req,res,next)=>{
//     const {email, password} = req.body;
//     const user = { id: uuid.v4(), email, password }

//     let foundUser = db.users.find((noget) => req.body.email === noget.email);
//     if (!foundUser) {

// db.saveUser(user);
//     console.log(req.body);
//     res.status(200)
    
// }
// return res.send(('email bliver ')+ user.email + ('   Og koden bliver  ')+ user.password)


// //next(res.redirect('/register.html'))

// });

// // her vil vi kunne logge ind. Det gør vi ved at checke om req.body har en email value, som er en som vi allerede har.
// router.post('/login', (req,res, next)=>{
//     const {email, password} = req.body;
//     const user = { id: uuid.v4(), email, password }

//     let foundUser = db.users.find((noget) => req.body.email === noget.email);
// if (foundUser) {
//     let foundCode = db.users.find((x) => req.body.password == x.password);
//     if(foundCode){
//         console.log('findes !!!');
//         res.send('Du er logget ind')


//         // res.status(200).send('kfc')
//         // return res.send('y')


//     }
//     if(!foundCode){
//         console.log('findes ikke')
//         res.send('Du er I K K E logget ind')

//         // res.status(200).send('false')
//         // return res.send('n')

//     }

// }
// if (!foundUser){
//     console.log('ikke engang emailen findes ')
//     res.send('Din bruger findes bare ikke')
// }


// //return res.redirect('/register.html')

// }
// )




// router.get('/', (req,res) =>{
//     res.status(200).send(true);
// });


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

// // router.put('/ret', (req,res,next)=>{
// //     const user = new userModel(req.body.email, req.body.password);
// //     let foundUser = db.users.find((noget) => req.body.email === noget.email);
// // if (foundUser){
// //     db.updaterbruger(user)
// // }
// // })
// //nu til get request som er svært!!
// const dataen = require('./../../data/users.json')
// const produkter = require('./../../data/produkter.json')

// router.get('/f', (request, response) => {
//     return response.send(dataen)
// })




// //nu til at lave vores put request som er helt klart det sværreste!!

// const checkId = (request, response, next) => {
//     const { id } = request.params

//     const index = dataen.findIndex(user => user.id === id)

//     if (index < 0) {
//         return response.status(404).json({ message: "findes ikke" })
//     }

//     request.userIndex = index
//     request.userID = id

//     next()
// }

// //her er get til specifikt id!
// router.get('/:id',checkId, (request, response, send) => {
// const w=dataen.find(c=> c.id=request.params);
// const gg=w;
// if(w!=undefined){
//     return response.send('din email er:  ' + w.email + 'dit password er:  '+w.password)}

// })

// router.put('/:id', checkId, (request, response) => {
//     const { email, password } = request.body
//     const index = request.userIndex
//     const id = request.userID

//     const updateUser = { id, email, password }

//     const user = dataen[index] = updateUser
  

// dataen.push(updateUser)
// db.saveUser(updateUser);
// db.slett(user)
// db.saveUser(updateUser);


//     return response.json(updateUser); 
     
// })




// // nu  til at lave produkter/varer som man kan sende ind!!! 
// // aka den spændende del!
// router.post('/nyprodukt',(req,res,next)=>{
//     const {pris, kategori, email} = req.body;
//     const produkt = { id: uuid.v4(), kategori, email, pris }



// DEEZ.saveProdukt(produkt);
//     console.log(req.body);
//     res.status(200)
    

// return res.send('sendt produkt uden fejl')


// //next(res.redirect('/register.html'))

// });


// module.exports=router;