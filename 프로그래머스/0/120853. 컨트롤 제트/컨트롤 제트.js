function solution(s) {
    var answer = [];
    s.split(' ').forEach((v)=>{
        if (v === 'Z')
            answer.pop();
        else
            answer.push(Number(v))
    });
    return answer.reduce((acc, cur)=>acc+=cur,0)
}