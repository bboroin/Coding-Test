function solution(s) {
    var answer = '';
    return s.split('')
        .filter(v=>s.indexOf(v) === s.lastIndexOf(v))
        .sort()
        .join('')
}
// 요소의 현재 인덱스와 마지막 인덱스가 같을 경우를 찾아냄
// split의 구분자를 요소로 두었을 때 길이가 2보다 작은 경우를 찾아냄