const btn = document.querySelector('button');
btn.addEventListener('click', ()=>{

    let nbr = rand(0, 6);
    /* let nbr = 0; */
    switch (nbr) {
        case 0:
            /* récupération des données de l'api avec le fetch */
            fetch('https://gateway.marvel.com:443/v1/public/series?limit=100?&ts=1&apikey=3874cf496cac846ac55a7ce3a2d1dc0f&hash=8bb99ec59755171653397500e4c7dbbd')
            .then(function(response) {
            return response.json();
            })
            .then(function(data) {

                

                console.log(data.data.results);

                    
                            /* boucler dans les informations reçu */
                            for (let ine = 0; ine < 4; ine++) {
                                /* simplification de la recherche */
                                let res = data.data.results[rand(0, 99)];
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
            break;
    
        case 1:
            /* récupération des données de l'api avec le fetch */
            fetch('https://gateway.marvel.com:443/v1/public/series?orderBy=modified&limit=100&offset=100?&ts=1&apikey=3874cf496cac846ac55a7ce3a2d1dc0f&hash=8bb99ec59755171653397500e4c7dbbd')
            .then(function(response) {
            return response.json();
            })
            .then(function(data) {

                

                
                
                        /* boucler dans les informations reçu */
                        for (let ine = 0; ine < 4; ine++) {
                            /* simplification de la recherche */
                            let res = data.data.results[rand(0, 99)];
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
            break;
            case 2:
            /* récupération des données de l'api avec le fetch */
            fetch('https://gateway.marvel.com:443/v1/public/series?orderBy=modified&limit=100&offset=200?&ts=1&apikey=3874cf496cac846ac55a7ce3a2d1dc0f&hash=8bb99ec59755171653397500e4c7dbbd')
            .then(function(response) {
            return response.json();
            })
            .then(function(data) {

                

                
                    /* boucler dans les informations reçu */
                    for (let ine = 0; ine < 4; ine++) {
                        /* simplification de la recherche */
                        let res = data.data.results[rand(0, 99)];
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
            break;
            case 3:
            /* récupération des données de l'api avec le fetch */
            fetch('https://gateway.marvel.com:443/v1/public/series?orderBy=modified&limit=100&offset=300?&ts=1&apikey=3874cf496cac846ac55a7ce3a2d1dc0f&hash=8bb99ec59755171653397500e4c7dbbd')
            .then(function(response) {
            return response.json();
            })
            .then(function(data) {

                

                
                    /* boucler dans les informations reçu */
                    for (let ine = 0; ine < 4; ine++) {
                        /* simplification de la recherche */
                        let res = data.data.results[rand(0, 99)];
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
            break;
            case 4:
            /* récupération des données de l'api avec le fetch */
            fetch('https://gateway.marvel.com:443/v1/public/series?orderBy=modified&limit=100&offset=400?&ts=1&apikey=3874cf496cac846ac55a7ce3a2d1dc0f&hash=8bb99ec59755171653397500e4c7dbbd')
            .then(function(response) {
            return response.json();
            })
            .then(function(data) {

                

                
                    /* boucler dans les informations reçu */
                    for (let ine = 0; ine < 4; ine++) {
                        /* simplification de la recherche */
                        let res = data.data.results[rand(0, 99)];
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
            break;
            case 5:
            /* récupération des données de l'api avec le fetch */
            fetch('https://gateway.marvel.com:443/v1/public/series?orderBy=modified&limit=100&offset=500?&ts=1&apikey=3874cf496cac846ac55a7ce3a2d1dc0f&hash=8bb99ec59755171653397500e4c7dbbd')
            .then(function(response) {
            return response.json();
            })
            .then(function(data) {

               
                    
                
                    /* boucler dans les informations reçu */
                    for (let ine = 0; ine < 4; ine++) {
                        /* simplification de la recherche */
                        let res = data.data.results[rand(0, 99)];
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
            break;
            case 6:
            /* récupération des données de l'api avec le fetch */
            fetch('https://gateway.marvel.com:443/v1/public/series?orderBy=modified&limit=100&offset=600?&ts=1&apikey=3874cf496cac846ac55a7ce3a2d1dc0f&hash=8bb99ec59755171653397500e4c7dbbd')
            .then(function(response) {
            return response.json();
            })
            .then(function(data) {

                
                    /* boucler dans les informations reçu */
                    for (let ine = 0; ine < 4; ine++) {
                        /* simplification de la recherche */
                        let res = data.data.results[rand(0, 99)];
                        console.log(res);
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
            break;
    }

    /* https://gateway.marvel.com:443/v1/public/series?orderBy=modified&limit=100&offset=100 */
});

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let tab_number = [];
    for (let index = 0; index < 4; index++) {
        let number = Math.floor(Math.random() * (max - min +1)) + min;
        tab_number.push(number);
        if (tab_number.length === 4) {
            for (let index = 0; index < tab_number.length; index++) {
                if (tab_number[index] != tab_number[index-1]) {
                    return tab_number[index];
                }
            }
        }
    }
}

// tableau pour la version desktop
let tab_img = [];
let tab_descri = [];
let tab_date = [];
let tab_title = [];

// Tableau pour la version mobile

let tab_img1 = [];
let tab_descri1 = [];
let tab_date1 = [];
let tab_title1 = [];
/* fonction de création du block */
function block_text(date_, title_, descri_, img_){

    const img = document.querySelectorAll('.img');
    const img1 = document.querySelectorAll('.img1');
    const descri = document.querySelectorAll('.description');
    const descri1 = document.querySelectorAll('.description1')
    const release = document.querySelectorAll('.release');
    const release1 = document.querySelectorAll('.release1');
    const title = document.querySelectorAll('.title');
    const title1 = document.querySelectorAll('.title1');

    console.log(descri);

    // push version desktop
    tab_img.push(img_);
    tab_date.push(date_);
    tab_title.push(title_);
    tab_descri.push(descri_);

    // push version mobile
    tab_img1.push(img_);
    tab_date1.push(date_);
    tab_title1.push(title_);
    tab_descri1.push(descri_);



// condition version desktop
    if (tab_img.length === 4) {
        img[0].style.backgroundImage = "url('"+tab_img[0]+"')";
        img[1].style.backgroundImage = "url('"+tab_img[1]+"')";
        img[2].style.backgroundImage = "url('"+tab_img[2]+"')";
        img[3].style.backgroundImage = "url('"+tab_img[3]+"')";
        tab_img = [];
    }
    if (tab_descri.length === 4) {
        descri[0].firstChild.nodeValue = tab_descri[0];
        descri[1].firstChild.nodeValue = tab_descri[1];
        descri[2].firstChild.nodeValue = tab_descri[2];
        descri[3].firstChild.nodeValue = tab_descri[3];
        tab_descri = [];
    }
    if (tab_date.length === 4) {
        release[0].firstChild.nodeValue = "Date de parution : " + tab_date[0];
        release[1].firstChild.nodeValue = "Date de parution : " + tab_date[1];
        release[2].firstChild.nodeValue = "Date de parution : " + tab_date[2];
        release[3].firstChild.nodeValue = "Date de parution : " + tab_date[3];
        tab_date = [];
    }
    if (tab_title.length === 4) {
        title[0].firstChild.nodeValue = tab_title[0];
        title[1].firstChild.nodeValue = tab_title[1];
        title[2].firstChild.nodeValue = tab_title[2];
        title[3].firstChild.nodeValue = tab_title[3];
        tab_title = [];
    }

    // condition version mobile

    if (tab_img1.length === 4) {
        img1[0].style.backgroundImage = "url('"+tab_img1[0]+"')";
        img1[1].style.backgroundImage = "url('"+tab_img1[1]+"')";
        img1[2].style.backgroundImage = "url('"+tab_img1[2]+"')";
        img1[3].style.backgroundImage = "url('"+tab_img1[3]+"')";
        tab_img1 = [];
    }
    if (tab_descri1.length === 4) {
        descri1[0].firstChild.nodeValue = tab_descri1[0];
        descri1[1].firstChild.nodeValue = tab_descri1[1];
        descri1[2].firstChild.nodeValue = tab_descri1[2];
        descri1[3].firstChild.nodeValue = tab_descri1[3];
        tab_descri1 = [];
    }
    if (tab_date1.length === 4) {
        release1[0].firstChild.nodeValue = "Date de parution : " + tab_date1[0];
        release1[1].firstChild.nodeValue = "Date de parution : " + tab_date1[1];
        release1[2].firstChild.nodeValue = "Date de parution : " + tab_date1[2];
        release1[3].firstChild.nodeValue = "Date de parution : " + tab_date1[3];
        tab_date1 = [];
    }
    if (tab_title1.length === 4) {
        title1[0].firstChild.nodeValue = tab_title1[0];
        title1[1].firstChild.nodeValue = tab_title1[1];
        title1[2].firstChild.nodeValue = tab_title1[2];
        title1[3].firstChild.nodeValue = tab_title1[3];
        tab_title1 = [];
    }


}