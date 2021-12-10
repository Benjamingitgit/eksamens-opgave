//DEN KODE SOM VIRKER, BARE UDEN ASYNC
document.addEventListener("DOMContentLoaded",(event)=>{
    document.getElementById('formsput').addEventListener('submit', function(g){
        g.preventDefault();
        alert('ser om koden virker)')
        const id = document.getElementById('id').value;
        const mail = document.getElementById('nyemail').value;
        const pris = document.getElementById('nypris').value;
        const kategori = document.getElementById('nykategori').value;
        const produktbillede = document.getElementById('nyproduktbillede').value;

        const user = {
            email: mail,
            pris:pris,
            kategori:kategori,
            produktbillede: produktbillede,
                            };
                    alert(JSON.stringify(user))
    
                  fetch("/user/i/"+id, {
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