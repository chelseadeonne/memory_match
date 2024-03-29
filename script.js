var first_card_clicked = null;
var second_card_clicked = null;
var total_possible_matches = 9;
var matches = 0;
var attempts = 0;
var accuracy = 0;
var games_played = 0;
var music_theme = true;
var winner = $("<h1 class='winner'>Winner!</h1>");
var game_title = $("<h1 class='title'><span id='t1'>T</span><span id='e'>e</span><span id='r1'>r</span><span id='m'>m</span><span id='i'>i</span><span id='n'>n</span><span id='a'>a</span><span id='t2'>t</span><span id='o'>o</span><span id='r2'>r</span><span class='red'> Match Game</span></h1>");
//var game_title = $("<h1>Terminator Match Game</h1>");
var again = $("<h2 class='again'>Play Again?</h2>");
var yes = $("<button class='affirmative'>Affirmative</button>");
var no = $("<button class='negative'>Negative</button>");
var card1;
var card2;
var timer_counter = 60;
var lost = $("<h2 class='winner'>You are Terminated!</h2>");
var reboot_message = $("<h4 class='loser'>Reboot to Play Again</h4>");
var time;

/*============ Timer Function ============= */
function onTimer() {
    //$("#timer_button").hide();
    time = setTimeout(60000);
    document.getElementById('timer').innerHTML = timer_counter;
    timer_counter--;
    /*========= Condition Where Player Loses The Game ===========*/
    if (timer_counter < 0 && matches < 9) {
        $('.music').fadeOut('fast');
        $('.card').addClass("disabled");
        terminated.play();
        theme_music.pause();
        music_theme = false;
        $(".music").html("Play Music");
        $(".title").html(lost).append(reboot_message);

    }
    else {
        time = setTimeout(onTimer, 1000);
    }
}

/*===== Stats for games played, attempts, and accuracy=========*/
function display_stats() {
    $(".games-played .value").text(games_played);
    $(".attempts .value").text(attempts);
    $(".accuracy .value").html(calculate_accuracy()).append("&#37;");
}

/*======= Equation for calculating accuracy=============*/
function calculate_accuracy() {
    if (matches === 0) {
        return 0;
    }else {
        return Math.floor(matches/attempts * 100);
    }
}
/*============ Reset all Stats ===============*/
function reset_stats() {
    game_title = $("<h1 class='title'><span id='t1'>T</span><span id='e'>e</span><span id='r1'>r</span><span id='m'>m</span><span id='i'>i</span><span id='n'>n</span><span id='a'>a</span><span id='t2'>t</span><span id='o'>o</span><span id='r2'>r</span><span class='red'> Match Game</span></h1>");
    accuracy = 0;
    matches = 0;
    attempts = 0;
    display_stats();
    $(".card").removeClass("disabled");
    $("#timer_button").removeClass("disabled");
}
/*============ Winner Function ===========*/
function you_won(){
    clearTimeout(time);
    music_theme = false;
    $('.music').fadeOut('fast');
    theme_music.pause();
    game_won.play();
    $("#game-area").delay(500).fadeIn(200,function() {
        $(".title").html(winner).append(again, yes, no);
        console.log("You Won!");
    });
}

/*============ When Doc is Loaded ===============*/

