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

var zoo1 = {
    nom : 'Zoo 1', adresse : 'Rue du Zoo 1, Grenoble 38000', tel : '01010101010', description : 'Zoo 1 de Grenoble pour les visites en famille', latitude : '45.1667', longitude : '5.7167'
}
var zoo2 = {
    nom : 'Zoo 2', adresse : 'Rue du Zoo 2, Grenoble 38000', tel : '01010101010', description : 'Zoo 2 de Grenoble pour les visites en grandes famille pour les petits et les grands', latitude : '45.167919300400015', longitude : '5.765567602424939'
}
var zoo3 = {
    nom : 'Zoo 3', adresse : 'Rue du Zoo 3, Grenoble 38000', tel : '01010101010', description : 'Zoo 3 de Grenoble pour les visites, Zoo principal', latitude : '45.15789742028336', longitude : '5.731406988411267'
}
var listLieux = {
    zoo1,
    zoo2,
    zoo3
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
        var animalHTML =
            '               <div class="item" id= "'+animal.nom+'">\n' +
            '                    <div class="imgCard">\n' +
            '                    <div class="infosImg">\n' +
            '                        <h2 id="'+animal.nom + 'nom' +'" >' + animal.nom + '</h2>\n' +
            '                        <h3 id="'+animal.nom+ 'pays' + '" >' + animal.pays + '</h3>\n' +
            '               </div>\n' +
            '                       <img id="'+animal.nom + 'img' +'" src=\'' + animal.img + '\'>\n' +
            '                    </div>\n' +
            '                    <div class="infos">\n' +
            '                        <p id="'+animal.nom+'desc'+'" >'+ animal.description +'</p>\n' +
            '                    </div>\n' +
            '                        <button onclick="supprAnimal(this)">Supprimer</button>\n' +
            '                        <button onclick="modifAnimal(this)">Modifier</button>\n' +
            '               </div>';
        $(".listAnimaux").append(animalHTML);
        j++;
    });
}

function addAnimal(){

    var nom = $('#saisieNom').val();
    var description = $('#saisieDescription').val();
    var pays = $('#saisiePays').val();
    var url = $('#saisieUrl').val();

    var animalExist = false;

    $.each(listAnimaux, function(i, animal) {
        if (animal.nom == nom) {
            animalExist = true;
        }
    });

    var animalHTML =
        '               <div class="item" id= "'+nom+'">\n' +
        '                    <div class="imgCard">\n' +
        '                    <div class="infosImg">\n' +
        '                        <h2 id="'+nom + 'nom' +'" >' + nom + '</h2>\n' +
        '                        <h3 id="'+nom+ 'pays' + '" >' + pays + '</h3>\n' +
        '               </div>\n' +
        '                       <img id="'+nom + 'img' +'" src=\'' + url + '\'>\n' +
        '                    </div>\n' +
        '                    <div class="infos">\n' +
        '                        <p id="'+nom+'desc'+'" >'+ description +'</p>\n' +
        '                    </div>\n' +
        '                        <button onclick="supprAnimal(this)">Supprimer</button>\n' +
        '                        <button onclick="modifAnimal(this)">Modifier</button>\n' +
        '               </div>';
    if (animalExist == true) {
        $("#" + nom + 'img').attr("src", url);
        $("#" + nom + 'nom').first().html(nom);
        $("#" + nom + 'pays').html(pays);
        $("#" + nom + 'desc').html(description);
    } else {
        $(".listAnimaux").append(animalHTML);
    }

}

function modifAnimal(dom) {
    var idAnimal = $(dom).parent().attr("id");
    var url = $("#" + idAnimal + 'img').attr("src");
    var nom = $("#" + idAnimal + 'nom').first().text();
    var pays = $("#" + idAnimal + 'pays').text();
    var description = $("#" + idAnimal + 'desc').text();

    $('#saisieNom').val(nom);
    $('#saisieDescription').val(description);
    $('#saisiePays').val(pays);
    $('#saisieUrl').val(url);



    $('html,body').animate({scrollTop: 0}, 'slow');}

function supprAnimal(dom){
    $(dom).parent().remove();
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

function loadMap(){
    $("#loadMap").after("<div id='map'></div>");
    $("#loadMap").attr("onclick", "closeMap()");

    var map = L.map('map').setView([45.1667, 5.7167], 12);

// add an OpenStreetMap tile layer
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var zoo_icon = L.icon({
        iconUrl: 'data/zoo_icon.png',
        //shadowUrl: 'icon-shadow.png',
        iconSize:     [50, 64], // taille de l'icone
        //shadowSize:   [50, 64], // taille de l'ombre
        iconAnchor:   [25, 64], // point de l'icone qui correspondra à la position du marker
        //shadowAnchor: [32, 64],  // idem pour l'ombre
        popupAnchor:  [-3, -76], // point depuis lequel la popup doit s'ouvrir relativement à l'iconAnchor
    });


    $.each(listLieux, function(i, lieu) {
        L.marker([lieu.latitude, lieu.longitude], {icon: zoo_icon}).addTo(map).bindPopup("<b>"+lieu.nom+"</b><br>"+ lieu.adresse).openPopup();
    });


}

function closeMap(){
    $('#map').remove();
    $("#loadMap").attr("onclick", "loadMap()");
}

$(document).ready(function () {
    loadAnimaux();
    afficherMenu();
    $.each(listLieux, function(i, lieu) {
        $('#descriptionLieu').append('<p>'+ lieu.nom+'<br>'+lieu.description +'</p>')
        $('#assistanceLieu').append('<p><b>Tel :'+ lieu.nom+'</b><br>'+lieu.tel +'<br>Adresse :'+lieu.adresse +'</p>')
    });


})