console.log('Hello world')

for(let i=1;i<=10;i++){
    setTimeout(()=>{
        console.log(i)
    },i*1000)
}

function callback1(){
    console.log('This is after function 1')
}

function callback2(){
    console.log('This is after function 2')
}

function executefunction(a){
    return a();
}

const add =(a,b,c)=> {
    console.log('result:'+  (a+b))

    if(Array.isArray(c)){
        c.forEach(fn =>{
            if(typeof fn === 'function'){
                executefunction(fn);
            }
        })
    }else{
        console.log('Third parameter is not an array of functions')
    }
}

functionsarray =  [callback1,callback2]
add(1,2,functionsarray)

