function solution(s){
    let p = s.toLowerCase().split('').filter(v=>v==='p');
    let y = s.toLowerCase().split('').filter(v=>v==='y');

    return p.length === y.length;
}