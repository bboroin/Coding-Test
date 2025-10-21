function solution(i, j, k) {
    var answer = Array(j-i+1).fill(i).map((v, i)=>v+i).join("").split("");
    return answer.filter(v=>v==k).length;
}