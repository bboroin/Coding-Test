function solution(numbers) {
    var answer = 0;
    numbers.forEach((v)=>answer+=v);
    return answer/numbers.length
}