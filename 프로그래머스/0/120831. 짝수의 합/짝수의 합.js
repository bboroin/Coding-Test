function solution(n) {
    var answer = new Array(n+1).fill(0).map((v, i)=>v+i).filter(v=>!(v%2))
    return answer.reduce((acc, cur)=>acc+cur);
}