$(document).ready(function(){

/*=========== Dynamically Created Header ============*/
    var header = $("<header class='game_menu'><div class='title'><span id='t1'>T</span><span id='e'>e</span><span id='r1'>r</span><span id='m'>m</span><span id='i'>i</span><span id='n'>n</span><span id='a'>a</span><span id='t2'>t</span><span id='o'>o</span><span id='r2'>r</span><span class='red'> Match Game</span></div><div class='settings_about'><button class='about'><a href='about.html'>About</a></button></div><div class='reboot_sound'><button class='music'>Stop Music</button><br><button class='reset'>Reboot</button></div></header>");

/*=========== Dynamically Created Stats ============*/
    var game_info_display = $("<section class='game_info'>");
    var games_played_display = $("<div class='stats games-played'>");
    var games_played_label_display = $("<p class='label'>Games</p>");
    var games_played_value_display = $("<div class='value'>").append(games_played);
    var attempts_display = $("<div class='stats attempts'>");
    var attempts_label_display = $("<p class='label'>Attempts</p>");
    var attempts_value_display = $("<div class='value'>").append(attempts);
    var accuracy_display = $("<div class='stats accuracy'>");
    var accuracy_label_display = $("<p class='label'>Accuracy</p>");
    var accuracy_value_display = $("<div class='value'>").append(accuracy);
    var timer_display = $("<div class='stats'>");
    var timer_button_display = $("<p class='label'><button id='timer_button' onclick='onTimer()'>Timer</button></p>");
    var timer_value_display = $("<div class='value' id='timer'>");

/*============ Dynamically Created Board ============= */
    var game_board = $("<section id='game-area'>")
    var one = $("<div class='card'><div class='front' data-card='reese'><img src='images/t1-reese.png'><img class='terminated'src='images/terminated.png'></div><div class='back'></div></div>");
    var two = $("<div class='card'><div class='front' data-card='reese'><img src='images/t1-reese.png'><img class='terminated'src='images/terminated.png'></div><div class='back'></div></div>");
    var three = $("<div class='card'><div class='front' data-card='t1-terminator'><img src='images/t1-terminator.jpg'><img class='terminated'src='images/terminated.png'></div><div class='back'></div></div>");
    var four = $("<div class='card'><div class='front' data-card='t1-terminator'><img src='images/t1-terminator.jpg'><img class='terminated'src='images/terminated.png'></div><div class='back'></div></div>");
    var five = $("<div class='card'><div class='front' data-card='t2-arnold-john'><img src='images/t2-arnold-john.jpg'><img class='terminated'src='images/terminated.png'></div><div class='back'></div></div>");
    var six = $("<div class='card'><div class='front' data-card='t2-arnold-john'><img src='images/t2-arnold-john.jpg'><img class='terminated'src='images/terminated.png'></div><div class='back'></div></div>");
    var seven = $("<div class='card'><div class='front' data-card='t2-terminator'><img src='images/t2-terminator.jpg'><img class='terminated'src='images/terminated.png'></div><div class='back'></div></div>");
    var eight = $("<div class='card'><div class='front'data-card='t2-terminator'><img src='images/t2-terminator.jpg'><img class='terminated'src='images/terminated.png'></div><div class='back'></div></div>");
    var nine = $("<div class='card'><div class='front'data-card='t1-sarah'><img src='images/t1-sarah.jpg'><img class='terminated'src='images/terminated.png'></div><div class='back'></div></div>");
    var ten = $("<div class='card'><div class='front'data-card='t1-sarah'><img src='images/t1-sarah.jpg'><img class='terminated'src='images/terminated.png'></div><div class='back'></div></div>");
    var eleven = $("<div class='card'><div class='front'data-card='t3-terminator'><img src='images/t3-terminator.jpg'><img class='terminated'src='images/terminated.png'></div><div class='back'></div></div>");
    var twelve = $("<div class='card'><div class='front' data-card='t3-terminator'><img src='images/t3-terminator.jpg'><img class='terminated'src='images/terminated.png'></div><div class='back'></div></div>");
    var thirteen = $("<div class='card'><div class='front' data-card='t4-marcus'><img src='images/t4-marcus.jpg'><img class='terminated'src='images/terminated.png'></div><div class='back'></div></div>");
    var fourteen = $("<div class='card'><div class='front' data-card='t4-marcus'><img src='images/t4-marcus.jpg'><img class='terminated'src='images/terminated.png'></div><div class='back'></div></div>");
    var fifteen = $("<div class='card'><div class='front' data-card='t5-john'><img src='images/t5-john.jpg'><img class='terminated'src='images/terminated.png'></div><div class='back'></div></div>");
    var sixteen = $("<div class='card'><div class='front' data-card='t5-john'><img src='images/t5-john.jpg'><img class='terminated'src='images/terminated.png'></div><div class='back'></div></div>");
    var seventeen = $("<div class='card'><div class='front'data-card='t5-sarah-kyle'><img src='images/t5-sarah-kyle.jpg'><img class='terminated'src='images/terminated.png'></div><div class='back'></div></div>");
    var eighteen = $("<div class='card'><div class='front' data-card='t5-sarah-kyle'><img src='images/t5-sarah-kyle.jpg'><img class='terminated'src='images/terminated.png'></div><div class='back'></div></div>");
    var all_cards = [one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen];

/*=============== Card Shuffle on Doc load =============*/
    all_cards.sort(function() {
        return 0.5 - Math.random()
    });
/*============== Stats Layout ================*/
    $(games_played_display).append(games_played_label_display, games_played_value_display);
    $(attempts_display).append(attempts_label_display, attempts_value_display);
    $(accuracy_display).append(accuracy_label_display, accuracy_value_display);
    $(timer_display).append(timer_button_display, timer_value_display);
    $(game_info_display).append(games_played_display, attempts_display, accuracy_display, timer_display);

    $(game_board).append(all_cards);
    if (screen.width < 826) {
        $(".memory_match").append(header, game_board, game_info_display);
    }else {
        $(".memory_match").append(header, game_info_display, game_board);
    }

/*==== Auto Music, Dynamically Added Cards, Removing Terminated image on Cards =====*/
    theme_music.play();
    //$("#game-area").append(all_cards);
    $(".card").find(".front").find(".terminated").fadeOut('fast');

/*======== Card Click Handler, Card Interaction ============*/
    $(".card").on('click', function(){
        card_flip.play();
        var current_card = $(this).find(".front").attr("data-card");
        if (first_card_clicked == null) {
            card1 = $(this);
            card1.find(".back").html("<img src='images/metal_bullet_hole.png'>").fadeOut(1000);
            first_card_clicked = current_card;
            $(card1).addClass('disabled');
            console.log("The first card you clicked is: " + first_card_clicked);
        }else {
            card2 = $(this);
            card2.find(".back").html("<img src='images/metal_bullet_hole.png'>").fadeOut(1000);
            second_card_clicked = current_card;
            attempts++;
            $(card2).addClass('disabled');
            console.log("second card was clicked: " + second_card_clicked);
            if (first_card_clicked === second_card_clicked) {
                match.play();
                console.log("match!");
                $(card1).find('.front').find('.terminated').fadeIn(2000);
                $(card2).find('.front').find('.terminated').fadeIn(2000);
                $(card1).addClass('disabled');
                first_card_clicked = null;
                second_card_clicked = null;
                matches++;
/*============= When Game is Won ====================*/
                if (matches >= total_possible_matches && timer_counter > 0) {
                    you_won();
                    $("#game-area").delay(500).fadeIn(200,function(){
/*============ Condition If Player Chooses to Play Again ====================*/
                        $(".affirmative").on('click', function(){
                            $("#timer_button").removeClass("disabled");
                            all_cards.sort(function() {
                                return 0.5 - Math.random()
                            });
                            $(".card").find(".front").find(".terminated").fadeOut();
                            $("#game-area").append(all_cards);
                            $(".music").show().html("Stop Music");
                            music_theme = true;
                            theme_music.play();
                            games_played++;
                            reset_stats();
                            display_stats();
                            first_card_clicked = null;
                            second_card_clicked = null;
                            $(".card").removeClass('disabled').find(".back").html("<img src='images/skynet.jpg'>").fadeIn();
                            $(".title").html(game_title);
                            timer_counter = 60;
                            $("#timer").on('click', function(){
                               onTimer();
                            });
                            console.log("affirmative");
                        });
/*============== Condition if Player Chooses to Not Play Again ==================*/
                        $(".negative").on('click', function() {
                            $(".music").show();
                            $(".title").html(game_title);
                            console.log("negative");
                        });
                    });
/*============= When Game is Won Music Button Goes Away and Music Pauses=================*/
                    if (music_theme === false) {
                        theme_music.pause();
                        $(".music").html("Play Music").hide();
                    }
                }
/*============ When There is No Match, Skynet Re-appears =================*/
            }else {
                no_match.play();
                $(card1).removeClass('disabled');
                $(card2).removeClass('disabled');
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
/*========= Shows Stats on left ===============*/
        display_stats();
/*========= Terminator Title Letters Turn Red As Matches Increase ==========*/
        switch (matches) {
            case 0:
                $('.title').addClass('.title');
                break;
            case 1:
                $('#e').addClass('melting_red');
                break;
            case 2:
                $('#r1').addClass('melting_red');
                break;
            case 3:
                $('#m').addClass('melting_red');
                break;
            case 4:
                $('#i').addClass('melting_red');
                break;
            case 5:
                $('#n').addClass('melting_red');
                break;
            case 6:
                $('#a').addClass('melting_red');
                break;
            case 7:
                $('#t2').addClass('melting_red');
                break;
            case 8:
                $('#o').addClass('melting_red');
                break;
            case 9:
                $('#r2').css('color', '#960b27');
                break;
        }
    });
/*========== Music Control to either Pause or Play ===========*/
    $(".music").on('click', function(){
        if (music_theme === true) {
            music_theme = false;
            theme_music.pause();
            $(".music").html("Play Music");
        }else {
            theme_music.play();
            $(".music").html("Stop Music");
            music_theme = true;
        }
    });
/*== Reboot Function to Increase Games Played, Reset Stats, and Restart Card Interaction ==*/
    $(".reset").on('click', function(){
        clearTimeout(time);
        timer_counter = 60;
        $("#timer").on('click', function(){
            onTimer();
        });
        all_cards.sort(function() {
            return 0.5 - Math.random()
        });
        $("#game-area").append(all_cards);
        reboot.play();
        $(".music").fadeOut("fast");
        music = false;
        theme_music.pause();
        $(".music").delay(3000).fadeIn(200,function(){
            $(".music").show().html("Stop Music");
            music_theme = true;
            theme_music.play();
        });
        games_played++;
        reset_stats();
        display_stats();
        first_card_clicked = null;
        second_card_clicked = null;
        $(".card").removeClass('disabled').find(".back").html("<img src='images/skynet.jpg'>").fadeIn();
        $(".card").find(".front").find(".terminated").fadeOut();
        $(".title").html(game_title);
        console.log("reboot");
    });
/*== Stop Timer Button From Being Clicked After It Starts ==*/
    $("#timer_button").on('click', function(){
       $("#timer_button").addClass("disabled");
    });
});