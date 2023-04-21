//Fichier contenant la classe Ligne

export default class Ligne
{
    #code;
    #quantite;
    #prixuni;
    #prix;
    //constructeur de la classe Ligne
    constructor(produit)
    {
        this.#code = produit.getCode();
        this.#quantite = produit.getQuantite();
        this.#prixuni = produit.getPrixuni();
        this.#prix = this.#quantite * this.#prixuni;
    }

//-------------------------------------------------------------------------------------  
    //getter 
    getCode()
    {
        return this.#code;
    }
    getQuantite()
    {
        return this.#quantite;
    }
    getPrixuni()
    {
        return this.#prixuni;
    }
    getPrix()
    {
        return this.#prix;
    }
//-------------------------------------------------------------------------------------
    //setter
    setCode(code)
    {
        this.#code = code;
    }
    setQuantite(quantite)
    {
        this.#quantite = quantite;
    }
    setPrixuni(prixuni)
    {
        this.#prixuni = prixuni;
    }
    setPrix(prix)
    {
        this.#prix = prix;
    }
//-------------------------------------------------------------------------------------
    //Methodes

    //Affiche une ligne dans le tableau html
    //On cree un ligne puis une cellule par element a afficher
    afficherLigne(ind)
    {
        let tab = document.getElementById("tableau");
        let newligne = tab.insertRow(ind + 1);

        let newcode = newligne.insertCell(0);
        var code = document.createTextNode(this.getCode());
        newcode.appendChild(code);

        let newquantite = newligne.insertCell(1);
        var quantite = document.createTextNode(this.getQuantite());
        newquantite.appendChild(quantite);

        let newprixuni = newligne.insertCell(2);
        var prixuni = document.createTextNode(this.getPrixuni());
        newprixuni.appendChild(prixuni);

        let newprix = newligne.insertCell(3);
        var prix = document.createTextNode(this.getPrix());
        newprix.appendChild(prix);

        let newsupp = newligne.insertCell(4);
        newsupp.innerHTML = "<button type='button' class='supprimer'>Supprimer la ligne</button>";
    }
}