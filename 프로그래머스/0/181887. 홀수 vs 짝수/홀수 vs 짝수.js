function solution(num_list) {
    let even =0, odd =0;
    num_list.map((num, i)=>(i%2==0) ? even+=num : odd+=num)
    return even>odd?even:odd;
}