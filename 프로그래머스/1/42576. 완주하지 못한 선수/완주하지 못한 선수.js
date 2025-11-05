function solution(participant, completion) {
    //return participant.sort().filter((v, i)=> v !== completion.sort()[i]).slice(0, 1).join("");
    const nameCount = {};
    for (let name of participant) {
        nameCount[name] = (nameCount[name] || 0) + 1;
    }
    for (let name of completion) {
        nameCount[name]--
    }
    for (let name in nameCount) {
        if (nameCount[name] > 0) return name
    }
}