document.addEventListener("DOMContentLoaded",(event)=>{

 document.getElementById('forms').addEventListener('submit', function(g){
    g.preventDefault();
    alert('ser om koden virker)')


const mail = document.getElementById('email').value;
const kode = document.getElementById('password').value;

const user = {
email: mail,
password: kode,
};


(async function re () {
const response = await fetch('users/create', {
method: 'POST',
headers: {
'Accept': 'application/json',
'Content-Type': 'application/json; charset=UTF-8'
},
body: JSON.stringify(user)
})

.then(function (response) {
return response.text();

})
.then(function (text) {
console.log(text)
alert(text);
alert('Tillykke med at have oprettet en bruger, nu kan du gå til log-in og logge ind')
if (text){
location.href=("/index.html")   }

}).catch(function(error){
console.error(error); 
})

})();      

})})

function tjek() {
    if(localStorage.getItem("navn") != null) {
 alert('Du er allerede logget ind!!!')  }
 if(localStorage.getItem("navn") === null) {
     alert('Du er ikke logget ind. Prøv at logge ind eller registrer')  
 
    }
     }
     function fjern(){
         localStorage.removeItem('navn')
         if(localStorage.getItem('navn')===null){
             alert('Du er nu officielt logget ud')
         }
     }
//     fetch("/users/create", {
//         method: 'POST',
//         // body:JSON.stringify({
//         //     email:mail,
//         //     password:kode
//         // }),
//         body: JSON.stringify(user),

//         headers:{
//             "Content-Type": "application/json; charset=UTF-8"
//         }}
// )

// .then(response => response.json())
// .then(data => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });
// // location.href=("/login.html")   

// })
// function y(
// var form = document.getElementById('form')
//         form.addEventListener('submit', function(q){
//             if (q){
//             location.href='/login.html'=
//         }})
function index() {
location.href=("/index.html")   
}











// document.addEventListener('DOMcontentLoaded', (event)=>{
//     document.getElementById('form').addEventListener('submit', (event)=>{
//         event.preventDefault();



//         const user={
//             email: document.getElementById('password').value,
//             password: document.getElementById('password').value

//         };
//             <button onclick="registrer()">registrer her</button>


//     fetch('localhost:8080/users/create', {
//         METHOD: 'POST',
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(user),
//     })
//     .then((resonse)=> response.json())
//     .then((response)=>{
// if(response) {
//     location.href='/login.html'; }
// })
//     .catch(()=> {
//         window.alert('fucked up');
//     });
// });
// })
