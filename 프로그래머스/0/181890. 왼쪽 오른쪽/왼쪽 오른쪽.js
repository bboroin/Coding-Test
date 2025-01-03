function solution(str) {
    for (let i=0; i<str.length; i++) {
        if (str[i] == 'l')
            return str.slice(0, i)
        else if (str[i] == 'r')
            return str.slice(i+1)
    }
    return [];
}