function solution(arr) {
    const rowCount = arr.length;        // 행의 수
    const colCount = arr[0].length;    // 열의 수

    // 행이 더 많다면
    if (rowCount > colCount) {
        for (let i = 0; i < rowCount; i++) {
            while (arr[i].length < rowCount) {
                arr[i].push(0);  // 행의 길이를 맞추기 위해 0 추가
            }
        }
    }

    // 열이 더 많다면
    else if (colCount > rowCount) {
        for (let i = 0; i < colCount - rowCount; i++) {
            arr.push(new Array(colCount).fill(0)); // 새 행 추가 (0으로 채워짐)
        }
    }

    return arr;
}
