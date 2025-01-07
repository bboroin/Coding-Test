function solution(myString, pat) {
    let idx = myString.lastIndexOf(pat);
    let str = myString.substring(0, idx);
    return str+pat;
}