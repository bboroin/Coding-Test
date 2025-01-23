function solution(picture, k) {
    let answer = []
    picture.map(v=>{
        let pic = [...v].map(el=>el.repeat(k)).join('');
        for (let j=0; j<k; j++) {
            answer.push(pic);
        }
    })
    return answer;
}