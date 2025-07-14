
// Fonction pour vérifier si une entrée est un nombre valide et positif
function estValide(nombre) {
  return !isNaN(nombre) && nombre > 0;
}

// Fonction pour convertir des euros en dollars
function convertirEurosVersDollars() {
  const montant = prompt("Entrez le montant en euros (€) :");
  const taux = prompt("Entrez le taux de conversion (1€ = combien de $) :");

  if (!estValide(montant) || !estValide(taux)) {
    document.getElementById("resultat").textContent = "Entrée invalide. Essayez avec des nombres positifs.";
    return;
  }

  const resultat = parseFloat(montant) * parseFloat(taux);
  document.getElementById("resultat").textContent = `${montant} € = ${resultat.toFixed(2)} $`;
}

// Fonction pour convertir des dollars en euros
function convertirDollarsVersEuros() {
  const montant = prompt("Entrez le montant en dollars ($) :");
  const taux = prompt("Entrez le taux de conversion (1$ = combien de €) :");

  if (!estValide(montant) || !estValide(taux)) {
    document.getElementById("resultat").textContent = "Entrée invalide. Essayez avec des nombres positifs.";
    return;
  }

  const resultat = parseFloat(montant) * parseFloat(taux);
  document.getElementById("resultat").textContent = `${montant} $ = ${resultat.toFixed(2)} €`;
}




