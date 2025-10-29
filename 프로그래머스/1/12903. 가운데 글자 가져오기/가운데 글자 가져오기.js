function solution(s) {
    const a = Math.floor(s.length/2);
    return s.length%2 ? s[a] : s[a-1]+s[a];
}