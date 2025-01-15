function solution(arr) {
    var answer = [];
    arr.map((v, i)=>{
        for (i=0; i<v; i++) {
             answer.push(v);
        }})
    return answer;
}