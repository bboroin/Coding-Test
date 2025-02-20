function solution(dot) {
    let [x, y] = dot;
    let answer = 0;
    if (x > 0) {
        answer = y > 0 ? 1 : 4
    }
    else {
        answer = y > 0 ? 2 : 3
    }
    return answer
}