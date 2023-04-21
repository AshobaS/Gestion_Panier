//Fichier contenant la classe Produit

export default class Produit
{
    #code;
    #quantite;
    #prixuni;

    //Constructeur de la classe Produit
    constructor(code,quantite,prixuni)
    {
        this.#code = code;
        this.#quantite = quantite;
        this.#prixuni = prixuni
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
}