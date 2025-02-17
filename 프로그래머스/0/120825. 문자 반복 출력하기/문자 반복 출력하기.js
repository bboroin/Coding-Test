function solution(my_string, n) {
    var answer = []
    for (let i of my_string) {
        answer.push(i.repeat(n));
    }
    return answer.join('');
}