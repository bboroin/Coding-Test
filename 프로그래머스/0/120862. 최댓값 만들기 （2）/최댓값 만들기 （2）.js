function solution(numbers) {
    const max = numbers.sort((a, b)=>b-a).slice(0, 2).reduce((acc, cur)=>acc*cur);
    const min = numbers.sort((a, b)=>b-a).slice(numbers.length-2, numbers.length).reduce((acc, cur)=>acc*cur);
    return min > max ? min : max;
}