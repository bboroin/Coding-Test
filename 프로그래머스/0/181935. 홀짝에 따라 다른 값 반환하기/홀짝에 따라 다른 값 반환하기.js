// function solution(n) {
//     let answer = 0;
//     if (n%2 === 0)
//         for (i=1; i<n+1; i++) {
//             if (i%2 === 0)
//                 answer +=i*i
//         }
//     else
//         for (i=1; i<n+1; i++) {
//             if (i%2 === 1)
//                 answer +=i;
//         }
            
//     return answer;
// }

function solution(n) {
    let odd = 0;
    let even = 0;

    for(let i = 0; i <= n; i++) {
        i%2===0 ? even += Math.pow(i, 2) : odd += i;
    }
    return n%2===0 ? even : odd;
}