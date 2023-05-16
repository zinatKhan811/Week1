//File read and write
const e = require('express');
const fs = require('fs');
const { resolve } = require('path');

const getNewId = (array)=> {

if(array.length>0){
return array[array.length -1 ].id +1
}else{
    return 1;
}
//create new date
const newDate = () => new Date().toString();

// const newDate = () => {
//     return new Date().toString();
// };

function mustBeInArray(array, id){
    return new Promise((resolve,reject)=>{
const row = array.find(r=> r.id == id)
if(!row){
reject({
    message:'ID not found',
    status:404
})
}
resolve(row)
    });
}

function writeJSONFile(fileName, content){
fs.writeFileSync(fileName,
     JSON.stringify(content), 
     'utf8', 
     (err)=>{
        if(err){
            console.log("Helper file writeJSONfile: "+err);
        }
    })
}

module.exports = {
    getNewId,
    newDate,
    mustBeInArray,
    writeJSONFile
}
}