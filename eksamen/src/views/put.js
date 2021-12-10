//DEN KODE SOM VIRKER, BARE UDEN ASYNC
document.addEventListener("DOMContentLoaded",(event)=>{
    document.getElementById('formsput').addEventListener('submit', function(g){
        g.preventDefault();
        alert('ser om koden virker)')
        const id = document.getElementById('id').value;
        const mail = document.getElementById('nyemail').value;
        const kode = document.getElementById('nypassword').value;
        const user = {
            email: mail,
            password:kode,
                            };
                    alert(JSON.stringify(user))
    
                  fetch("/user/"+id, {
                        method: 'PUT',
                        headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json; charset=UTF-8'
                        },
                        body: JSON.stringify(user)
                        })




    
    })

})
function index() {
    location.href=("/index.html")   
    }