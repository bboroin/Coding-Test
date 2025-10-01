function solution(phone_number) {
    var str = phone_number.slice(-4);
    
    return [...Array(phone_number.length-4).fill("*"), str].join("");
}