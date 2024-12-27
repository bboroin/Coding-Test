function solution(intStrs, k, s, l) {
    const answer = intStrs.map(function(intStrs) {
        return Number(intStrs.slice(s, s+l));
    }).filter(num => num>k)
    return answer;
}