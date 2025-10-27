function solution(score) {
    const avgArr = score.map(([a, b])=> (a+b)/2);
    const sort = [...avgArr].sort((a, b)=>b-a);
    return avgArr.map((v, i)=>sort.indexOf(v)+1);
}