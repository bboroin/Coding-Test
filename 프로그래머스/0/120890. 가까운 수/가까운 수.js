function solution(array, n) {
    return array.reduce((closest, num) => {
        // 현재 num과 n의 차이가 더 작은지 확인
        if (Math.abs(num - n) < Math.abs(closest - n)) {
            return num;
        }
        // 차이가 같으면 더 작은 값을 반환
        if (Math.abs(num - n) === Math.abs(closest - n)) {
            return num < closest ? num : closest;
        }
        return closest;
    }, array[0]);
}
