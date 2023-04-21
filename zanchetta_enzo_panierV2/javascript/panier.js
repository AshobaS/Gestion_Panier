//Fichier contenant la classe Panier

export default class Panier
{
    #tab;
    #prix;
    //Constructeur de la classe Panier
    constructor()
    {
        this.#tab = new Array();
        this.#prix = 0;
    }
//-------------------------------------------------------------------------------------
    //getter
    getPrix()
    {
        return this.#prix;
    }
    getTab()
    {
        return this.#tab;
    }
//-------------------------------------------------------------------------------------
    //setter
    setPrix(prix)
    {
        this.#prix = prix;
    }
    setTab(tab)
    {
        this.#tab = tab;
    }
//-------------------------------------------------------------------------------------
    //Methodes

    //Ajoute une ligne au tableau
    ajouterLigne(ligne)
    {
        this.#tab.push(ligne);
    }

    //Supprime une ligne du tableau et retire le prix de la ligne supprimée
    supprimerLigne(ind)
    {
        this.setPrix(parseInt(this.getPrix()) - parseInt(this.#tab[ind].getPrix()))
        this.#tab.splice(ind,1);
    }

    //Vide le panier
    viderPanier()
    {
        this.#tab = new Array();
        this.setPrix(0);
        this.afficherPanier();
    }

    //Dans le cas ou le produit existe deja dans le panier
    //Ajoute la quantité a celle deja existante puis recalcule le prix de la ligne
    updateLigne(ligne,ind)
    {
        this.#tab[ind].setQuantite(parseInt(this.#tab[ind].getQuantite()) + parseInt(ligne.getQuantite()));
        this.#tab[ind].setPrix(parseInt(this.#tab[ind].getQuantite()) * parseInt(this.#tab[ind].getPrixuni()));
    }

    //Met a jour le prix total du panier
    updatePrix(ligne)
    {
        this.setPrix(this.getPrix() + ligne.getPrix());
    }

    //Ajoute un produit au panier
    ajouterProduit(ligne)
    {
        let test = 0;
        for(let i = 0; i < this.#tab.length; i++)
        {
            if(this.#tab[i].getCode() == ligne.getCode())
            {
                //Si le produit existe deja
                this.updateLigne(ligne,i);
                test = 1;
            }
        }
        if(test == 0)
            //Si le produit est nouveau dans le panier
            this.ajouterLigne(ligne);
        //Met a jour le prix
        this.updatePrix(ligne);
    }

    //Affiche le panier
    afficherPanier()
    {
        let tab = document.getElementById("tableau");
        //Vide l'affiche du précédant panier
        while(1 < tab.rows.length)
            tab.deleteRow(1);
        //Affiche le panier ligne par ligne
        for(var i = 0; i < this.#tab.length; i++)
            this.#tab[i].afficherLigne(i);
        //Met le prix total du panier dans la case prix
        document.getElementById("prix").value = this.getPrix();
    }
}