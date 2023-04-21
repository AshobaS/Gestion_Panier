//Fichiers contenant les fonctions concernant le fichier json

//Fonction qui fait la requete de lecture du fichier et renvoie le tableau de donnes
export function ajaxData()
{
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function()
    {
        if(xhr.readyState == 4)
            if(xhr.status == 200)
            {
                let reponse = JSON.parse(xhr.responseText);
                datalist(reponse.items);
                let code = document.getElementById("code");
                code.addEventListener("input",function(){dataprix(reponse.items);});
            }
    }
    xhr.open("GET","../data/articles.json");
    xhr.send();
}

//Fonction qui met a jour la datalist du select avec les noms du fichier json
export function datalist(data)
{
    let liste = document.getElementById("data");
    for(let i = 0; i < data.length; i++)
        liste.innerHTML = liste.innerHTML + ("<option>"+ data[i].nom + "</option>");
}

//Fonction qui met le prix correspondant lorsqu'un code est saisie
export function dataprix(data)
{
    document.getElementById("prixuni").value = "";
    let code = document.getElementById("code").value;
    for(let i = 0; i < data.length; i++)
        if(code == data[i].nom)
        {
            document.getElementById("prixuni").value = data[i].prix;
        }
}

