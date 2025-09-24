function solution(n) {
    let count = 1;
    for (let i=1; i<=n; i++) {
        while (count%3 === 0 || String(count).includes("3")) count++
        count++;
    }
    return count-1;
}