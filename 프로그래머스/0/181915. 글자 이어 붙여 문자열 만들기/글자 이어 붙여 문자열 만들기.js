function solution(my_string, index_list) {
    return index_list.reduce((acc, i) => {
        return acc + my_string[i]
    }, '')
}