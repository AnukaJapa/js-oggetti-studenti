//^ ESERCIZIO FACOLTATIE 
//* 1. Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.

const studenti = [
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

//* 2. Stampare a schermo attraverso un ciclo for (o eventualmente con for-in) tutte le proprietà dell'oggetto.

function stampareProprietà(oggetto){
    for(let elemento in oggetto){
        console.log(elemento);
    }
}
stampareProprietà(studenti[0]);

//* 3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte).
//* 4. Ciclare su tutti gli studenti e stampare per ognuno di essi: nome e cognome.
//* 5. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere all’array creato in precedenza, un nuovo oggetto studente inserendo nell’ ordine: nome, cognome e età.

//* BONUS: Usiamo il DOM per stampare e chiedere le informazioni all'utente!
