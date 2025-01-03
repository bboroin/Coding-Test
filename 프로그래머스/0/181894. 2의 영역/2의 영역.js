function solution(arr) {
    var answer = [];
    let first = arr.indexOf(2);
    let last = arr.lastIndexOf(2);
    
    if (first == -1) return [-1];
    
    for (let i=first; i<=last; i++) {
        answer.push(arr[i]);
    }
    return answer;
}