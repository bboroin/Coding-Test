function solution(s) {
    var answer = '';
    return s.split(" ").map((word)=>word.split("").map((v, i)=>i%2 ? v.toLowerCase() : v.toUpperCase()).join("")).join(" ");
}