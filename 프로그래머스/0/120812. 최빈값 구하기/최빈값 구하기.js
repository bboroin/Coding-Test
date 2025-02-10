function solution(array) {
    const answer = {};
    array.forEach(x=>{answer[x] = (answer[x]||0) + 1});
    const max = Math.max(...Object.values(answer));
    const maxCount = Object.values(answer).filter(v=>v===max).length;
    return maxCount == 1 ? Number(Object.keys(answer).find(key => answer[key] === max)) : -1;
}