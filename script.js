//^ ESERCIZIO FACOLTATIE 
//* 1. Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.

//* 2. Stampare a schermo attraverso un ciclo for (o eventualmente con for-in) tutte le proprietà dell'oggetto.

//* 3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte).

let studenti = [
    {
        nome:"Ana",
        cognome:"Japaridze",
        età:26
    },
    {
        nome:"Ana",
        cognome:"Japaridze",
        età:26
    },
    {
        nome:"Ana",
        cognome:"Japaridze",
        età:26
    },
    {
        nome:"Ana",
        cognome:"Japaridze",
        età:26
    },
    {
        nome:"Ana",
        cognome:"Japaridze",
        età:26
    },
    {
        nome:"Ana",
        cognome:"Japaridze",
        età:26
    }
];



function stampareProprietà(oggetto){
    for(let elemento in oggetto){
        console.log(elemento);
    }
}
stampareProprietà(studenti[0]);




//* 4. Ciclare su tutti gli studenti e stampare per ognuno di essi: nome e cognome.

function stampareNomeCognomeStudenti(array){
for(let elemento of array){
    console.log(elemento.nome);
    console.log(elemento.cognome);
}
}

//* 5. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere all’array creato in precedenza, un nuovo oggetto studente inserendo nell’ ordine: nome, cognome e età.

inserisciStudente(studenti);

function inserisciStudente(array){
let nomeInserito;
let cognomeInserito;
let etàInserita;

    do{
         nomeInserito = prompt("inserisci il nome dello studente");
    }while(!validInsertion(nomeInserito,"text"));
    
    do{
        cognomeInserito = prompt("inserisci il cognome dello studente");
   }while(!validInsertion(cognomeInserito,"text"));

   do{
    etàInserita = prompt("inserisci l'età dello studente");
}while(!validInsertion(etàInserita,"number"));

    let studente = {
        nome: `${nomeInserito}`,
        cognome: `${cognomeInserito}`,
        età: `${etàInserita}`,
    }
array.push(studente);
console.log("inserzione eseguita con successo!");
}



// function isText(input){
//     if(input.trim()=="" || typeof input != "string"){
//     return false
//     } else {
//         return true
//     }
//     }
    
// function isNumber(input){
//         if(input.trim()=="" || isNaN(input) == true){
//             return false
//         } else {
//             return true
//         }
//     }    

function validInsertion(input,type){
if(type == "text"){
    if(typeof input != "string" || input.trim()==""){
        return false
    } else {
        return true
    }

} else if(type == "number"){
   if(input.trim()=="" || isNaN(input) == true){
    return false
   }else {
    return true
   }
}
}


//* BONUS: Usiamo il DOM per stampare e chiedere le informazioni all'utente!

