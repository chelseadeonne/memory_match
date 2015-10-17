var first_card_clicked = null;
var second_card_clicked = null;
var total_possible_matches = 2;
var match_counter = 0;
var music_theme = false;
$(document).ready(function(){
    $(".card").click(function(){
        card_flip.play();
        var current_card = $(this).find(".front").attr("data-card");
        if (first_card_clicked == null) {
            $(this).find(".back").html("<img src='images/metal_bullet_hole.png'>").fadeOut(1500);
            first_card_clicked = current_card;
            console.log("The first card you clicked is: " + first_card_clicked);
        }else {
            $(this).find(".back").html("<img src='images/metal_bullet_hole.png'>").fadeOut(1500);
            second_card_clicked = current_card;
            console.log("second card was clicked: " + second_card_clicked);
            if (first_card_clicked === second_card_clicked) {
                match.play();
                console.log("match!");
                first_card_clicked = null;
                second_card_clicked = null;
                match_counter++;
                if (match_counter >= total_possible_matches) {
                    music_theme = false;
                    $("#game-area").delay(500).fadeIn(200,function(){
                        $("#game-area").html("<h1>Winner!</h1>");
                    });

                    if (music_theme === false) {
                        theme_music.pause();
                        $(".music").hide();
                    }
                    game_won.play();
                    console.log("You Won!");
                }
            }else {
                no_match.play();
                console.log("no match");
                $(".back").delay(1000).fadeIn(200,function(){
                    $(".back").html("<img src='images/skynet.jpg'>");
                });
                first_card_clicked = null;
                second_card_clicked = null;
            }
        }
    });
    $(".music").click(function(){
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
    $(".reset").click(function(){
        reboot.play();
        first_card_clicked = null;
        second_card_clicked = null;
        match_counter = 0;
    });
});