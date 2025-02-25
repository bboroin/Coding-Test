function solution(n) {
    let factorial = (num) => {
        return num == 0 ? 1 : num * factorial(num - 1);
    };
    for (let i=1; i<=10; i++) {
        if (n<factorial(i)) return i-1;
    }
    return 10;
}