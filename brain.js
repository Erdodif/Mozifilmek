class Film{
    #nev
    #rendezo
    #kiadasEv
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

function getValueById(id){
    return document.getElementById(id).value
}

function setValueById(id,value){
    document.getElementById(id).value = value
}

function filmHozzaAd(){
    let nev = getValueById("filmNev")
    let rendezo = getValueById("filmRendezo")
    let kiadasEv = getValueById("filmKiadasEv")
    try{
        let film = new Film(nev,rendezo,kiadasEv)
        filmTomb.push(film)
    }
    catch(e){
        console.error(e)
    }
    setValueById("filmNev","")
    setValueById("filmRendezo","")
    setValueById("filmKiadasEv","")
    kilistaz()
}

function kartyasit(film){
    return `
    <div class="kartya">
        <div class="cim">
            ${film.getNev()}
        </div>
        <div>
            Rendező: ${film.getRendezo()}
            <br/>
            Kiadás éve: ${film.getKiadasEv()}
        </div>
    </div>\n`
}

function kilistaz(){
    let lista = document.getElementById("lista")
    let kiad = ""
    for (const film of filmTomb){
        kiad += kartyasit(film) 
    }
    lista.innerHTML = kiad
}

function init(){
    document.getElementById("gomb_Hozzaad").addEventListener("click",filmHozzaAd)
}