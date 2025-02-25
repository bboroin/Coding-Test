function solution(n) {
    let count = 0; // 합성수 개수를 저장할 변수

    for (let i = 1; i <= n; i++) {
        let divisorCount = 0; // 현재 숫자의 약수 개수

        for (let j = 1; j <= i; j++) {
            if (i % j === 0) divisorCount++; // 약수이면 개수 증가
        }

        if (divisorCount >= 3) count++; // 약수 개수가 3개 이상이면 합성수 카운트 증가
    }

    return count;
}
