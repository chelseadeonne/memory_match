var first_card_clicked = null;
var second_card_clicked = null;
var total_possible_matches = 9;
var matches = 0;
var attempts = 0;
var accuracy = 0;
var games_played = 0;
var music_theme = true;
var winner = $("<h1 class='winner'>Winner!</h1>");
var game_title = $("<h1>Terminator Match Game</h1>");
var again = $("<h2 class='again'>Play Again?</h2>");
var yes = $("<button class='affirmative'>Affirmative</button>");
var no = $("<button class='negative'>Negative</button>");
var card1;
var card2;
function display_stats() {
    $(".games-played .value").text(games_played);
    $(".attempts .value").text(attempts + matches);
    $(".accuracy .value").text(calculate_accuracy()).append("&#37;");
}
function calculate_accuracy() {
    if (matches === 0) {
        return 0;
    }else {
        return Math.floor(matches/(attempts + matches) * 100);
    }
}
function reset_stats() {
    accuracy = 0;
    matches = 0;
    attempts = 0;
    display_stats();
    music_theme = false;
    theme_music.pause();
    $('.music').html("Play Music");
}
function reset() {
    $(".music").show();
    reboot.play();
    games_played+=1;
    reset_stats();
    display_stats();
    first_card_clicked = null;
    second_card_clicked = null;
    $(".card").on('click', flip_card).find(".back").html("<img src='images/skynet.jpg'>").fadeIn();
    $(".title").html(game_title);
}
function flip_card() {
    var current_card = $(this).find(".front").attr("data-card");
    console.log(current_card);
    if (first_card_clicked == null) {
        card1 = $(this);
        card1.find(".back").html("<img src='images/metal_bullet_hole.png'>").fadeOut(1000);
        card_flip.play();
        first_card_clicked = current_card;
        console.log("The first card you clicked is: " + first_card_clicked);
        $(card1).off('click');
    }else {
        card2 = $(this);
        card2.find(".back").html("<img src='images/metal_bullet_hole.png'>").fadeOut(1000);
        second_card_clicked = current_card;
        console.log("second card was clicked: " + second_card_clicked);
        $(card2).off('click');
        if (first_card_clicked === second_card_clicked) {
            match.play();
            console.log("match!");
            first_card_clicked = null;
            second_card_clicked = null;
            matches++;
            if (matches === total_possible_matches) {
                music_theme = false;
                $("#game-area").delay(500).fadeIn(200,function(){
                    $(".title").html(winner).append(again, yes, no);
                    $(".affirmative").on('click', function(){
                        $(".music").show();
                        games_played+=1;
                        reset_stats();
                        display_stats();
                        $(".card").on('click', flip_card).find(".back").html("<img src='images/skynet.jpg'>").fadeIn();
                        first_card_clicked = null;
                        second_card_clicked = null;
                        $(".title").html(game_title);
                        console.log("affirmative");
                    });
                    $(".negative").on('click', function() {
                        $(".music").show();
                        $(".title").html(game_title);
                        console.log("negative");
                    });
                });
                if (music_theme === false) {
                    theme_music.pause();
                    $(".music").text("Play Music").hide();
                }
                game_won.play();
                $(".card").off('click', flip_card);
                console.log("You Won!");
            }
        }else {
            $(card1).on('click', flip_card);
            $(card2).on('click', flip_card);
            no_match.play();
            attempts++;
            console.log("no match");
            $(first_card_clicked).find(".back").fadeIn().html("<img src='images/skynet.jpg'>");
            $(second_card_clicked).find(".card").find(".back").fadeIn().html("<img src='images/skynet.jpg'>");
            $(card1).find(".back").delay('fast').fadeIn('fast',function(){
                $(".back").html("<img src='images/skynet.jpg'>");
            });
            $(card2).find(".back").delay('fast').fadeIn('fast',function(){
                $(".back").html("<img src='images/skynet.jpg'>");
            });
            first_card_clicked = null;
            second_card_clicked = null;
        }
    }
    display_stats();
}
$(document).ready(function(){
    var one = $("<div class='card' id='card1'><div class='front' id='front1' data-card='reese'><img src='images/t1-reese.png'></div><div class='back' id='back1'></div></div>");
    var two = $("<div class='card' id='card2'><div class='front' id='front2' data-card='t1-sarah'><img src='images/t1-sarah.jpg'></div><div class='back' id='back2'></div></div>");
    var three = $("<div class='card' id='card3'><div class='front' id='front3' data-card='t1-terminator'><img src='images/t1-terminator.jpg'></div><div class='back' id='back3'></div></div>");
    var four = $("<div class='card' id='card4'><div class='front' id='front4' data-card='reese'><img src='images/t1-reese.png'></div><div class='back' id='back4'></div></div>");
    var five = $("<div class='card' id='card5'><div class='front' id='front5' data-card='t2-arnold-john'><img src='images/t2-arnold-john.jpg'></div><div class='back' id='back5'></div></div>");
    var six = $("<div class='card' id='card6'><div class='front' id='front6' data-card='t2-terminator'><img src='images/t2-terminator.jpg'></div><div class='back' id='back6'></div></div>");
    var seven = $("<div class='card' id='card7'><div class='front' id='front7' data-card='t1-sarah'><img src='images/t1-sarah.jpg'></div><div class='back' id='back7'></div></div>");
    var eight = $("<div class='card' id='card8'><div class='front' id='front8' data-card='t3-terminator'><img src='images/t3-terminator.jpg'></div><div class='back' id='back8'></div></div>");
    var nine = $("<div class='card' id='card9'><div class='front' id='front9' data-card='t4-marcus'><img src='images/t4-marcus.jpg'></div><div class='back' id='back9'></div></div>");
    var ten = $("<div class='card' id='card10'><div class='front' id='front10' data-card='t2-arnold-john'><img src='images/t2-arnold-john.jpg'></div><div class='back' id='back10'></div></div>");
    var eleven = $("<div class='card' id='card11'><div class='front' id='front11' data-card='t5-john'><img src='images/t5-john.jpg'></div><div class='back' id='back1'></div></div>");
    var twelve = $("<div class='card' id='card12'><div class='front' id='front12' data-card='t4-marcus'><img src='images/t4-marcus.jpg'></div><div class='back' id='back12'></div></div>");
    var thirteen = $("<div class='card' id='card13'><div class='front' id='front13' data-card='t1-terminator'><img src='images/t1-terminator.jpg'></div><div class='back' id='back13'></div></div>");
    var fourteen = $("<div class='card' id='card14'><div class='front' id='front14' data-card='t5-sarah-kyle'><img src='images/t5-sarah-kyle.jpg'></div><div class='back' id='back14'></div></div>");
    var fifteen = $("<div class='card' id='card15'><div class='front' id='front15' data-card='t5-john'><img src='images/t5-john.jpg'></div><div class='back' id='back15'></div></div>");
    var sixteen = $("<div class='card' id='card16'><div class='front' id='front16' data-card='t2-terminator'><img src='images/t2-terminator.jpg'></div><div class='back' id='back16'></div></div>");
    var seventeen = $("<div class='card' id='card17'><div class='front' id='front17' data-card='t3-terminator'><img src='images/t3-terminator.jpg'></div><div class='back' id='back17'></div></div>");
    var eighteen = $("<div class='card' id='card18'><div class='front' id='front18' data-card='t5-sarah-kyle'><img src='images/t5-sarah-kyle.jpg'></div><div class='back' id='back18'></div></div>");
    var all_cards = [one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen];
    theme_music.play();
    $("#game-area").append(all_cards);
    $(".card").on('click', flip_card);
    $(".music").on('click', function(){
        if (music_theme === true) {
            music_theme = false;
            theme_music.pause();
            $(".music").text("Play Music")
        }else {
            theme_music.play();
            $(".music").text("Stop Music");
            music_theme = true;
        }
    });
    $(".reset").on('click', reset); /*flip_card function breaks when this is triggered. This on click handler only works when the game is won */
});