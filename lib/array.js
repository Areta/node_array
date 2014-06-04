var array={};
array.work=function(arrays/*JSON*/,name/*Streang*/,val/*Streang*/,callback){
    var new_array={};
    for(var index in arrays){
        if(typeof arrays[index] ==="object"){
            if(name){
                new_array[arrays[index][name]] ={};
            }
            if(val){
                new_array[arrays[index][name]]=arrays[index][val];
            }
            else{
                new_array[arrays[index][name]]=arrays[index];
            }
 
        }
  
    }
        callback(new_array);
    }
   
module.exports = array;




