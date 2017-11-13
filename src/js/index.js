(function (){
    let interval;
    let total_score = 0;
    let stop_game = document.getElementsByClassName('stop-game')[0];
    let start_game = document.getElementsByClassName('start-game')[0];
    let game_container = document.getElementsByClassName('game-container')[0];
    let score_container = document.getElementsByClassName('score-container')[0];
    let highlighted_cell;

    start_game.addEventListener('click', function() {
        interval = setInterval(highlightCell, 1000);
    });

    stop_game.addEventListener('click', function() {
        interval && clearInterval(interval);
        score_container.innerHTML = total_score;
    });

    game_container.addEventListener('click', function (event) {
        let clicked_cell = event.target;
        if(clicked_cell === highlighted_cell) {
            total_score += 1
        } else {
            total_score -= 1;
        }
    });


    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function removeHighlight() {
        let highlighted = document.getElementsByClassName('highlight');
        highlighted && highlighted.length && highlighted[0].classList.remove('highlight');
    }

    function highlightCell() {
        removeHighlight();
        let random_cell = getRandomInt(1,9);
        let cell = document.getElementById(`cell-${random_cell}`);
        highlighted_cell = cell;
        cell.className += " highlight";
    }
})();
