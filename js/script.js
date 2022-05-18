

/* récupération des données de l'api avec le fetch */
fetch('https://gateway.marvel.com:443/v1/public/series?ts=1&apikey=3874cf496cac846ac55a7ce3a2d1dc0f&hash=8bb99ec59755171653397500e4c7dbbd')
.then(function(response) {
  return response.json();
})
.then(function(data) {
    /* boucler dans les informations reçu */
    for (let index = 0; index < data.data.results.length; index++) {

        /* simplification de la recherche */
        let res = data.data.results[index];

        /* séparation de la date et du titre */
        const split = res.title.split('(');
        let date_split = split[1].split(')');
        let date_ = date_split[0];
        let title_ = split[0];

        /* concaténation des informations pour former un url d'image valide */
        let pathe = res.thumbnail.path;
        let ext = res.thumbnail.extension;
        let img_ = pathe+"."+ext;

        /* condition si il n'y as pas de description */
        if (res.description === null) {
            let descri_ = "Pas de description.";
            block_text(date_, title_, descri_, img_);
        } else {
            let descri_ = res.description;
            block_text(date_, title_, descri_, img_);
        }
    }
});

const block = document.querySelector('.block');
/* fonction de création du block */
function block_text(date_, title_, descri_, img_){
    
    /* création des éléments */
    let block_series = document.createElement('div');
    let title = document.createElement('h2');
    let img = document.createElement('img');
    let descri = document.createElement('p');
    let date = document.createElement('p');

    /* création des textes pour les éléments avec comme valeurs les données reçu */
    let node_title = document.createTextNode(title_);
    let node_descri = document.createTextNode("Description : " + descri_);
    let node_date = document.createTextNode("Date de sortie : " + date_);

    /* mettre les textes dans les éléments */
    title.appendChild(node_title);
    descri.appendChild(node_descri);
    date.appendChild(node_date);
    img.src = img_;

    /* mettre les éléments dans un block principale */
    block_series.appendChild(title);
    block_series.appendChild(img);
    block_series.appendChild(descri);
    block_series.appendChild(date);

    /* création des class pour les éléments */
    title.classList.add('title');
    img.classList.add('img');
    descri.classList.add('description');
    date.classList.add('date');
    block_series.classList.add('block-series');

    block_style(block);

}

function block_style(block){

    const block1 = document.querySelector('.block1');
    const block2 = document.querySelector('.block2');
    const block3 = document.querySelector('.block3');
    const block4 = document.querySelector('.block4');
    const block5 = document.querySelector('.block5');

    if (block.childNodes.length === 5) {
        for (let index = 5; index < block.childNodes.length; index++) {
            block1.appendChild(block.childNodes[0]);
            block2.appendChild(block.childNodes[1]);
            block3.appendChild(block.childNodes[2]);
            block4.appendChild(block.childNodes[3]);
            block5.appendChild(block.childNodes[4]);
        }
    }

}

/* 
key samir
a3736bf21da5eba342e76393d82b1832
cbf48ecfd40c20e75ec455cd383ab680cef358c4

key antho
3874cf496cac846ac55a7ce3a2d1dc0f
8e681672fa28e6922883a3c141f5f5032438dc13
*/
