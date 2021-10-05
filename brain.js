class Film{
    constructor(nev, rendezo, kiadasEv){
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