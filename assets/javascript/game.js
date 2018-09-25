$(document).ready(function() {
    var playerHP = 300;
    var opponentHP = 300;
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
        image: "../unit-4-game/assets/images/SSBU-Bridge_of_Eldin.png",
        music: "https://youtu.be/hQRN7OPb31w"
    }
    var delfinoPlaza = {
        name: "Delfino Plaza",
        image: "../unit-4-game/assets/images/SSBU-Delfino_Plaza.jpg",
        music: "https://youtu.be/Jm959nitJhE"
    }
    var jungleJapes = {
        name: "Jungle Japes",
        image: "../unit-4-game/assets/images/SSBU-Jungle_Japes.png",
        music: "https://youtu.be/MR5vDa5ahCg"
    }
    var lylatCruise = {
        name: "Lylat Cruise",
        image: "../unit-4-game/assets/images/SSBU-Lylat_Cruise.jpg",
        music: "https://youtu.be/BIQImsz5r-k"
    }
    var norfair = {
        name: "Norfair",
        image: "../unit-4-game/assets/images/SSBU-Norfair.png",
        music: "https://youtu.be/CSbV5FNKvxU"
    }
    var pokemonStadium = {
        name: "Pokemon Stadium",
        image: "../unit-4-game/assets/images/SSBU-Pokémon_Stadium_2.png",
        music: "https://youtu.be/v6oSEzF-YQM"
    }
    var portTown = {
        name: "Port Town",
        image: "../unit-4-game/assets/images/SSBU-Port_Town_Aero_Dive.png",
        music: "https://youtu.be/pfKL1nciq-o"

    }
    var summit = {
        name: "Summit",
        image: "../unit-4-game/assets/images/SSBU-Summit.png",
        music: "https://youtu.be/sm3oGbx8uwo"
    }
    var arenas = [bridgeOfEldin, delfinoPlaza, jungleJapes, lylatCruise, norfair, pokemonStadium, portTown, summit];
    var player1 = "";
    var player2 = "";

    // place win/loss counters
    $("#wincounter").append(wins);
    $("#losscounter").append(losses);

    // choose your fighter
    $(document).on("click", ".playerimgtable", function (){
        // adding audio
        player = $(this).attr("value");
        console.log(player);
        var playerselect = "";
        $("#arena").empty();
        for (var i = 0; i < fighter.length; i++) {
            if (player == fighter[i].name) {
                playerselect = fighter[i];
                console.log(playerselect.name);
            }
        }
        let splashimg = $("<img>");
        splashimg.addClass("chosenarena");
        splashimg.attr("src", playerselect.splashimage);
        splashimg.attr(".img-fluid");
        $("#arena").append(splashimg);
        console.log(playerselect.splashimage);

        // choose your fighter pt2
        $(document).on("click", "#selectbtn", function() {
            let playerimg = $("#playeroneimg");
            playerimg.attr("src", playerselect.fullimage);
            player1 = playerselect;
            playerHP = 300;
            $("#playeroneimg").empty();
            $("#playeroneimg").append(playerimg);
            $("#playerone").empty();
            $("#playerone").append(playerselect.name);
            $("#player1HP").empty();
            $("#player1HP").append(playerHP);
            $("#showmeyourmoves").empty();
            $("#showmeyourmoves").append("Select your opponent!");
            console.log(playerselect.fullimage);
        })
        // choose your opponent
        $(document).on("click", "#select2btn", function() {
            let playerimg = $("#playertwoimg");
            playerimg.attr("src", playerselect.fullimage);
            player2 = playerselect;
            opponentHP = 300;
            $("playertwoimg").empty();
            $("#playertwoimg").append(playerimg);
            $("#pcname").empty();
            $("#pcname").append(playerselect.name);
            $("#pcHP").empty();
            $("#pcHP").append(opponentHP);
            $("#showmeyourmoves").empty();
            $("#showmeyourmoves").append("Select your arena!");
            console.log(playerselect.fullimage);
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
        chosenarenaimg.addClass("img-fluid");
        chosenarenaimg.addClass("rounded");
        chosenarenaimg.attr("src", chosenarena.image);
        $("#arena").empty();
        $("#arena").append(chosenarenaimg);
        $("#showmeyourmoves").empty();
        $("#showmeyourmoves").append("Show me your moves!");
        console.log("Arena Image Working");
    })

    // attack
    $(document).on("click", "#playerattack", function() {
        attackDMG = Math.round(Math.random() * 100);
        damageTaken = Math.round(Math.random() * 100);
        console.log("Button click happening");
        if (attackDMG >= 70 && opponentHP > 0) {
            $("#fightlog").html("Critical hit! You scored " + attackDMG + " points of damage. <br>");
        }
        else {
            $("#fightlog").html("You scored " + attackDMG + " points of damage. <br>");
        };
        $("#pcHP").empty();
        opponentHP -= attackDMG;
        if (opponentHP < 0) {
            opponentHP = 0;
        }
        $("#pcHP").append(opponentHP);
        console.log("Getting in");

        if (damageTaken >= 70 && playerHP > 0) {
            $("#fightlog").append("Ouch! You took " + damageTaken + " points of damage from a critical hit. ");
        }
        else {
            $("#fightlog").append("Your opponent hit back for " + damageTaken + " points of damage. ");
        };
        $("#player1HP").empty();
        playerHP -= damageTaken;
            if (playerHP < 0) {
                playerHP = 0;
            }
        $("#player1HP").append(playerHP);
        console.log("punches thrown");

        if (playerHP == 0 && opponentHP == 0) {
            $("#fightlog").html("My oh my! <br>");
            $("#fightlog").append("You've managed to tie!");
            $("#arena").empty();
            $("#showmeyourmoves").empty();
            $("#showmeyourmoves").append("Select new fighters to try again!");
        }
        else if (opponentHP <= 0) {
            $("#fightlog").html("Success!! <br>");
            $("#fightlog").append("Congratulations! You won!")
            $("#arena").empty();
            let winnerisyou = $("<img>");
            winnerisyou.addClass("chosenarena");
            winnerisyou.attr("src", player1.winimage);
            winnerisyou.attr(".img-fluid");
            $("#arena").append(winnerisyou);
            wins++;
            $("#wincounter").empty();
            $("#wincounter").append(wins);
            $("#showmeyourmoves").empty();
            $("#showmeyourmoves").append("Congratulations! Select a fighter to play again.");
        }
        else if (playerHP <= 0) {
            $("#fightlog").html("Oh no! You've lost. <br>");
            $("#fightlog").append("Better luck next time, champ. ");
            $("#arena").empty();
            let winnerisyou = $("<img>");
            winnerisyou.addClass("chosenarena");
            winnerisyou.attr("src", player2.winimage);
            winnerisyou.attr(".img-fluid");
            $("#arena").append(winnerisyou);
            losses++;
            $("#losscounter").empty();
            $("#losscounter").append(losses);
            $("#showmeyourmoves").empty();
            $("#showmeyourmoves").append("Select a fighter to take your revenge.");
        }
    })

    // smash function -- future functionality
    // $(document).on("click", "playersmash", function (){

    // })
})