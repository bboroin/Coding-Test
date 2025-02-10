function solution(n) {
    let answer = Array.from({length : (n+1)/2}, (_, i)=> (i * 2) + 1 );
    return answer;
}