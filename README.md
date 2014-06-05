node_array
==========
# Introduction

This module processes the array, grouping it in a prescribed 
parameter <br>
## Example:<br>
`var array = require('node_array');`<br>
`args={`<br>
    `"0":{"native":"apple",`<br>
         `"foreign":"banana",`<br>
         `"berry":"strawberry"},`<br>
    `"1":{"native":"Carpathians",`<br>
          `"foreign":"Alps",`<br>
           `"lake":"Svitiaz"}`<br>
   `};`<br>

`array.work(args,"native","",function(new_array){`<br>
`console.log(new_array);`<br>
`});`<br>

## Install the package:

`my-project$ npm i node_array`
