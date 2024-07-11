let arr = [1,2,3]
Array.prototype.extraProp = "ritul"

for(const  v in arr){
    if(arr.hasOwnProperty(v))
     console.log(v);
}
