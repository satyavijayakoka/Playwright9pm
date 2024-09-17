const { test, expect } = require('@playwright/test')

let id =
//API ==> Application programing interface

//Create 
//Update 
//Retrive 
//Delete 
//CRUD opretions 

//GET ==> information retrive
//POST ==> Create
//PUT ==> Update
//Delete ==> delete info 

test('verify API GET request',async({request})=>{
let req = await request.get('https://reqres.in/api/users?page=2')
console.log(await req.status())
console.log(await req.json())

let res = await req.json()
//console.log(await req)
console.log(await res.total)
console.log(res.data[0].first_name)
console.log(res.data[3].last_name)
expect(res.per_page).toBe(6)
expect(res.total_pages).toBe(2)
expect(req.status()).toBe(200)
})

test('verify API POST request',async({request})=>{
let req2 = await request.post("https://reqres.in/api/users",{
    data: {
            "name": "vijayalakshmi",
            "job": "student"
    }
})

let res2 = await req2.json()
console.log(res2)
expect(req2.status()).toBe(201)
expect(res2.name).toBe("vijayalakshmi")
expect(res2.job).toBe("student")
 id = res2.id
console.log(id)

})

test.only('verify API PUT request',async({request})=>{
await console.log(id)
let req3 = await request.put(`https://reqres.in/api/users/${id}`,{
    data:{
        "name": "koshika",
        "job": "zion resident"
    }
})
let res3 = await req3.json()
console.log(res3)
expect(req3.status()).toBe(200)
expect(res3.name).toBe('koshika')
expect(res3.job).toBe('zion resident')
})

test.only('verify API DELETE request',async({request})=>{
await console.log(id)
let req4 = await request.delete(`https://reqres.in/api/users/${id}`)
expect(req4.status()).toBe(204)
})