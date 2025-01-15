function solution(strArr) {
  	// map을 사용해 문자열 길이 배열 생성
    const arr = strArr.map(v => v.length);
    
  	// forEach로 길이 빈도 계산:
    const result = {};
    arr.forEach((x) => { 
        result[x] = (result[x] || 0)+1; 
    });
  	// 최대 빈도 계산
    return Math.max(...Object.values(result));
}