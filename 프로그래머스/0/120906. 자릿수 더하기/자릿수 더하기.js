function solution(n) {
    let arr = n.toString().split('').map(v=>Number(v));
    return arr.reduce((acc, cur)=>acc+cur, 0);
}