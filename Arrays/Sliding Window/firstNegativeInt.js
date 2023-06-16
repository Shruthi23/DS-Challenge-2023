function printFirstNegativeInteger(n, k, arr) {
    let i =0
    let j = 0
    let list = []
    let res = []
    while(j<n){
        if(arr[j] < 0) list.push(arr[j])
        //console.log("push-->",list)
        if(j-i+1 < k){
            j++
        }
        else if(j-i+1 == k){
            if(list.length == 0) res.push(0)
            else{
                res.push(list[0])
                if(arr[i] == list[0]) list.shift()
            }
            i++
            j++
        }
    }
   // console.log("Res",res)
    return res
}
