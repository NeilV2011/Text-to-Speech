// // // // let x = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

// // // // let date = new Date().toString()
// // // // console.log(date)
// // // //=================================
// // // var animals = ["cat", "pup", "lion", "dog"];
// // // // animals.sort(); 
// // // animals.sort(function(a,b){
// // //     return b.localeCompare(a)
// // // })
// // // console.log(animals)

// // // //-------------------------------

// // // // // let num = [1, 21, 35, 16, 4, 94]
// // // // // //1, 4, 16, 21, 35, 94
// // // // // // num.sort();

// // // // // //--------------
// // // // // num.sort(function(a,b){
// // // // //     return a-b
// // // // // })

// // // // // //--------------

// // // // // num.sort(function(a,b){
// // // // //     return b-a
// // // // // })
// // // // let pupNum = [3,34,65, 84, 87, 1666, 3386]
// // // // pupNum.sort(
// // // //     functionsort a-b
// // // // );

// // // // console.log(pupNum)

// // // let myArray = ["ac", "ad", "aa", "ab", "ar"]
// // // // myArray.sort()
// // // myArray.sort(function (a, b){
// // //     return a.localeCompare(b)
// // // })
// // // console.log(myArray)


// // let num = [1, 4, 25, 31, 97, 102]
// // // num.sort(function (a, b){
// // //     return a-b
// // // })
// // // console.log(num)

// // // let appliance = ["oven", "microwave", "gasstove", "refrigerator"]
// // // appliance.sort(function(a, b){
// // //     b.localeCompare(a)
// // // })
// // // console.log(appliance)

// // let furniture = ["couch", "chair", "table", "desk", "slab"]
// // furniture.sort(function(a, b){
// //     return b.localeCompare(a)
// // })

// // console.log(furniture)





// // let puppies = ["Bella", "Amber", "Fudge", "Cocoa"]
// // puppies.sort(function(a, b){
// //     return a.localeCompare(b)
// // })
// // console.log(puppies)

// // let numbers = [1, 16, 102, 62, 32, 83, 101]
// // numbers.sort(function(a, b){
// //     return b-a
// // })
// // console.log(numbers)

// // let num = [1, 102, 63, 41, 404, 3033, 634]
// // num.sort(function(a, b){
// //     return b-a
// // })
// // console.log(num)

// // let num = [1, 102, 63, 41, 404, 3033, 634]
// // num.sort(function(a, b){
// //     return a-b
// // })
// // // console.log(num)
// // // let randomThings = ["carpet", "dog", "scooter", "kyrgyzstan", "alabama"]
// // // randomThings.sort(function(a, b){
// // //     return a.localeCompare(b)
// // // })
// // // console.log(randomThings)
// // let randomThings = ["carpet", "dog", "scooter", "kyrgyzstan", "alabama"]
// // randomThings.sort(function(a, b){
// //     return b.localeCompare(a)
// // })
// // console.log(randomThings[0])

// // function looping(name){
// //     if(name==="Nysa"){
// //     return "Perfect!"
// //     }else{
// //         return "sorry data is incorrect!"
// //     }
// // }

// // console.log(looping("Nysa"))      

// // function practiceTest (a, b){
// //     if(a-b==5) {
// //         return "Correct!"
// //     }
// //     if(a-b!==5) {
// //         return "Incorrect!"
// //     }
// // }

// // console.log(practiceTest(7, 2))


// // let num = [ 102, 63, 0, 604, 1027, 4724, 323]
// // num.sort(function(a, b){
// //     return a-b
// // })

// // console.log(num)

// // let sports = ["soccer", "basketball", "baseball", "volleyball", "tennis", "dodgeball"]
// // sports.sort(function(a, b){
// //     return a.localeCompare(b)
// // })

// // console.log(sports)

// // let num = "12"
// // let numString = Number(num)
// // console.log(numString)
// // console.log(typeof(numString))
// // console.log(typeof(num))

// //string to number====> Number(whatever you want to convert)
// //number to string====> whateverYouWantToConvert.toString()
// let animals = ["dog", "elephant", "tiger"]
// console.log(animals[2])

// let myObj = {
//     name:"neil",
//     age:9,
//     hobby:"coding",
//     pupName:"amber"

// }
// console.log(myObj.pupName)

// function myFunction(a,b,c){
//     return a+b+c
// }
// // console.log(myFunction(17, 19,10))
// // console.log(myFunction(170, 190))
// // console.log(myFunction(1700, 1900))
// // console.log(myFunction(17000, 19000))
// // console.log(myFunction(170000, 1900000))

// function checkEquality(a, b){
//     if(a%b==0){
//     return true   
//     } 
//     if(a%b==1){
//         return false
//     }
//     if(a%b==3){
//         return true
// //     }
// // }
// console.log(checkEquality(9, 3))


function reverseString(str){
    let s = str.split(' ')
    console.log(s)
    let newString = s.reverse().join("")
    

    console.log(newString)
}
reverseString("olleh")