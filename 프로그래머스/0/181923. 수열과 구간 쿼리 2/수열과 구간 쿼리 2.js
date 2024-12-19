function solution(arr, queries) {
    var answer = [];
    for (let [s, e, k] of queries) {
        let temp = arr.filter((v, i) => (s<=i && i<=e && v>k)).sort((a, b) => a-b)[0];
        answer.push(temp ? temp : -1);
    }
    return answer;
}