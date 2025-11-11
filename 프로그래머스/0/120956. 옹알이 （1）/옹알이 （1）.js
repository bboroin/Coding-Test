function solution(babbling) {
    let answer = 0;
    const arr = ["aya","ye","woo","ma"];

    babbling.forEach(str => {
     let strLength = str.length

     for(let i = 0 ; i < arr.length ; i++) {
       if(str.includes(arr[i])) 
         strLength = strLength - arr[i].length;

       if(!strLength) {
         answer++;
         break;
       }
     }
    })        
    return answer;
}