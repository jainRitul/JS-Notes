let arr = [1,2,3]

// arr.forEach((val,index,arr) =>console.log(val , index,arr))

Array.prototype.customForEach = function(callback){
    for(let i = 0;i<this.length;i++){
        callback(this[i] , i, this)
    }
}
arr.customForEach((val,index,arr)=>{
    console.log(val,index,arr);
})

