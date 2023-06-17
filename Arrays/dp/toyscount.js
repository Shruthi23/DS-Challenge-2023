class Solution {
    
    calcMax(arr,K){
        console.log("cal")
        let pick = arr
    }
    
    toyCount(arr, N, K)
    {
        //console.log("K",K,arr)
        let dp = new Array(N).fill(-1)
       let final= calcMax(0,K)
       //console.log("final-->",final)
       return final
         function  calcMax(idx,sum){
             if(idx == arr.length-1) {
                 if(arr[N-1] <= sum){
                     dp[idx] = 1
                   return 1  
                 } 
                 else{
                     dp[idx]=0
                     
                  return 0
                 }
             }
             if(dp[idx] != -1) return dp[idx]
             let pick=0
             
             if(arr[idx]<sum){
              pick = 1+ calcMax(idx+1,sum- arr[idx] )
             }
             let notpick = 0+calcMax(idx+1,sum)
             dp[idx] = Math.max(pick,notpick)
             return Math.max(pick,notpick)
    }
       //return 10
    }
 
}