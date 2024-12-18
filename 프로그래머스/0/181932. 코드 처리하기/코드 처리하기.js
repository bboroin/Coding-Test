function solution(code) {
    let mode = 0;
    const ret = [];
    for (let i=0; i<code.length; i++) {
        if (mode == 0)
            code[i] == 1 ? mode=1 : i%2===0 ? ret.push(code[i]) : mode
        else if (mode == 1)
            code[i] == 1 ? mode=0 : i%2===0 ? mode : ret.push(code[i])
    }
    ret.length === 0 ? ret.push('EMPTY') : ret;
    return ret.join('');
}