function solution(n) {
    var answer = 0;
    for (let i=1; i>0; i++) {
        if (6*i%n == 0) return i
    }
}