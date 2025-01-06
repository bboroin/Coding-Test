function solution(myString) {
    return myString.split('').map((v)=>{
        if (v === 'a') return v.toUpperCase();
        else if (v !== 'A') return v.toLowerCase();
        else return v;
    }).join('');
}