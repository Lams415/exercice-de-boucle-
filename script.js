
var date = new Date();
var day = date.getDate();

var tableau = [{
 "nomEtPrenom": " eyal amsellem",

"Voiture1": "toyota",
"Voiture2": "chevrolet",

},{

"nomEtPrenom": " libi amsellem",

"Voiture1": "toyota",
"Voiture2": "chevrolet",

},{
"nomEtPrenom": " lihi amsellem",

"Voiture1": "toyota",
"Voiture2": "chevrolet",
},{
"nomEtPrenom": " shani amsellem",

"Voiture1": "toyota",
"Voiture2": "chevrolet",



}]; 

const gens = document.getElementById("PersonneDeVehicule");

for (let i = 0; i < tableau.length; i++) {
    let personne = tableau[i];
    let personneDuTableau = document.createElement("p");

    personneDuTableau.textContent = personne.nomEtPrenom;
    personneDuTableau.dataset.index = i;

    personneDuTableau.addEventListener("click", function() {
        showResult(i, personneDuTableau);
    });

    gens.appendChild(personneDuTableau);
};

function showResult(index, element) {
    const personne = tableau[index];

    
    if (day === 0 && day === 2){
        element.textContent = `✅ SUCCÈS   ${personne.nomEtPrenom} `;
    } else {
        element.textContent = `❌ ECHEC   ${personne.nomEtPrenom} `;
  }
};