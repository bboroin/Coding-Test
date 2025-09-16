function solution(sides) {
    let [a, b] = sides.sort((a, b)=>b-a)
    let answer = [];
    for (let i=1; i<=a; i++) {
        if (a < i+b)
        answer.push(i)
    }
    for (let i=a+1; i<a+b; i++) {
        if ( i < a+b)
        answer.push(i)
    }
    return answer.length;
}