const express = require('express'); // import express
//const router = express.Router();
const app = express();
//const joi = require('joi'); //import joi
app.use(express.json()); //makes json file i guess
// port og print til at lytte på port :)
const port = process.env.PORT||8080;
app.listen(port, () => console.log(`Server lytter på port  ${port}..`))
// spam til forside

//app.get('/', function(req,res) {
//    res.send('restful api vfirgker');
//})
// denne kode virker pt

console.log('de ting i /views skal bruges som endpoint til vores side!!')

//middelware 
// de ting i /views skal bruges som endpoint til vores side!!
app.use(express.static('./src/views'));

app.use('/uploads', express.static('uploads'));

//controllers
const userController = require('./src/controllers/user-controllers.js');
app.use('/users', userController)
 
app.get('/' , (req,res)=>{
    res.send('wow serveren virker lidt')
})
//Routes
app.use('/user', userController);
app.post('/user', userController);

