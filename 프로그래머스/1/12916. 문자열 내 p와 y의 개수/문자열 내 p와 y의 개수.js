function solution(s){
    s = [...s.toLowerCase()];    

    return s.filter(v=>v==="p").length === s.filter(v=>v==="y").length;
}