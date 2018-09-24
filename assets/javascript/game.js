$(document).ready(function() {
    var playerHP = [];
    var opponentHP = [];
    var player = [];
    var arena = [];
    var attackDMG = [];
    var damageTaken = [];
    var smashUP = [];
    var wins = 0;
    var losses = 0;
    var mario = {
        name: "Mario",
        fullimage: "../unit-4-game/assets/images/Mario_full.png",
        splashimage: "../unit-4-game/assets/images/Mario_splash.png",
        winimage: "../unit-4-game/assets/images/Mario_pose.gif"
    }
    var donkeyKong = {
        name: "Donkey Kong",
        fullimage: "../unit-4-game/assets/images/Donkey_Kong_full.png",
        splashimage: "../unit-4-game/assets/images/Donkey_Kong_splash.png",
        winimage: "../unit-4-game/assets/images/Donkey_Kong_pose.gif"
    }
    var link = {
        name: "Link",
        fullimage: "../unit-4-game/assets/images/Link_full.png",
        splashimage: "../unit-4-game/assets/images/Link_splash.png",
        winimage: "../unit-4-game/assets/images/Link_pose.gif"
    }
    var samus = {
        name: "Samus",
        fullimage: "../unit-4-game/assets/images/Samus_full.png",
        splashimage: "../unit-4-game/assets/images/Samus_splash.png",
        winimage: "../unit-4-game/assets/images/Samus_pose.gif"
    }
    var yoshi = {
        name: "Yoshi",
        fullimage: "../unit-4-game/assets/images/Yoshi_full.png",
        splashimage: "../unit-4-game/assets/images/Yoshi_splash.png",
        winimage: "../unit-4-game/assets/images/Yoshi_pose.png"
    }
    var kirby = {
        name: "Kirby",
        fullimage: "../unit-4-game/assets/images/Kirby_full.png",
        splashimage: "../unit-4-game/assets/images/Kirby_splash.png",
        winimage: "../unit-4-game/assets/images/Kirby_pose.gif"
    }
    var fox = {
        name: "Fox",
        fullimage: "../unit-4-game/assets/images/Fox_full.png",
        splashimage: "../unit-4-game/assets/images/Fox_splash.png",
        winimage: "../unit-4-game/assets/images/Fox_pose.gif"
    }
    var pikachu = {
        name: "Pikachu",
        fullimage: "../unit-4-game/assets/images/Pikachu_full.png",
        splashimage: "../unit-4-game/assets/images/Pikachu_splash.png",
        winimage: "../unit-4-game/assets/images/Pikachu_pose.gif"
    }
    var luigi = {
        name: "Luigi",
        fullimage: "../unit-4-game/assets/images/Luigi_full.png",
        splashimage: "../unit-4-game/assets/images/Luigi_splash.png",
        winimage: "../unit-4-game/assets/images/Luigi_pose.gif"
    }
    var ness = {
        name: "Ness",
        fullimage: "../unit-4-game/assets/images/Ness_full.png",
        splashimage: "../unit-4-game/assets/images/Ness_spalsh.jpg",
        winimage: "../unit-4-game/assets/images/Ness_pose.gif"
    }
    var captFalcon = {
        name: "Captain Falcon",
        fullimage: "../unit-4-game/assets/images/Capt_Falcon_full.png",
        splashimage: "../unit-4-game/assets/images/Capt_Falcon_splash.png",
        winimage: "../unit-4-game/assets/images/Capt_Falcon_pose.gif"
    }
    var iceClimbers = {
        name: "Ice Climbers",
        fullimage: "../unit-4-game/assets/images/Ice_Climbers_full.png",
        splashimage: "../unit-4-game/assets/images/Ice_Climbers_splash.jpg",
        winimage: "../unit-4-game/assets/images/Ice_Climbers_pose.gif"
    }
    var pit = {
        name: "Pit",
        fullimage: "../unit-4-game/assets/images/Pit_full.png",
        splashimage: "../unit-4-game/assets/images/Pit_splash.png",
        winimage: "../unit-4-game/assets/images/Pit_pose.gif"
    }
    var ike = {
        name: "Ike",
        fullimage: "../unit-4-game/assets/images/Ike_full.png",
        splashimage: "../unit-4-game/assets/images/Ike_splash.jpg",
        winimage: "../unit-4-game/assets/images/Ike_pose.gif"
    }
    var olimar = {
        name: "Olimar",
        fullimage: "../unit-4-game/assets/images/Olimar_full.png",
        splashimage: "../unit-4-game/assets/images/Olimar_splash.png",
        winimage: "../unit-4-game/assets/images/Olimar_pose.gif"
    }
    var megaMan = {
        name: "Mega Man",
        fullimage: "../unit-4-game/assets/images/Mega_Man_full.png",
        splashimage: "../unit-4-game/assets/images/Mega_Man_splash.png",
        winimage: "../unit-4-game/assets/images/Mega_Man_pose.gif"
    }
    var fighter = [mario, donkeyKong, link, samus, yoshi, kirby, fox, pikachu, luigi, ness, captFalcon, iceClimbers, pit, ike, olimar, megaMan];
    var bridgeOfEldin = {
        name: "Bridge of Eldin",
        image: "../unit-4-game/assets/images/SSBU-Bridge_of_Eldin.png"
    }
    var delfinoPlaza = {
        name: "Delfino Plaza",
        image: "../unit-4-game/assets/images/SSBU-Delfino_Plaza.jpg"
    }
    var jungleJapes = {
        name: "Jungle Japes",
        image: "../unit-4-game/assets/images/SSBU-Jungle_Japes.png"
    }
    var lylatCruise = {
        name: "Lylat Cruise",
        image: "../unit-4-game/assets/images/SSBU-Lylat_Cruise.jpg"
    }
    var norfair = {
        name: "Norfair",
        image: "../unit-4-game/assets/images/SSBU-Norfair.png"
    }
    var pokemonStadium = {
        name: "Pokemon Stadium",
        image: "../unit-4-game/assets/images/SSBU-Pokémon_Stadium_2.png"
    }
    var portTown = {
        name: "Port Town",
        image: "../unit-4-game/assets/images/SSBU-Port_Town_Aero_Dive.png"
    }
    var summit = {
        name: "Summit",
        image: "../unit-4-game/assets/images/SSBU-Summit.png"
    }
    var arenas = [bridgeOfEldin, delfinoPlaza, jungleJapes, lylatCruise, norfair, pokemonStadium, portTown, summit];

    // choose your fighter
    $(document).on("click", ".playerimgtable", function (){
        player = $(this).attr("value");
        console.log(player);
        var player1 = "";
        $("#arena").empty();
        for (var i = 0; i < fighter.length; i++) {
            if (player == fighter[i].name) {
                player1 = fighter[i];
                console.log(player1.name);
            }
        }
        let splashimg = $("<img>");
        splashimg.addClass("chosenarena");
        splashimg.attr("src", player1.splashimage);
        splashimg.attr(".img-fluid");
        $("#arena").append(splashimg);
        console.log(player1.splashimage);

        // choose your fighter pt2
        $(document).on("click", "#selectbtn", function() {
            let playerimg = $("#playeroneimg");
            playerimg.attr("src", player1.fullimage);
            $("#playeroneimg").empty();
            $("#playeroneimg").append(playerimg);
            $("#playerone").empty();
            $("#playerone").append(player1.name);
            console.log(player1.fullimage);
        })
        // choose your opponent
        $(document).on("click", "#select2btn", function() {
            let playerimg = $("#playertwoimg");
            playerimg.attr("src", player1.fullimage);
            $("playertwoimg").empty();
            $("#playertwoimg").append(playerimg);
            $("#pcname").empty();
            $("#pcname").append(player1.name);
            console.log(player1.fullimage);
        })
    })

    // choose your arena
    $(document).on("click", ".arenaimg", function () {
        arena = $(this).attr("value");
        console.log(arena);
        var chosenarena = "";
        for (var i = 0; i < arenas.length; i++) {
            if (arena == arenas[i].name) {
                chosenarena = arenas[i];
                console.log(chosenarena.name);
            }
        }
        let chosenarenaimg = $("<img>");
        chosenarenaimg.addClass("chosenarena");
        chosenarenaimg.attr("src", chosenarena.image);
        chosenarenaimg.attr(".img-fluid");
        chosenarenaimg.attr(".rounded");
        $("#arena").empty();
        $("#arena").append(chosenarenaimg);
        console.log("Arena Image Working");
    })

    // attack
    $(document).on("click", "playerattack", function (){

    })

    // smash function
    $(document).on("click", "playersmash", function (){

    })
})