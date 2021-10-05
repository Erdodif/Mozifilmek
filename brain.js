class Film{
    #nev
    #rendezo
    #kiadasEv
    constructor(nev, rendezo, kiadasEv){
        if (isNaN(kiadasEv) || kiadasEv ===""){
            throw new Error("A kiadás éve nem szám\n (╯ ͡❛ ⏥ ͡❛)╯┻━┻")
        }
        if(nev === ""){
            throw new Error("Üres név nem elfogadható\n  ͠─ _⦣ ͠─ ")
        }
        if(rendezo === ""){
            throw new Error("Üres rendező nem elfogadható\n  ͠ ͠ಠ _⦣ ͠ಠ ")
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
        alert(e)
    }
    setValueById("filmNev","")
    setValueById("filmRendezo","")
    setValueById("filmKiadasEv","")
    kilistaz()
}

function kartyasit(film,id){
    return `
    <div class="kartya" id="${id}">
        <div class="cim">
            ${film.getNev()}
        </div>
        <div class="rendezo">
            Rendező: ${film.getRendezo()}
        </div>
        <div class="kiadas">  
            Kiadás éve: ${film.getKiadasEv()}
        </div>
    </div>\n`
}

function rendez(tulajdonsag){
    console.log(`Rendezés: ${tulajdonsag}`)
    for(let i = filmTomb.length-1; i > -1; i--){
        for(let j = 0; j < i; j++){
            let nagyobb = (tulajdonsag === "filmNev" && (filmTomb[j].getNev().toLowerCase() < filmTomb[j+1].getNev().toLowerCase()))
            nagyobb = nagyobb || (tulajdonsag === "filmRendezo" && filmTomb[j].getRendezo().toLowerCase() > filmTomb[j+1].getRendezo().toLowerCase())
            nagyobb = nagyobb || (tulajdonsag === "filmKiadasEv" && filmTomb[j].getKiadasEv() < filmTomb[j+1].getKiadasEv())
            if (nagyobb){
                let x = filmTomb[j]
                filmTomb[j] = filmTomb[j+1]
                filmTomb[j+1] = x
            }
        }
    }
    kilistaz()
}

function kilistaz(){
    let lista = document.getElementById("lista")
    let kiad = "<div class='cim'>Filmek</div>"
    for(let i = 0; i < filmTomb.length; i++){
        kiad += kartyasit(filmTomb[i],`film_${i}`) 
    }
    lista.innerHTML = kiad
    gombFelruhaz()
}

function gombFelruhaz(){
    for(const kartya of document.getElementsByClassName("kartya")){
        kartya.getElementsByClassName("cim")[0].addEventListener("click",()=>rendez("filmNev"))
        kartya.getElementsByClassName("rendezo")[0].addEventListener("click",()=>rendez("filmRendezo"))
        kartya.getElementsByClassName("kiadas")[0].addEventListener("click",()=>rendez("filmKiadasEv"))
    }
}

function init(){
    document.getElementById("gomb_Hozzaad").addEventListener("click",filmHozzaAd)
}