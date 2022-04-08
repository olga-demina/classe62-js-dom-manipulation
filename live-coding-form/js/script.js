// Creare una form per chiedere all'utente il suo nome e colore preferito e stampare le risposte sulla pagina

const formBtn = document.getElementById("form-btn");
console.log(formBtn);
formBtn.addEventListener("click", 
    function() {
        // Prelevo gli input dell'utente
        const userName = document.getElementById("user-name").value;
        console.log(userName);

        const userColor = document.getElementById("user-color").value;
        console.log(userColor);

        // Visualizzo nella pagina le risposte dell'utente
        // - inserire le risposte negli elementi corrispondenti
        const greetingResponse = document.querySelector(".result h2");
        console.log(greetingResponse);
        greetingResponse.innerHTML = `Ciao ${userName}`;

        const colorResponse = document.querySelector(".result p");
        console.log(colorResponse);
        colorResponse.innerHTML = `Hai scelto il colore ${userColor}`

        // - far vedere il blocco delle risposte
        const resultContainer = document.querySelector(".result");
        console.log(resultContainer);
        resultContainer.classList.remove("d-none");
    }
);

const formClearBtn = document.getElementById("form-clear-btn");
console.log(formClearBtn);

formClearBtn.addEventListener("click", 
    function() {
        
        // Nascondo result container
        const resultContainer = document.querySelector(".result");
        resultContainer.classList.add("d-none");

        // Ripulsco i campi
        const userName = document.getElementById("user-name");
        console.log(userName);
        userName.value = "";

        const userColor = document.getElementById("user-color");
        userColor.value = "";
    }
);