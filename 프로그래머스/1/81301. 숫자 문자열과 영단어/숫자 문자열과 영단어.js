const enNum = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
}
function solution(s) {
    const en = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let answer = s;
    
    for (let i=0; i<en.length; i++) {
        let arr = answer.split(en[i]);
        answer = arr.join(i);
    }
    
    return +answer;
}