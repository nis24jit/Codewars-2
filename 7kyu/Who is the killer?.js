// Who is the killer?

function killer(suspectInfo, dead) {
    return Object.entries(suspectInfo).filter(el => dead.every(e => el[1].includes(e)))[0][0]
}