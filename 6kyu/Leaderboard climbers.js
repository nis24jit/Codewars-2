//Leaderboard climbers
function leaderboardSort(leaderboard, changes) {
  for (let i = 0; i < changes.length; i++) {
    const data = changes[i].split(" ");
    const idx = leaderboard.indexOf(data[0]) - +data[1];
    let firstPart = [];
    let secondPart = [];
    if (+data[1] < 0) {
      firstPart = leaderboard.slice(0, idx + 1).filter((el) => el !== data[0]);
      secondPart = leaderboard.slice(idx + 1).filter((el) => el !== data[0]);
    } else {
      firstPart = leaderboard.slice(0, idx).filter((el) => el !== data[0]);
      secondPart = leaderboard.slice(idx).filter((el) => el !== data[0]);
    }
    leaderboard = [...firstPart, data[0], ...secondPart];
  }
  return leaderboard;
}
