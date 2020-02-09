$('.title').on('click',
    function () {
        $('.title').html('絶対に負けないじゃんけん');
        $('.title').on('click',
            function () {
                $('.title').html('相手が絶対に後出しで負けてくれる<br>じゃんけん');
            }
        )
    }
)

function win(){$('.result').html('かち').css('color','#D81159');}
function draw(){$('.result').html('あいこ').css('color','#636363');}
function lose(){$('.result').html('まけ').css('color','#3943B7');}

$('.button').on('click',
    function () {
        var input = $('.button:checked').val();
        var rand = Math.floor(Math.random() * 3);
        $(".button:not(:checked)").parent().css("opacity", ".5");
        $('.button:checked').parent().css("opacity", "1");
        if (rand == 0) {
            $('.sazae img').attr('src', 'img/rock.jpg');
            if (input == 4) {
                draw();
            } else if (input == 5) {
                lose();
                setTimeout(function () {
                    $('.sazae img').attr('src', 'img/paper.jpg');
                    win();
                }, 1000);
            } else {
                win();
            }
        } else if (rand == 1) {
            $('.sazae img').attr('src', 'img/scissors.jpg');
            if (input == 4) {
                win();
            } else if (input == 5) {
                draw();
            } else {
                lose();
                setTimeout(function () {
                    $('.sazae img').attr('src', 'img/rock.jpg');
                    win();
                }, 1000);
            }
        } else {
            $('.sazae img').attr('src', 'img/paper.jpg');
            if (input == 4) {
                lose();
                setTimeout(function () {
                    $('.sazae img').attr('src', 'img/scissors.jpg');
                    win();
                }, 1000);
            } else if (input == 5) {
                win();
            } else {
                draw();
            }
        }
    }
);