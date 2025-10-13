function solution(n) {
    var answer = Array(n).fill("수").map((_, i)=>i%2==0? "수" : "박" );
    return answer.join("");
}