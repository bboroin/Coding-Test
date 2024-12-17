function solution(a, b) {
    let abS = String(a)+String(b);
    let baS = String(b)+String(a);
    return abS>=baS? Number(abS) : Number(baS);
}
