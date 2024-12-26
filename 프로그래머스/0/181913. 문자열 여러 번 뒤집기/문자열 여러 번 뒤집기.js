function solution(my_string, queries) {
    let result = my_string;

    for (let [s, e] of queries) {
        let reversed = result.slice(s, e + 1).split('').reverse().join('');
        result = result.slice(0, s) + reversed + result.slice(e + 1);
    }

    return result;
}