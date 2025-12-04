function solution(k, score) {
    let best = []; // 명예의 전당 배열
    let answer = []; // 최하위 점수 배열
    
    for (let i=0; i<score.length; i++) {
        best.push(score[i]);
        answer.push(best.sort((a, b)=>b-a).slice(0, k).pop())
    }
    return answer;
}