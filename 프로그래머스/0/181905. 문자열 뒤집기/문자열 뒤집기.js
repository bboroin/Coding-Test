function solution(my_string, s, e) {
    var answer = '';
    let string1 = my_string.slice(0, s);
    let string2 = my_string.slice(s, e+1).split('').reverse().join('');
    let string3 = my_string.slice(e+1, my_string.length);
    return string1+string2+string3;
}