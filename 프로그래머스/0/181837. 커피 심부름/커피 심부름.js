function solution(order) {
    let ame = 0;
    let cafe = 0;
    let newOrder = order.map(v=>v=='anything'?v.replace('anything', 'americano'):v);
    newOrder.map(v=>v.includes('americano')?ame++:cafe++);
    return ame*4500+cafe*5000;
}