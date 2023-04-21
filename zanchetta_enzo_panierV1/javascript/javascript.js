import Produit from "./produit.js";
import Ligne from "./ligne.js";
import Panier from "./panier.js";

//-------------------------------------------------------------------------------------
//Listeners créés au chargement de la page


//Listerner qui appelle la fonction créant tous les autres listeners
window.addEventListener("load",setUpListener);

//Listener qui appelle la fonction grisant le bouton Ajouter au panier
window.addEventListener("load",conditionnerBouton);

//Listener qui appelle la fonction grisant le bouton Vider le panier
window.addEventListener("load",buttonPanier);

//-------------------------------------------------------------------------------------
//Fonction créant les différents listeners


function setUpListener()
{
    
    //Initialisation de l'objet Panier qui sera utilisé tout le long
    let panier = new Panier();

    //Listeners concernant l'input code
    let prixcode = document.getElementById("code");
    prixcode.addEventListener("input",determinerPrix);
    prixcode.addEventListener("input",conditionnerBouton);

    //Listener concernant l'input quantite
    let quantite = document.getElementById("quantite");
    quantite.addEventListener("input",conditionnerBouton);

    //Listerner concernant le click sur le bouton Ajouter au panier
    let button = document.getElementById("valider");
    button.addEventListener("click",function(){validerproduit(panier);});

    //Listerners concernant les clicks sur les boutons Supprimer la ligne
    let effacer = document.getElementById("effacer");
    effacer.addEventListener("click",function(){panier.viderPanier();});
    effacer.addEventListener("click",buttonPanier);
}

//Fonction créant les listeners sur les boutons supprimer la ligne
function setUpListenerSupprimer(panier)
{
    
    let tabsupp = document.getElementsByClassName("supprimer");
    for(var i = 0; i < tabsupp.length; i++)
    {
        tabsupp[i].addEventListener("click",(event) => {suppression(event,panier);});
    }
}

//-------------------------------------------------------------------------------------
//Fonctions concernant le prix unitaire aléatoire


//Fonction qui tire un entier aléatoire entre  et max
function random(max)
{
    return Math.floor(Math.random() * max);
}

//Fonction qui détermine un prix aléatoire entre 0 et 200
function determinerPrix()
{
    document.getElementById("prixuni").value = random(201);
}

//-------------------------------------------------------------------------------------
//Fonctions concernant la désactivation des boutons


//Fonction qui grise le bouton Ajouter au Panier et le desactive si tous les champs ne sont pas remplis
//Et le met en blanc et le reactive si ils sont remplis
function conditionnerBouton()
{
    let code = document.getElementById("code").value;
    let quantite = document.getElementById("quantite").value;
    if((code != "") && (quantite != ""))
    {
        let button = document.getElementById("valider");
        button.style.backgroundColor = "white";
        button.disabled = false;
    }
    else
    {
        let button = document.getElementById("valider");
        button.style.backgroundColor = "grey";
        button.disabled = true;
    }
}

//Fonction qui grise le bouton Vider le panier et le desactive si le panier est vide
//Et le met en blanc et le reactive si il y a au moins un produit
function buttonPanier()
{
    let tabsupp = document.getElementsByClassName("supprimer");
    let button = document.getElementById("effacer");
    if(tabsupp.length == 0)
    {
        button.style.backgroundColor = "grey";
        button.disabled = true;
    }
    else
    {
        button.style.backgroundColor = "white";
        button.disabled = false;
    }
}

//-------------------------------------------------------------------------------------
//Fonction concernant l'ajout d'un produit au panier

function validerproduit(panier)
{
    //On initie les attributs du produit
    const code = document.getElementById("code").value;
    const quantite = document.getElementById("quantite").value;
    const prixuni = document.getElementById("prixuni").value;
    
    //On crée le produit à partir des caractéristiques
    let produit = new Produit(code,quantite,prixuni);
    
    //On crée une ligne a partir du produit
    let ligne = new Ligne(produit);

    //On ajoute la ligne au panier
    panier.ajouterProduit(ligne);

    //On affiche le panier
    panier.afficherPanier();

    //On recree les boutons Supprimer la ligne
    setUpListenerSupprimer(panier);
    buttonPanier();
}

//Fonction qui supprime une ligne du panier
function suppression(event,panier)
{
    //On recupere l'indice de la ligne a supprimer
    panier.supprimerLigne(event.target.closest("tr").rowIndex - 1);

    //On affiche le panier
    panier.afficherPanier();

    //On recrée les boutons
    setUpListenerSupprimer(panier);
    buttonPanier();
}
