function solution(before, after) {
    var answer = 0;
    
    return before.split("").sort().join("") == after.split("").sort().join("") ? 1 : 0;
}
