function solution(arr, k) {
    let setArr = [...new Set(arr)].slice(0, k);
    while (setArr.length < k) {
        setArr.push(-1);
    }
    return setArr;
}