function solution(n) {
    let p = 6;
    while(true) {
        if (p%n == 0) break;
        p += 6;
    }
    return p/6;
}