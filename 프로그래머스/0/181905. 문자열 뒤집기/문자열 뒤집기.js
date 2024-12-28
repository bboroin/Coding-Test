function solution(my_string, s, e) {
    let str = my_string.slice(s, e+1);
    let new_str = str.split('').reverse().join('');
    return my_string.replace(str, new_str);
}