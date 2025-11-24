function solution(s) {
    return s.split("").map((v, i)=>{
        let count = s.slice(0, i).lastIndexOf(v);
        return count === -1 ? count : i - count; 
    });
}