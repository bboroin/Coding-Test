function solution(arr) {
    let i = 0;
    while(true) {
        const cur = arr.map(num=> (num>=50 && num%2==0) ? num/2 : (num<50 && num%2==1) ? num*2+1 : num);
        const next = arr.every((v, i) => v === cur[i])

        if (next) break;
        i++;
        arr = cur;
    }
    return i;
}