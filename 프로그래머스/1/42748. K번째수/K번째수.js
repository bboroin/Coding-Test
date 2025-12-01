function solution(array, commands) {
    var answer = [];
    for (let i=0; i<commands.length; i++) {
        let [start, end, k] = commands[i];
        answer.push(array.slice(start-1, end).sort((a, b)=>a-b)[k-1]);
    }
    return answer;
}