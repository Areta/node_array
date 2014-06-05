node_array
==========

node_array


###Introduction

----------------------------------
Example:

 var array = require('node_array');
args={
"0":{"native":"apple",
      "foreign":"banana",
      "berry":"strawberry"},
"1":{"native":"Carpathians",
     "foreign":"Alps",
     "lake":"Svitiaz"
    }
};
array.work(args,"native","",function(new_array){
console.log(new_array);
});
