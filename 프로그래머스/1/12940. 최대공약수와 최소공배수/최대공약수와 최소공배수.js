function fnGCD(a, b) {
    return b === 0 ? a : fnGCD(b, a % b);
}

function solution(n, m) {
    const gcd = fnGCD(n, m);
    const lcm = n*m / fnGCD(n, m);
    return [gcd, lcm];
}