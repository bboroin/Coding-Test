function solution(num, total) {
    let start = total/num-(num-1)/2;
    var answer = [];
    for (let i=0; i<num; i++) {
        answer.push(start+i);
    }
    return answer;
}