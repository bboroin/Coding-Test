function solution(ineq, eq, n, m) {
    let operator = ineq+eq;
    if (operator === '>=')
        return n>=m ? 1 : 0;
    else if (operator === '<=')
        return n<=m ? 1 : 0;
    else if (operator === '>!')
        return n>m ? 1 : 0;
    else if (operator === '<!')
        return n<m ? 1 : 0;
}