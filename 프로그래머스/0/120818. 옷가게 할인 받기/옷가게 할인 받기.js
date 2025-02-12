function solution(price) {
    switch(true) {
        case price >= 500000:
            return Math.floor(price - (price*0.2));
        case price >= 300000:
            return Math.floor(price - (price*0.1));
        case price >= 100000:
            return Math.floor(price - (price*0.05));
        default:
            return price;
    }
}