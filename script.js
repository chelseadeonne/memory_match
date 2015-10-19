var first_card_clicked = null;
var second_card_clicked = null;
var total_possible_matches = 9;
var matches = 0;
var attempts = 0;
var accuracy = 0;
var games_played = 0;
var music_theme = false;
var winner = $("<h1 class='winner'>Winner!</h1>");
var game_title = $("<h1>Terminator Match Game</h1>");
var again = $("<h2 class='again'>Play Again?</h2>");
var yes = $("<button class='affirmative'>Affirmative</button>");
var no = $("<button class='negative'>Negative</button>");
var card1;
var card2;
$(document).ready(function(){
    function display_stats() {
        $(".games-played .value").text(games_played);
        $(".attempts .value").text(attempts);
        $(".accuracy .value").html(calculate_accuracy()).append("&#37;");
    }
    function calculate_accuracy() {
        if (matches === 0) {
            return 0;
        }else {
            return Math.floor(matches/attempts * 100);
        }
    }
    function reset_stats() {
        accuracy = 0;
        matches = 0;
        attempts = 0;
        display_stats();
    }
    $(".card").on('click', function(){
        card_flip.play();
        var current_card = $(this).find(".front").attr("data-card");
        if (first_card_clicked == null) {
            card1 = $(this);
            card1.find(".back").html("<img src='images/metal_bullet_hole.png'>").fadeOut(1000);
            first_card_clicked = current_card;
            console.log("The first card you clicked is: " + first_card_clicked);
        }else {
            card2 = $(this);
            card2.find(".back").html("<img src='images/metal_bullet_hole.png'>").fadeOut(1000);
            second_card_clicked = current_card;
            attempts++;
            console.log("second card was clicked: " + second_card_clicked);
            if (first_card_clicked === second_card_clicked) {
                match.play();
                console.log("match!");
                first_card_clicked = null;
                second_card_clicked = null;
                matches++;
                if (matches >= total_possible_matches) {
                    music_theme = false;
                    $("#game-area").delay(500).fadeIn(200,function(){
                        $(".title").html(winner).append(again, yes, no);
                        $(".affirmative").on('click', function(){
                            $(".music").show();
                            games_played++;
                            reset_stats();
                            display_stats();
                            first_card_clicked = null;
                            second_card_clicked = null;
                            $(".card").find(".back").html("<img src='images/skynet.jpg'>").fadeIn();
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
                        $(".music").html("Play Music").hide();
                    }
                    game_won.play();
                    console.log("You Won!");
                }
            }else {
                no_match.play();
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
    });
    $(".music").on('click', function(){
        if (music_theme === false) {
            music_theme = true;
            theme_music.play();
            $(".music").html("Stop Music")
        }else {
            theme_music.pause();
            $(".music").html("Play Music");
            music_theme = false;
        }
    });
    $(".reset").on('click', function(){
        $(".music").show();
        reboot.play();
        games_played++;
        reset_stats();
        display_stats();
        first_card_clicked = null;
        second_card_clicked = null;
        $(".card").find(".back").html("<img src='images/skynet.jpg'>").fadeIn();
        $(".title").html(game_title);
        console.log("reboot");
    });
});