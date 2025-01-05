function solution(num_list) {
    let idx = 0;
    for (let i=0; i<num_list.length; i++) {
        while (true) {
            if (num_list[i]==1) break;
            else if (num_list[i]%2==0) num_list[i]=num_list[i]/2;
            else num_list[i]=(num_list[i]-1)/2;
            idx++;
        }
    }
    return idx;
}