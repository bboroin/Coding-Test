function solution(num_list) {
    let odd = [];
    let even = [];
    
    for (const num of num_list) {
        num%2 === 0 ? even.push(num) : odd.push(num)
    }
    
    return Number(odd.join('')) + Number(even.join(''));
}