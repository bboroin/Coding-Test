function solution(num_list) {
    let answer = 0;
    if (num_list.length >= 11)
        num_list.forEach((num) => answer+=num);
    else {
        answer = 1;
        num_list.forEach((num) => answer*=num);
    }
    return answer;
}