function solution(my_strings, parts) {
    const substring = parts.map(([s, e], index)=>my_strings[index].slice(s, e+1)).join('')
    return substring;
}