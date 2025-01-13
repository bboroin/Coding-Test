function solution(myString, pat) {
    let str = [];
    for (let i=0; i<myString.length; i++) {
        if (myString[i] === "A") {
            str.push("B");
        }
        else 
            str.push("A");
    }
    return +str.join('').includes(pat);
}