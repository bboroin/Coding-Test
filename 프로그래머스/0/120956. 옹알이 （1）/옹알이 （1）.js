function solution(babbling) {
    const arr = ["aya","ye","woo","ma"];

    let answer = 0;

    babbling.forEach(str => {
     let strLength = str.length

     for(let i = 0 ; i < arr.length ; i++) {
       if(str.includes(arr[i])) 
         strLength = strLength - arr[i].length;

       if(strLength === 0) {
         answer++;
         break;
       }
     }
    })      
    return answer;
}