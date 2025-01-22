function solution(rank, attendance) {
    let a = rank.filter((_, i)=>attendance[i]).sort((a, b)=>a-b).map((v, i)=>rank.indexOf(v)).splice(0, 3)
    return 10000*a[0]+100*a[1]+a[2];
}