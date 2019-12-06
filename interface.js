var elephant = {
    nom : 'Éléphant', pays : 'Afrique', img : 'data/elephant.png', description : 'Les éléphants sont des mammifères proboscidiens de la famille des Éléphantidés. Ils correspondent aujourd\'hui à trois espèces réparties en deux genres distincts.'
}
var giraphe = {
    nom : 'Girafe', pays : 'Afrique', img : 'data/girafe.png', description : 'La Girafe (Giraffa camelopardalis) est une espèce de mammifères ongulés artiodactyles, du groupe des ruminants, vivant dans les savanes africaines et répandue du Tchad jusqu\'en Afrique du Sud.'
}
var jaguar = {
    nom : 'Jaguar', pays : 'Afrique', img : 'data/jaguar.png', description : 'Le jaguar (Panthera onca) est un mammifère carnivore de la famille des Felidae. C\'est l\'un des cinq « grands félins » du genre Panthera, avec le tigre, le lion, l\'once et le léopard.'
}
var rhinocéros = {
    nom : 'Rhinocéros', pays : 'Afrique', img : 'data/rhino.png', description : 'Les rhinocéros sont les mammifères périssodactyles appartenant à la famille des rhinocérotidés (Rhinocerotidae).'
}

var listAnimaux = {
    elephant,
    giraphe,
    jaguar,
    rhinocéros
}

var menu = {
    "item1" : {
        "libelle" : 'Menu',
        "url" : "menu.html",
        "fils" : ["Connexion", "Recherche", "Billeterie", "Promotions"]
    },
    "item2" : {
        "libelle" : 'Activités',
        "url" : 'activites.html',
        "fils" : ["Actualité", "Programme", "Tarifs" , "Parrainage et conversation"]
    },
    "item3" : {
        "libelle" : 'Animaux',
        "url" : 'destination.html',
        "fils" : []
    },
    "item4" : {
        "libelle" : 'Banque de sons',
        "url" : 'audio.html',
        "fils" : []
    },
    "item5" : {
        "libelle" : 'Scènes Vidéo',
        "url" : 'video.html',
        "fils" : []
    },
    "item6" : {
        "libelle" : 'Contact',
        "url" : 'contact.html',
        "fils" : []
    }
};

function loadAnimaux() {
    var j = 0;
    $.each(listAnimaux, function(i, animal) {
        if( j % 2 == 0) {

        }
        var animalHTML = '<tr>\n' +
            '               <td id= "'+animal.nom+'">\n' +
            '                       <img id="'+animal.nom + 'img' +'" src=\'' + animal.img + '\'>\n' +
            '                    <div id="infos">\n' +
            '                        <h2 id="'+animal.nom + 'nom' +'" >' + animal.nom + '</h2>\n' +
            '                        <h3 id="'+animal.nom+ 'pays' + '" >' + animal.pays + '</h3>\n' +
            '                        <p id="'+animal.nom+'desc'+'" >'+ animal.description +'</p>\n' +
            '                        <button onclick="supprAnimal(this)">Supprimer</button>\n' +
            '                        <button onclick="modifAnimal(this)">Modifier</button>\n' +
            '                    </div>\n' +
            '               </td>\n' +
            '               </tr>';

        $("#tableauAnimaux").append(animalHTML);
        j++;
    });
}

function addAnimal(){

    var nom = $('#saisieNom').val();
    var description = $('#saisieDescription').val();
    var pays = $('#saisiePays').val();
    var url = $('#saisieUrl').val();

    var animalExist = 'nok';

    $.each(listAnimaux, function(i, animal) {
        if (animal.nom == nom) {
            animalExist = 'ok';
        }
    });

        var animalHTML = '<tr>\n' +
        '               <td id= "'+nom+'">\n' +
        '                       <img src="' + url + '">\n' +
        '                    <div id="infos">\n' +
        '                        <h2 id="'+nom + 'nom' +'">' + nom + '</h2>\n' +
        '                        <h3 id="'+nom + 'pays' +'">' + pays + '</h3>\n' +
        '                        <p id="'+nom + 'desc' +'">'+ description +'</p>\n' +
        '                        <button onclick="supprAnimal(this)">Supprimer</button>\n' +
        '                        <button onclick="modifAnimal(this)">Modifier</button>\n' +
        '                    </div>\n' +
        '               </td>\n' +
        '               </tr>';
    if (animalExist == 'ok') {
        $("#" + nom + 'img').attr("src", url);
        $("#" + nom + 'nom').first().html(nom);
        $("#" + nom + 'pays').html(pays);
        $("#" + nom + 'desc').html(description);
    } else {
        $("#tableauAnimaux").append(animalHTML);
    }

}

function modifAnimal(dom) {
    var idAnimal = $(dom).parent().parent().attr("id");
    var url = $("#" + idAnimal + 'img').attr("src");
    var nom = $("#" + idAnimal + 'nom').first().text();
    var pays = $("#" + idAnimal + 'pays').text();
    var description = $("#" + idAnimal + 'desc').text();

    $('#saisieNom').val(nom);
    $('#saisieDescription').val(description);
    $('#saisiePays').val(pays);
    $('#saisieUrl').val(url);
}

function supprAnimal(dom){
    $(dom).parent().parent().remove();
}

function afficherMenu() {
    for (i in menu) {
        var nouveauLi = $('<li id="limenu'+i+'"></li>');
        $('.mainMenu').append(nouveauLi);
        var nouveauLien = $('<a href="'+menu[i].url+'">'+menu[i].libelle+'</a>');
        $('#limenu'+i).append(nouveauLien);
        if (menu[i].fils.length !== 0) {
            console.log($('#limenu_'+i));
            var nouvelleListe = $('<ul class="subMenu" id="ulsousmenu'+i+'"></ul>');
            $('#limenu'+i).append(nouvelleListe);
            for (j in menu[i].fils) {
                var nouveauSousLi = $('<li id="li_sousmenu'+j+'_'+i+'"></li>');
                $('#ulsousmenu'+i).append(nouveauSousLi);
                var nouveauSousLien = $('<a href="#">'+menu[i].fils[j]+'</a>');
                $('#li_sousmenu'+j+'_'+i).append(nouveauSousLien);
            }
        }
    }
}

$(document).ready(function () {
    loadAnimaux();
    afficherMenu();
})