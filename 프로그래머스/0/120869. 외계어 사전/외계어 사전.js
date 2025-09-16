function solution(spell, dic) {
    return dic.some(word=>spell.every(i=>word.includes(i))) ? 1 : 2;
}