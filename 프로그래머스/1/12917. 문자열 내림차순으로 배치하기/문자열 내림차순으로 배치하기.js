function solution(s) {
    var answer = [...s].sort();
    return s.split("").sort().reverse().join("");
}