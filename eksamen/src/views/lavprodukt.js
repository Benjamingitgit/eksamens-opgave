// document.addEventListener("DOMContentLoaded",(event)=>{


//     document.getElementById('formss').addEventListener('submit', function(g ){
//        g.preventDefault();
//        alert('ser om koden virker')
   
//    // var mail = document.getElementById('email').value
//    // var kode = document.getElementById('password').value
   
//    var mail = document.getElementById('email').value;
//    var pris = document.getElementById('pris').value;
//    var kategori = document.getElementById('kategori').value;

//    const produkt = {
//     kategori: kategori,
//    pris: pris,
//    email: mail,
//    }
//    alert(JSON.stringify(produkt))

   
//  fetch('users/nyprodukt', {
//    method: 'POST',
//    headers: {
//    'Accept': 'application/json',
//    'Content-Type': 'application/json; charset=UTF-8'
//    },
//    body: JSON.stringify(produkt)
//    })
//    alert(JSON.stringify(produkt))




   
//    alert('ser om kodwen virker)')
//    ();      
   
//    })})
   



//    function index() {
//    location.href=("/index.html")   
//    }
   
//DEN KODE SOM VIRKER, BARE UDEN ASYNC
document.addEventListener("DOMContentLoaded",(event)=>{
    document.getElementById('formss').addEventListener('submit', function(g){
        g.preventDefault();
        alert('ser om koden virker)')
        const mail = document.getElementById('email').value;
        const pris = document.getElementById('pris').value;
        const kategori = document.getElementById('kategori').value
        const produktbillede = document.getElementById('myFile').value
alert(produktbillede)

        const produkt = {
            email: mail,
            pris: pris,
            kategori: kategori,
            produktbillede: produktbillede,
                    };
                    const data = new FormData()
                    data.append('email', mail)
                    data.append('pris', pris)
                    data.append('kategori', kategori)
                    data.append('produktbillede', produktbillede)

                    
                    alert(JSON.stringify(produkt))
alert(JSON.stringify(Object.fromEntries(data)));
console.log(data)
                //   fetch('users/nyprodukt', {
                //         method: 'POST',
                //         headers: {
                //         'Accept': 'application/json',
                //         'Content-Type': 'application/json; charset=UTF-8'
                //         },
                //         body: JSON.stringify(produkt)
                //         })
                        fetch('users/nyprodukt', {
                            method: 'POST',
                            // headers: {
                                // "Content-Type": "multipart/form-data", "boundary"------"."
                                        // 'Accept': 'application/json',
                                        // 'Content-Type': 'application/json; charset=UTF-8'
                                        // },
                            body: data
                            })    

                    
                    })





                        // .then(function (response) {
                        //     return response.text();
                            
                        //     })
                        //     .then(function (text) {
                        //     let i = console.log(text)
                        //     alert(text);
                        //     if(text==="findes"){
                        //         alert('wow, din email og kode ord er nu slettet fra vores datebase');
                        //         location.href=("/index.html")
                        //     };
                         
                        //      if(text==="findes ikke"){
                        //          alert('du har skrevet en mail som ikke findes')}
                        
                    
                })
    
    
    function index() {
        location.href=("/index.html")   
        }