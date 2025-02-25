function solution(numbers) {
    var answer = 0;
    return numbers.sort((a, b)=>b-a).splice(0, 2).reduce((acc, cur)=>acc*=cur);
}