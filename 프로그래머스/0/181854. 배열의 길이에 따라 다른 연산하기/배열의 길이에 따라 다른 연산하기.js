function solution(arr, n) {
    if (arr.length % 2) {
        return arr.map((v, i) => {
            if (!(i % 2)) v+=n;
            return v;
        })
    }

    return arr.map((v, i) => {
        if (i % 2) v+=n;
        return v;
    })
}