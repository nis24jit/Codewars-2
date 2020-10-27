//Finding an appointment
function getStartTime(s, d) {
  let res = [];
  for (let i = 0; i < s.length; i++) {
    res.push([]);
    for (let j = 0; j < s[i].length; j++) {
      if (j == 0) {
        if (formateTime("9:00", s[i][j][0]) >= d)
          res[i].push(["9:00", s[i][j][0]]);
      } else {
        if (formateTime(s[i][j - 1][1], s[i][j][0]) >= d)
          res[i].push([s[i][j - 1][1], s[i][j][0]]);
        if (j == s[i].length - 1 && s[i][j][1] !== "19:00") {
          if (formateTime(s[i][j][1], "19:00") >= d) {
            res[i].push([s[i][j][1], "19:00"]);
          }
        }
      }
    }
  }
  for (let j = 0; j < res[0].length; j++) {
    const filtered = res.map((el, i) => {
      return el.filter((time) => formateTime(res[0][j][0], time[1]) > 0);
    });
    if (filtered.every((el) => el.length > 0)) {
      let resTime = [0, 0];
      let resLastTime = [0, Infinity];
      for (let k = 0; k < filtered.length; k++) {
        let cur = filtered[k][0][0].split(":");
        let curlast = filtered[k][0][1].split(":");
        if (cur[0] * 60 + +cur[1] >= resTime[1]) {
          resTime[1] = cur[0] * 60 + +cur[1];
          resTime[0] = filtered[k][0][0];
        }
        if (curlast[0] * 60 + +curlast[1] < resLastTime[1]) {
          resLastTime[1] = curlast[0] * 60 + +curlast[1];
          resLastTime[0] = filtered[k][0][1];
        }
      }
      if (resLastTime[1] - resTime[1] >= d) {
        return resTime[0] == "9:00" ? "09:00" : resTime[0];
      }
    }
  }
  
  return null;
}

function formateTime(a, b) {
  const aCopy = a.split(":");
  const bCopy = b.split(":");
  return bCopy[0] * 60 + +bCopy[1] - (aCopy[0] * 60 + +aCopy[1]);
}
