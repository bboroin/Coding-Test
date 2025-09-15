function solution(polynomial) {
    let arr = polynomial.split(' + ');
    let xNum = arr.filter(n => n.includes("x")).map(n => n.replace('x', '') || '1').reduce((acc, cur)=>acc + parseInt(cur), 0);
    let num = arr.filter(n=>!isNaN(n)).reduce((acc, cur)=>acc + parseInt(cur), 0);
    
    let answer = [];
    if(xNum) answer.push(`${xNum === 1 ? "" : xNum}x`);
    if(num) answer.push(num)
    return answer.join(' + ');
}