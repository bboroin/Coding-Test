function solution(arr, n) {
    let answer = [];
    if (arr.length%2==0) {
        for(let i=0; i<arr.length; i++) {
            if (i%2!==0) arr[i] = arr[i] + n;
        }
        answer = arr;
    }
    else {
        for(let i=0; i<arr.length; i++) {
            if (i%2==0) arr[i] = arr[i] + n;
        }
        answer = arr;
    }
    return answer;
}