function solution(order) {
    var answer = String(order).replace(/[^369]/g, '');
    return answer.length;
}