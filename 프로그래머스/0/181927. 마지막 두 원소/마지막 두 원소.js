function solution(num_list) {
    let e = num_list[num_list.length-2];
    let le = num_list[num_list.length-1];
    le>e ? num_list.push(le-e) : num_list.push(le*2);
    return num_list;
}