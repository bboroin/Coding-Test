function solution(myString) {
    return [...myString].map(v=>v<'l'?v='l':v).join('');
}