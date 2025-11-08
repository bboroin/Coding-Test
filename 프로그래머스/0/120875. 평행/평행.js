function solution(dots) {
    const [a, b, c, d] = dots
    
    if (cal(a, b) === cal(c, d)) return 1;
    if (cal(a, c) === cal(b, d)) return 1;
    if (cal(a, d) === cal(b, c)) return 1;
    return 0
}

function cal(arr1, arr2) {
    return (arr2[1] - arr1[1]) / (arr2[0] - arr1[0]);
}