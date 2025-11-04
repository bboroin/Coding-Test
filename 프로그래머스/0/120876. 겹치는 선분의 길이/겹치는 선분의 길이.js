function solution(lines) {
  const diff = Array(202).fill(0);

  for (const [a, b] of lines) {
    diff[a + 100] += 1;  // 구간 시작: 변화 +1
    diff[b + 100] -= 1;  // 구간 끝: 변화 -1
  }

  let cur = 0, overlap = 0;
  for (let i = 0; i < 200; i++) {
    cur += diff[i];      // 누적합으로 현재 구간의 실제 겹침 개수 복원
    if (cur > 1) overlap++;
  }

  return overlap;
}