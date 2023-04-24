// arrow function =>
// can use let or const

let coffeIsGrinding = false

let pressGrindBeans = () =>{
    if (coffeIsGrinding){
        console.log("stopping the grind")
        coffeIsGrinding = false
    } else{
        console.log("Grinding is about to begin")
        coffeIsGrinding=true
    }
}
// when you run the code twice you will see both values of the
// if stament becaue each time it is ran then the value changes
// pressGrindBeans()
// pressGrindBeans()


// () these are for parameters and allow for data to be inputed 
let cashWithdrawal = (amount, accnum)=>{
    console.log(`withdrawring ${amount} from account number ${accnum}`)
}

// when calling the function with the data use the () to give the data you want inputting into the arguments 
// cashWithdrawal(250, 507761)
// cashWithdrawal(10, 5564231)

// can use variables in functions 
let accnumber=2357769
let cashWithdrawals = (amount, accnum)=>{
    console.log(`withdrawring ${amount} from account number ${accnum}`)
}

// cashWithdrawals(500, accnumber)


const addUp = (num1,num2) =>{
    return num1 + num2
}
// addUp(10,27)
// console.log(addUp(10,47))

// functions can be used to call other functions 
const multiplyByNineFifths = (celsius) =>{
    return celsius * (9/5)
}
const getFahranenhite=(celsius)=>{
    return multiplyByNineFifths (celsius)+32
}
console.log(`the temperature is ${getFahranenhite(15)}°C`)