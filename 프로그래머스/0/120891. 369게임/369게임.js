function solution(order) {
    var answer = [...String(order)].filter(v=>v=='3'||v=='6'||v=='9');
    return answer.length;
}