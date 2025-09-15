function solution(n) {
    let answer = Array(n).fill(1).map((v, i)=>v+i).filter(v=>n%v===1);
    return answer[0];
}