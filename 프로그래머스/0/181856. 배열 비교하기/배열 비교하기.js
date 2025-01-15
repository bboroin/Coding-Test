function solution(arr1, arr2) {
    let sum1 =0;
    let sum2 =0;
    if (arr1.length != arr2.length) {
        return arr1.length > arr2.length ? 1 : -1;
    }
    else {
        arr1.forEach(v=>sum1+=v);
        arr2.forEach(v=>sum2+=v);
        return sum1 == sum2 ? 0 : sum1 > sum2 ? 1 : -1
    }
}