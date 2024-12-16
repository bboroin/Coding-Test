// 최대공약수 구하기
function cal_gcd(a, b) {
    return a % b === 0 ? b : cal_gcd(b, a % b);
}

function solution(numer1, denom1, numer2, denom2) {
    var answer = [];

    let numer = numer1 * denom2 + numer2 * denom1; // 분자
    let denom = denom1 * denom2; // 분모
    let gcd = cal_gcd(numer, denom); // 최대공약수     

    answer = [numer / gcd, denom / gcd];
    return answer;
}