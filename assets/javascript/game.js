$(document).ready(function() {
    var playerHP = [];
    var opponentHP = [];
    var player = [];
    var opponent = [];
    var attackDMG = [];
    var damageTaken = [];
    var smashUP = [];
    var mario = {
        name: "Mario",
        fullimage: "../images/Mario.png",
        splashimage: "../images/Mario_splash.png",
        winimage: "../images/Mario_pose.gif"
    }
    var donkeyKong = {
        name: "Donkey Kong",
        fullimage: "../images/Donkey_Kong.png",
        splashimage: "../images/Donkey_Kong_splash.png",
        winimage: "../images/Donkey_Kong_pose.gif"
    }
    var link = {
        name: "Link",
        fullimage: "../images/Link.png",
        splashimage: "../images/Link_splash.png",
        winimage: "../images/Link_pose.gif"
    }
    var samus = {
        name: "Samus",
        fullimage: "../images/Samus.png",
        splashimage: "../images/Samus_splash.png",
        winimage: "../images/Samus_pose.gif"
    }
    var yoshi = {
        name: "Yoshi",
        fullimage: "../images/Yoshi.png",
        splashimage: "../images/Yoshi_splash.png",
        winimage: "../images/Yoshi_pose.png"
    }
    var kirby = {
        name: "Kirby",
        fullimage: "../images/Kirby.png",
        splashimage: "../images/Kirby_splash.png",
        winimage: "../images/Kirby_pose.gif"
    }
    var fox = {
        name: "Fox",
        fullimage: "../images/Fox.png",
        splashimage: "../images/Fox_splash.png",
        winimage: "../images/Fox_pose.gif"
    }
    var pikachu = {
        name: "Pikachu",
        fullimage: "../images/Pikachu.png",
        splashimage: "../images/Pikachu_splash.png",
        winimage: "../images/Pikachu_pose.gif"
    }
    var luigi = {
        name: "Luigi",
        fullimage: "../images/Luigi.png",
        splashimage: "../images/Luigi_splash.png",
        winimage: "../images/Luigi_pose.gif"
    }
    var ness = {
        name: "Ness",
        fullimage: "../images/Ness.png",
        splashimage: "../images/Ness_splash.png",
        winimage: "../images/Ness_pose.gif"
    }
    var captFalcon = {
        name: "Captain Falcon",
        fullimage: "../images/Capt_Falcon.png",
        splashimage: "../images/Capt_Falcon_splash.png",
        winimage: "../images/Capt_Falcon_pose.gif"
    }
    var iceClimbers = {
        name: "Ice Climbers",
        fullimage: "../images/Ice_Climbers.png",
        splashimage: "../images/Ice_Climbers_splash.png",
        winimage: "../images/Ice_Climbers_pose.gif"
    }
    var pit = {
        name: "Pit",
        fullimage: "../images/Pit.png",
        splashimage: "../images/Pit_splash.png",
        winimage: "../images/Pit_pose.gif"
    }
    var ike = {
        name: "Ike",
        fullimage: "../images/Ike.png",
        splashimage: "../images/Ike_splash.png",
        winimage: "../images/Ike_pose.gif"
    }
    var olimar = {
        name: "Olimar",
        fullimage: "../images/Olimar.png",
        splashimage: "../images/Olimar_splash.png",
        winimage: "../images/Olimar_pose.gif"
    }
    var megaMan = {
        name: "Mega Man",
        fullimage: "../images/Mega_Man.png",
        splashimage: "../images/Mega_Man_splash.png",
        winimage: "../images/Mega_Man_pose.gif"
    }
    }