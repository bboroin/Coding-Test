function solution(my_string, overwrite_string, s) {
    const mystr = [...my_string];
    mystr.splice(s, overwrite_string.length, overwrite_string);
    return mystr.join("");
}