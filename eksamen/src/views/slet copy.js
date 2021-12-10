// document.addEventListener("DOMContentLoaded",(event)=>{
// document.getElementById('formsdelete').addEventListener('submit', function(g){
//     g.preventDefault();
//     alert('ser om koden virker)')
//     const mail = document.getElementById('email').value;
//     const user = {
//         email: mail
//                 };
//                 alert(JSON.stringify(user))

//                 (async function  () {
//                     const response = await fetch('users/slet', {
//                     method: 'DELETE',
//                     headers: {
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/json; charset=UTF-8'
//                     },
//                     body: JSON.stringify(user)
//                     } )


                    
                            
//                         // .then(function (res) {
//                         //     if(res==="BRUGER FINDES"){
//                         //       alert('ok')
//                         //      )};
                         
//                            })
//                            .then(function (response) {
//                             return response.text();
//                         })
//             })

// })





//DEN KODE SOM VIRKER, BARE UDEN ASYNC
document.addEventListener("DOMContentLoaded",(event)=>{
    document.getElementById('formsdelete').addEventListener('submit', function(g){
        g.preventDefault();
        alert('ser om koden virker)')
        const mail = document.getElementById('email').value;
        const user = {
            email: mail
                    };
                    alert(JSON.stringify(user))
    
                  fetch('users/slettt', {
                        method: 'DELETE',
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
                            let i = console.log(text)
                            alert(text);
                            if(text==="findes"){
                                alert('wow, alle produkter assosieret med denne email er nu døde');
                                location.href=("/index.html")
                            };
                         
                             if(text==="findes ikke"){
                                 alert('du har skrevet en mail som ikke findes')}
                        
                    
                })
    
    })
})




//     //DEN KODE SOM VIRKER, BARE UDEN ASYNC
// document.addEventListener("DOMContentLoaded",(event)=>{
//     document.getElementById('formsdelete').addEventListener('submit', function(g){
//         g.preventDefault();
//         alert('ser om koden virker)')
//         const mail = document.getElementById('email').value;
//         const user = {
//             email: mail
//                     };
//                     alert(JSON.stringify(user))
    
//                   fetch('users/slet', {
//                         method: 'DELETE',
//                         headers: {
//                         'Accept': 'application/json',
//                         'Content-Type': 'application/json; charset=UTF-8'
//                         },
//                         body: JSON.stringify(user)
//                         })
                        
                        
                    
//                 })
    
//     })