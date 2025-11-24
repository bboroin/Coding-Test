function solution(s) {
    var answer = [];
    let word = [];
    for (let i=0; i<s.length; i++) {
       if ( word.includes(s[i]) ) {
           answer.push(Math.abs(i-word.lastIndexOf(s[i])));
       } else answer.push(-1);
       word.push(s[i]);

    }
    return answer;
}