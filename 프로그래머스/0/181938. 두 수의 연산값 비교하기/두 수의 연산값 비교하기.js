/*
// 삼항연산자 이용
function solution(a, b) {
    let num1 = String(a)+String(b);
    let num2 = 2*a*b;
    return num1>=num2 ? Number(num1) : num2;
}
*/

// Math.max 이용
function solution(a, b) {
    
    return Math.max(Number(`${a}${b}`), 2*a*b);
}