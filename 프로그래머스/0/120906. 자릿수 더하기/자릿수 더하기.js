function solution(n) {
    let arr = n.toString().split('').map(v=>Number(v));
    return arr.reduce((cur, v)=>cur=v+cur);
}