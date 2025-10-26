function solution(chicken) {
    let order = 0;
    let coupon = chicken;
    
    while (coupon >= 10) {
        const service = Math.trunc(coupon / 10);
        order += service;
        coupon = service + (coupon % 10);
    }
    
    return order;
}