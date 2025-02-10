function solution(n) {
    var answer = new Array(n).fill(1).map((v, i)=> v+i).filter(v=>v = v%2)
    return answer;
}