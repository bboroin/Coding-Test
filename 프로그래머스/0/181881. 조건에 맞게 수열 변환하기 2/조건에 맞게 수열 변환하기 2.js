function solution(arr) {
    var answer = 0;
    let before;

    do {
        before = [...arr]; // 이전 상태 저장

        arr = arr.map(e => {
            if (e >= 50 && e % 2 === 0) return e / 2; // 50 이상이고 짝수
            if (e < 50 && e % 2 !== 0) return e * 2 + 1; // 50 미만이고 홀수
            return e; // 나머지 경우
        });

        answer++;
    } while (!arr.every((e, idx) => e === before[idx]));

    return answer-1; // 반복 횟수 반환
}