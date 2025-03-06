function solution(my_string, num1, num2) {
    return my_string.split('').map((v, i)=>{
        if (i===num1) return my_string[num2];
        if (i===num2) return my_string[num1];
        else return v;
    }).join('');
}