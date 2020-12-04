function game() {
    let winningCount = [];
    for (i=0; i <5; i++) {
        function playRound(playerSelection, computerSelection) {

        // Compare player selection with computer selection
        switch(true) {
            case (playerSelection === 'rock' && computerSelection === 'scissor'):
            console.log('You win! Rock beats scissor');
            winningCount.push(i);
            break;

            case (playerSelection === 'rock' && computerSelection === 'paper'):
            console.log('You lose! Paper beats rock');
            break;

            case (playerSelection === 'paper' && computerSelection === 'rock'):
            console.log('You win! Paper beats rock');
            winningCount.push(i);
            break;

            case (playerSelection === 'paper' && computerSelection === 'scissor'):
            console.log('You lose! Scissor beats paper');
            break;

            case (playerSelection === 'scissor' && computerSelection === 'paper'):
            console.log('You win! Scissor beats paper');
            winningCount.push(i);
            break;

            case (playerSelection === 'scissor' && computerSelection === 'rock'):
            console.log('You lose! Rock beats scissor');
            break;

            case (playerSelection === computerSelection):
            console.log(`It's a draw`);
            break;

            default:
            console.log('Hey! There must be something wrong!');
            console.log('you select:', playerSelection);
            console.log('computer select:', computerSelection);
        }
    }
        // show the result
        let playerSelection = prompt('select between rock, paper, and scissor:').toLowerCase();
        // computer player
        let selection = ['rock', 'paper', 'scissor']

        function compPlay() {
            return selection[Math.floor(Math.random()*selection.length)];
        }

        let computerSelection = compPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
        console.log('You win:', winningCount.length, 'time(s)');
}

game();