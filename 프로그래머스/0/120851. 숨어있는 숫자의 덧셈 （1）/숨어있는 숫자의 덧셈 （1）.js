function solution(my_string) {
    var answer = 0;
    return my_string.replace(/[^0-9]/g,'').split('').reduce((acc, cur)=>acc+=Number(cur), 0);
}