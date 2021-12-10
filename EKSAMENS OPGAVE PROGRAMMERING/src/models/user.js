class User{
    constructor(email, password, id) {
        this.email = email;
        this.password = password ;
        this.id = uuid.v4();
    }
};

class produkt{
    constructor(kategori, pris, id, email) {
        this.kategori = kategori;
        this.pris = pris ;
        this.email = email;
        this.id = uuid.v4();
        this.billede = produktbillede;
    }
}
module.exports = User, produkt;
