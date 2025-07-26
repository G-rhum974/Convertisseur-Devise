// ===========================================
// 📦 Classe Produit 
// ===========================================
class Produit {
  static totalProduits = 0; // Propriété statique pour compter les produit créés

  constructor(nom, prix, stock) {
    this.nom = nom; // Nom du produit
    this.prix = prix; // Prix du produit 
    this.stock = stock; // Stock disponible
    Produit.totalProduits++; // On incrémente le compteur total
  }
}

// ==========================================
// 📋 Variable globales
// ===========================================

// On garde ici tous les produits ajoutées
const produits = [];

// On récupère les éléments HTML
const btnAjouter = document.getElementById("btn-ajouter");
const inputNom = document.getElementById("nom");
const inputPrix = document.getElementById("prix");
const inputStock = document.getElementById("stock");
const ulProduits = document.getElementById("produits");

// ==========================================
// 🎯 Fonction : Ajouter un produit 
// ==========================================
function ajouterProduit() {
  // Récupérer les valeurs des champs
  const nom = inputNom.value;
  const prix = parseFloat(inputPrix.value); // Convertir en nombre décimal
  const stock = parseInt(inputStock.value); // Convertir en entier

  //Vérifier si les champs sont valides
  if (nom && prix > 0 && stock >= 0) {
    // Créer un nouvel objet Produit
    const nouveauProduit = new Produit(nom, prix, stock);

    // L'ajouter dans le tableau
    produits.push(nouveauProduit);

    // Afficher les produits mis à jour
    afficherProduits();

    //Reinitialiser les champs
    inputNom.value = "";
    inputPrix.value = "";
    inputStock.value = "";
  } else {
    alert("⚠️ Veuillez remplir tous les champs correctement !");
  }
}

// ==========================================
// 📋 Fonction : Afficher les produits
// ==========================================
function afficherProduits() {
  // On vide d'abord la liste
  ulProduits.innerHTML = "";

  // On parcourt chaque produit et on l'affiche
  produits.forEach((p) => { 
    const li = document.createElement("li"); // On crée un élément <li>
    li.textContent = `${p.nom} - ${p.prix} € - Stock: ${p.stock}`;
    ulProduits.appendChild(li); // On l'ajoute à la liste
  });
}

// ==========================================
// 🎯 Evénement sur le bouton : ajoute un produit au clic
// ==========================================
btnAjouter.addEventListener("click", ajouterProduit);
