function solution(num_list) {
    let odd = num_list.filter(v=>v%2).length
    let even = num_list.filter(v=>!(v%2)).length
    return [even, odd];
}