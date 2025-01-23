function solution(picture, k) {
    let answer = []
    for (let i=0; i<picture.length; i++) {
        let pic = [...picture[i]].map(v=>v.repeat(k)).join('');
        for (let j=0; j<k; j++) {
            answer.push(pic);
        }
    }
    return answer;
}