function solution(id_pw, db) {
    var answer = "fail";
    for (let i=0; i<db.length; i++) {
        if ( id_pw[0] === db[i][0]) {
            id_pw[1] === db[i][1] ? answer = "login" : answer = "wrong pw";
        }
    }
    return answer;
}