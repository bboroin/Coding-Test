function solution(numlist, n) {
    return numlist.sort((a, b) => {
        let diff = Math.abs(a - n) - Math.abs(b - n) 
        if (diff === 0) return b - a;
        return diff
        });
}