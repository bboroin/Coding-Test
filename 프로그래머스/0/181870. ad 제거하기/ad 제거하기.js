function solution(strArr) {
    return strArr.filter((el) => !el.includes('ad')).map((v) => v);
}