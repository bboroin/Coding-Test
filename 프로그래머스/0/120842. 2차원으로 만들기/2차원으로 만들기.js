function solution(num_list, n) {
    var answer = new Array(num_list.length/n).fill(0).map((_, i) => num_list.splice(0, n)) ;
    return answer;
}