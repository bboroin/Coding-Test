function solution(order) {
    let result = 0;
    order.forEach(v=>v.includes('latte')?result+=5000:result+=4500);
    return result;
}