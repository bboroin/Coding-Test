function solution(my_string) {
    var answer = '';
    return my_string.split(/a|e|i|o|u/).filter(v=>v).join('');
}