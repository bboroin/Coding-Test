function solution(n) {
    var answer = [...String(n)].sort((a, b)=>b-a).join('');
    return +answer;
}