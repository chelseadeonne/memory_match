    var first_card_clicked = null;
    var second_card_clicked = null;
    var total_possible_matches = 2;
    var match_counter = 0;
    function card_clicked(card_num) {
        var card_back = "#back" + card_num;
        var card_front = "#front" + card_num;
        var current_card = $(card_front).attr("data-card");
        $(card_back).fadeOut(500);
        if (first_card_clicked == null) {
            first_card_clicked = current_card;
            console.log("The first card you clicked is: " + first_card_clicked);
        }else {
            second_card_clicked = current_card;
            console.log("second card was clicked: " + second_card_clicked);
            if (first_card_clicked === second_card_clicked) {
                console.log("match!");
                first_card_clicked = null;
                second_card_clicked = null;
                match_counter++;
                if (match_counter >= 2) {
                    $("#game-area").html("<h2>You Won!</h2>");
                    console.log("You Won!");
                }
            }else {
                console.log("no match");
                $(".back").fadeIn(2000);
                first_card_clicked = null;
                second_card_clicked = null;
            }
        }
    }