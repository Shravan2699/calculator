//Can bind the keyboard keys with calculator keys,will do this some other time.This took a long time.NEED TO MOVE AHEAD NOW:))


let display = document.querySelector('.screen');
let inScreen = document.createElement('div');
let childDivs = document.querySelector('.container').getElementsByTagName('div');
inScreen.innerText = '0'
inScreen.style.fontSize = '2rem'
display.append(inScreen)

let arr =[]
let numbers = []
let sign;
let num = ''
let currentValue = 0;
for (let i=0;i < childDivs.length;i++){
    arr.push(childDivs[i])
}


console.log(`Numbers[0] before function is run: ${numbers[0]}`)


function operations(num1,num2,operator){
    if (sign === '+'){
        num1+=parseFloat(num2);
        return num1;
    } else if (sign === '-'){
        num1-=parseFloat(num2);
        return num1;
    } else if (sign === '*'){
        num1*= parseFloat(num2);
        return num1.toFixed(2);
    } else if (sign === '/'){
        num1/=parseFloat(num2);
        return num1.toFixed(2);
    }
}


for (let j=0;j < arr.length;j++){
    arr[j].addEventListener('click',()=>{
    if (arr[j].className === '.'){

    }else if (arr[j].className === 'bak'){
        console.log('Hiiii');
        num = num.slice(0,num.length-1)
        console.log(numbers[0])
        inScreen.innerText = num
        if (numbers[0] !== undefined){
            let strAnswer = numbers[0].toString();
            strAnswer = strAnswer.slice(0,strAnswer.length-1);
            inScreen.innerText = strAnswer;
            numbers[0] = parseFloat(strAnswer)
        }
    } else if (arr[j].className === '+'||arr[j].className === '-'||arr[j].className === '*'||arr[j].className === '/'){
        inScreen.innerText = '';
        console.log(numbers)
        numbers.push(num)
        numbers.push(arr[j].className)
        sign = arr[j].className;
        console.log(sign);
        inScreen.innerText = sign
        // console.log(numbers)
        num = '';
    } else if (arr[j].className === '='){
        numbers[0] = (operations(parseFloat(numbers[0]),currentValue,sign));
        console.log(numbers)
        console.log(`I am Num[0]: ${numbers[0]}`)
        inScreen.innerText = numbers[0];
        if (arr[j].className === 'bak'){
            backSpace(numbers[0]);
        }
    } else if (arr[j].className === 'ON/OFF'){
        numbers = [];
        num = '';
        inScreen.innerText = '';
        currentValue = 0;
    }else if (arr[j].className === 'clear'){
        if (inScreen.innerText!== ''){
            numbers = [];
            inScreen.innerText = '0';
            num = '';
        } else {
            inScreen.innerText = '';
            num = '';
            }
    } else if( arr[j].className === 'negativeSign'){
        if (numbers[0] > 0){
            num = -num;
            inScreen.innerText = `${num}`
            numbers[0] = -numbers[0];
        } else {
            numbers[0] = -1 * numbers[0];
            num = -1 * num;
            inScreen.innerText = `${num}`
        }
    } else {
        num += arr[j].className;
        currentValue = parseFloat(num)
        inScreen.innerText =  num;
        console.log(currentValue)
        }
    }
    )
}


let abc = 'STRING';
console.log(abc.slice(0,abc.length-1))