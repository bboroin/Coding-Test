function solution(s, n) {
    var answer = [];
    for (let char of s) {
        if (char === " ") answer.push(" ");
        else {
            let code = char.charCodeAt();
            if (code >= 65 && code <= 90) {
                code += n;
                if (code > 90) code -= 26;
            }
            else {
                code += n;
                if (code > 122) code -= 26;
            }
            answer.push(String.fromCharCode(code));
        }
    }
    return answer.join("");
}