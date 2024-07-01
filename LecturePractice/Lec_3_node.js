jsonString = '{"Name" : "Mandar","Surname":"Gurjar","Age" : "19"}'
jsonObject = JSON.parse(jsonString);
console.log(jsonObject.Age)

const jsonObj = {
    name: "Mandar",
    surname : "Gurjar",
    age : 19
}

const jsonstr = JSON.stringify(jsonObj)
console.log(jsonstr)

