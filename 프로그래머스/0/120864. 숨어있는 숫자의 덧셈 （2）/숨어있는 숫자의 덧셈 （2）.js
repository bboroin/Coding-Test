function solution(my_string) {
    return my_string.split(/[a-zA-Z]/).filter(v=>v).reduce((acc, cur)=>acc+parseInt(cur), 0);
}