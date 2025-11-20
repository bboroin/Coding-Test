function solution(sizes) {
    let maxBig = 0;
    let maxSmall = 0;
    
    for (let [w, h] of sizes) {
        const big = Math.max(w, h);
        const small = Math.min(w, h);
        
        if (big > maxBig) maxBig = big;
        if (small > maxSmall) maxSmall = small;
    }
    return maxBig*maxSmall;
}