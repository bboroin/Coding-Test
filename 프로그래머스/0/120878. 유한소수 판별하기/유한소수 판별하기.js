function fnGCD(a, b){
    return (a%b)? fnGCD(b, a%b) : b;
}

function solution(a, b) {
    const gcd = fnGCD(a, b);
    b = b/gcd;
    
    while (b % 2 === 0) b /= 2;
    while (b % 5 === 0) b /= 5;
    
    return  b === 1 ? 1 : 2;
}