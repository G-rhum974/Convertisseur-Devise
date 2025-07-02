
// Fonction appelée lorsque l'utilisateur clique sur "Convertir"
function convertir() {
  const taux = 1.08; //1 euro = 1.08 dollars ( taux fixe ici pour simplifier)

  const montantEuros = document.getElementById("euros").value;
  // On récupère la valeur saisie daans le champ avec l' id "euros"

  if (montantEuros === "") {
    // Si l'utilisateur n'a rien saisie, on affiche un message
    document.getElementById("resultat").textContent = "Veuillez entrer un montant.";
    return; // On arrête l'exécution de la fonction
  }

  const montantDollars = montantEuros * taux; 
  // On effectue la conversion

  // On affiche le résultat arrondi à 2 chiffres après la vigule
  document.getElementById("resultat").textContent = 
   `${montantEuros} € = ${montantDollars.toFixed(2)} $`;
}
