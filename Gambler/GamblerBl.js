gamblerMain = (stake, goal, trails) => {
    let lose = 0;
    let wins = 0;
    let cash = 0;
    let randomValue = 0;

    for (let index = 0; index < trails; index++) {
        cash = stake;
        while (cash > 0 && cash < goal) {
            randomValue = Math.random();
            if (randomValue < 0.5) {
                cash++;
            }
            else {
                cash--;
            }
        }
        if (cash == goal) {
            wins++;
        } else {
            lose++;
        }
    }
    let percentWins = 100 * (wins / trails);
    let percentLoss = 100 * (lose / trails);
    console.log('Percentage of game won : ' + percentWins);
    console.log('Percentage of game lose : ' + percentLoss);
}