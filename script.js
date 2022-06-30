let display = document.querySelector('.screen');
let inScreen = document.createElement('div');
let childDivs = document.querySelector('.container').getElementsByTagName('div');
inScreen.innerText = '0'
display.append(inScreen)

let arr =[]
let numbers = []
let sign;
let num = ''
let currentValue = 0;

for (let i=0;i < childDivs.length;i++){
    arr.push(childDivs[i])
}


function operations(num1,num2,operator){
    if (sign === '+'){
        num1+=parseFloat(num2);
        currentValue = num1
        return currentValue;
    } else if (sign === '-'){
        num1-=parseFloat(num2);
        return currentValue;
    } else if (sign === '*'){
        num1 *= parseFloat(num2);
        return currentValue;
    } else if (sign === '/'){
        num1 /=parseFloat(num2);
        return currentValue;
    }
}

for (let j=0;j < arr.length;j++){
    arr[j].addEventListener('click',()=>{
    if (arr[j].className === '+'||arr[j].className === '-'||arr[j].className === '*'||arr[j].className === '/'){
        inScreen.innerText = '';
        numbers.push(num);
        console.log(num)
        currentValue = Number(num);
        console.log(`Current Value is ${currentValue}`)
        numbers.push(arr[j].className)
        sign = arr[j].className;
        console.log(sign);
        inScreen.innerText = sign
        num = '';
        console.log(numbers)
        } else if (arr[j].className === '='){
            console.log(operations(operations()))

        }
        
        else {
            num += arr[j].className;
            inScreen.innerText =  num;
            }
        })
}


console.log(childDivs)
console.log(arr)
// console.log(firstNum)
console.log(sign)
console.log(numbers)