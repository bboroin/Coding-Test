function solution(a, b, n) {
    let bottle = n; // 현재 갖고 있는 콜라 병 수
    let newCoke = 0; // 새로 얻은 콜라 병 수
    
    while (bottle >= a) {
        const coke = Math.floor(bottle/a) * b;
        newCoke += coke;
        bottle = coke + (bottle%a);
    }
    
    return newCoke;
}