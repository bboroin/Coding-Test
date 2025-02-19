function solution(n) {
    let answer = [];
    let idx = 1;
    while(idx<=n) {
        if (n%idx == 0) {
            answer.push(idx);
        }
        idx++;
    }
    return answer.length;
}