function solution(a, b, c, d) {
    var answer = 0;
    const set = new Set([a, b, c, d]);
    const temp = [a, b, c, d].sort((a, b) => a-b)
    switch (set.size) {
        case 1: 
            // aaaa
            answer = 1111*temp[0]; break;
        case 2: 
            // aa bb
            if (temp[0] === temp[1] && temp[2] === temp[3]) {
                answer = (temp[0]+temp[2])*Math.abs(temp[0]-temp[2]);
            }
            // aaa b
            else {
                answer = temp[0] === temp[1] ? Math.pow(10*temp[2]+temp[3], 2) : Math.pow(10*temp[1]+temp[0], 2);
            }
            break;
        case 3: 
            // aa b c
            answer = temp[0] === temp[1] ? temp[2]*temp[3] : temp[1] === temp[2] ? temp[0]*temp[3] : temp[0]*temp[1]; 
            break;
        case 4:
            // a b c d
            answer = temp[0]; break;
    }
    return answer;
}