function solution(n) {
    let arr = new Array(n).fill(0).map(()=>new Array(n).fill(0));
    let answer = arr.map((_, i)=>arr[i][i] = 1)
    return arr;
}