function solution(dots) {
    const [x1, y1] = [
        Math.min(...dots.map(v=>v[0])),
        Math.min(...dots.map(v=>v[1]))
    ];
    const [x2, y2] = [
        Math.max(...dots.map(v=>v[0])),
        Math.max(...dots.map(v=>v[1]))
    ]
                 
    return (x2-x1)*(y2-y1)
}