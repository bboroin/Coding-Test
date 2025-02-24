function solution(numbers, k) {
    var answer = 2*(k-1);
    while(numbers.length<answer) {
        answer = answer%numbers.length
    }
    return numbers[answer];
}