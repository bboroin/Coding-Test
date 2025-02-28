function solution(n) {
    let answer = [];
    let divisor = 2; // 가장 작은 소수부터 시작

    while (n > 1) {
        if (n % divisor === 0) {
            if (!answer.includes(divisor)) { // 중복 방지
                answer.push(divisor);
            }
            n /= divisor; // n을 나눠줌
        } else {
            divisor++; // 나누어지지 않으면 다음 숫자로
        }
    }

    return answer;
}
