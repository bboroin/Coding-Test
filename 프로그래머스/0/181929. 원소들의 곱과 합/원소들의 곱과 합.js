function solution(num_list) {
    sum1 = 1;
    sum2 = 0;
    
    for (let n of num_list) {
        sum1 *= n;
        sum2 += n;
    }
    return sum1 < Math.pow(sum2, 2) ? 1 : 0;;
}