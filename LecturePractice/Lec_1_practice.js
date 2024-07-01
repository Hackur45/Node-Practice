var prompt = require('prompt-sync')();

function fetchdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const data = {name : 'John'}
            // const data = undefined
            if(data){
                resolve(data);
            }else{
                reject('Data not found')
            }
        },10000)
    })
}

async function displayData(){
    try{
        const data = await fetchdata();
        console.log(data);
    }catch(e){
        console.log(e)
    }
}

displayData()

const ages = [1,2,3,3,4,4,4];

const res = ages.filter(checkAge);

console.log(res)

function checkAge(a){
    return a > 1;
}

let a = prompt("Enter the number :")

