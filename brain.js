class Film{
    constructor(nev, rendezo, kiadasEv){
        if (isNaN(kiadasEv)){
            throw new Error("A kiadás éve nem szám (╯ ͡❛ ⏥ ͡❛)╯┻━┻")
        }
        this.#nev = nev
        this.#rendezo = rendezo
        this.#kiadasEv = kiadasEv
    }
    getNev(){
        return this.#nev
    }
    getRendezo(){
        return this.#rendezo
    }
    getKiadasEv(){
        return this.#kiadasEv
    }
}

let filmTomb = []
function filmHozzaAd(){
    let nev = document.getElementById("filmNev").value
    let rendezo = document.getElementById("filmRendezo").value
    let kiadasEv = document.getElementById("filmKiadasEv").value
    try{
        let film = Film(nev,rendezo,kiadasEv)
        filmTomb.push(film)
    }
    catch(e){
        console.error(e)
    }
}