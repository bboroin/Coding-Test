function solution(A, B) {
    var count = 0;
    let Aarr = [...A]
    while (A !== B) {
        Aarr.unshift(Aarr.pop());
        A = Aarr.join("");
        count++;
        if (A.length < count) return -1;
    }
    return count;
}