// INPUT
    // Chiedere all'utente distanza da percorrere in Km e convertire in numero
    const userDestination = parseInt(prompt("Quanti Km dista la tua destinazione?"));
    if (userDestination !== Number)
        {alert("Per favore scrivi un numero");
        }
    //verifica
    console.log(userDestination);

    //Chiedere età utente e convertire in numero
    const userAge = parseInt(prompt("Quanti anni hai?"));
    if (userDestination !== Number)
        {alert("Per favore scrivi un numero");
        }
    //verifica
    console.log(userAge);

    const baseRate = 0.21;

//  ELABORAZIONE
    //Moltiplicare numero di km che l'utente ha inserito per la tariffa fissa 0.21 E/km, ottenendo il prezzo del biglietto
    let ticketPrice = userDestination * baseRate;
    //verifica
    console.log(ticketPrice);

    //Il prezzo del biglietto a meno che l'utente non rientri in una categoria privilegiata
    let finalTicket = ticketPrice;
    document.getElementById("reduction").innerHTML = `Non hai diritto ad uno sconto, ci spiace ¯\_(ツ)_/¯ .`;


    //Se l'età dell'utente rientra nell'intervallo 0-18 anni esclusi, applicare sconto 20% al prezzo del biglietto 
    if (userAge < 18) {
        finalTicket = ticketPrice - (ticketPrice * 0.2);
        document.getElementById("reduction").innerHTML = `Hai diritto ad uno sconto di <span class="text-success"> ${(ticketPrice * 0.2).toFixed(2)}€ </span>.`;
        //verifica
        console.log(finalTicket);
    } //Se l'età dell'utente 65, applicare sconto 40% al prezzo del biglietto
      else if (userAge >= 65) { 
        finalTicket = ticketPrice - (ticketPrice * 0.4);
        document.getElementById("reduction").innerHTML = `Hai diritto ad uno sconto di <span class="text-success"> ${(ticketPrice * 0.4).toFixed(2)}€ </span>.`;
        //verifica
        console.log(finalTicket);
      };  //Altrimenti il prezzo resta invariato.

      //Converto il numero ottenuto della variabile finalTicket in un valore leggibile dall'utente come valuta euro
      let euroTicket = finalTicket.toFixed(2);
      //verifica: il valore da mostrare come output sarà una stringa per effetto di .toFixed
      console.log(euroTicket, typeof(euroTicket));


//OUTPUT
    //Mostrare all'utente i dati che ha inserito
    document.getElementById("user-kms").innerHTML = `La distanza da percorrere da te selezionata è di <span class="text-success"> ${userDestination} km </span>.`;
    document.getElementById("user-age").innerHTML = `L'età dichiarata è di <span class="text-success"> ${userAge} anni </span>.`

    //Mostrare all'utente il prezzo del biglietto in relazione ai dati inseriti.
    document.getElementById("ticket").innerHTML = `Il prezzo del tuo biglietto sarà di: <span class="text-success"> ${euroTicket}€</span> `;

    //Mostrare un messaggio all'utente in cui si rende noto il prezzo base 
    if ( userAge<18 || userAge >= 65) {
        document.getElementById("ticket-plus").innerHTML = `(anzichè <span class="text-decoration-line-through"> ${ticketPrice.toFixed(2)}</span>€)`;
    }



