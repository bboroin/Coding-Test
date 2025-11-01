function solution(num, total) {
    const mid = Math.ceil(total / num)
    const min = num % 2 === 0 ? mid - (num / 2) : mid - ((num - 1) / 2 )

    return Array.from({ length: num }, (_, i) => min + i)
}