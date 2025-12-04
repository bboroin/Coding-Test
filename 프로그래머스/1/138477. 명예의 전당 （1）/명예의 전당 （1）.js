function solution(k, score) {
    let best = []; // 명예의 전당 배열
    let answer = []; // 최하위 점수 배열
    
    for (const s of score) {
        best.push(s);
        best.sort((a, b)=>a-b)
        if (best.length > k) best.shift();
        answer.push(best[0]);
    }
    return answer;
}