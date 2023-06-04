
//Brute-Force solution
var setZeroes = function(matrix) {
    console.log("matrix",matrix.length)
    let m=matrix.length
    for(let i=0;i<m;i++){
        for(j=0;j<matrix[0].length;j++){
            if(matrix[i][j] == 0){
                markRow(i,matrix)
                markCol(j,matrix)
            }
        }
    }
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            if(matrix[i][j] == -1){
                matrix[i][j] = 0
            }
        }
    }
    function markRow(row,matrix){
        for(let i =0;i<matrix[0].length;i++){
            if(matrix[row][i] !=0){
                matrix[row][i] = -1
            }
        }
    }
        function markCol(col,matrix){
        for(let i =0;i<matrix.length;i++){
            if(matrix[i][col] !=0){
                matrix[i][col] = -1
            }
        }
    }
    console.log("matric",matrix)
    return matrix
}

//Time Complexity
//(n*m) *(n+m) +(n*m) ==> n*m => loops, n+m => for each element marking ith row and ith col, n*m =>set to 0

//Better approach

var setZeroes = function(matrix) {
    let row=new Array(matrix.length)
    let col = new Array(matrix[0].length)
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            if(matrix[i][j] ==0){
                row[i] = 1;
                col[j] = 1
            }
        }
    }
     for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
           if(row[i] ==1 || col[j] ==1){
               matrix[i][j] =0
           }
    }
     }
     return matrix
     
     
 };
 //TC n*m + n*m ==> eliminating n+m for each 0 bu just marking the row and col to 1