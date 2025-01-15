function solution(myStr) {
    const str = myStr.split(/a|b|c/).filter((v)=>v);
    return !str.length ? ["EMPTY"] : str;
}