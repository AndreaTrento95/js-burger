// ----------- refereces -----------
var ingredients = document.getElementsByClassName("ingredient-checkbox"); // mi restituisce un'array
var nameUser = document.getElementById('name');
var button = document.getElementById("button");
var coupon = document.getElementById("coupon");
var price_element = document.getElementById('price');


// ------- settings --------------
var defaultPrice = 50; // prezzo di base
var coupons = ['sconto2021', 'sconto-bool']; // codici sconto 
var discount = 0.3; // sconto 

// inserisco nella pagina il prezzo di default richiamando la funzione
writePrice(defaultPrice, price_element);

// imposto una serie di conseguenze all'accadere di un determinato evento (click del button)
button.addEventListener('click', function(){
    // controllo del nome
    nomeInserito = nameUser.value.trim(); // il nome/valore inserito dall'utente senza spazi
    // setto la condizone secondo cui l'utente deve inserire il nome del burger
    if(nomeInserito.length === 0){ // se non è inserito niente allora: alert!
        alert("DEVI INSERIRE IL NOME DEL BURGER!");
    }else{
        var priceIngredients = 0;
        // creo un ciclo per verificare se alcuni ingredienti sono checked
        for(var i = 0; i < ingredients.length; i++){
            var ingredient = ingredients[i];
            // condizione secondo la quale se l'ingrediente viene selezionato allora aggiungo il suo value a priceIngredients
            if(ingredient.checked === true){
                priceIngredients += parseInt(ingredient.value);
            }
        }
        var prezzoFinale = defaultPrice + priceIngredients;

        // verifico la presenza del coupon sconto
        if(coupons.includes(coupon.value)){
            // se è presente applico lo sconto
            prezzoFinale -= prezzoFinale * discount;
        }

        // output prezzo finale
        writePrice(prezzoFinale, price);

    }
})



// ------------ function -----------
function writePrice(value, target){
    target.innerHTML = value.toFixed(2);
}
