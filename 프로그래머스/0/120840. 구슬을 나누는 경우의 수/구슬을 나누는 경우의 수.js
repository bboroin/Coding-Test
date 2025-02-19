function solution(balls, share) {
    let factorial = (num)=>{
        let answer = 1;
        for (let i=1; i<=num; i++) {
            answer *= i;
        }
        return answer;
    };
    
    return Math.round(factorial(balls)/(factorial(balls-share)*factorial(share)));
}