function evenNumberOnly(numbers){
    let evens=[];
    for(const number of numbers){
       if(number %2==0){
        console.log(number)
        evens.push(number)
       }
    //    else if(number % 2==1){
    //     console.log(number);
    //     evens.push(number)
    //    }
    }
    return evens;
}
const number =[4,5,77,89,10,56];
const evens=evenNumberOnly(number);
console.log("Even is Number:",evens);
function sumOfNumber(numbers){
    let sum =0;
    for(const number of numbers){
        {
            if(number %2 === 0)
            console.log(number)
        sum=sum+number;
        }
    }
    return sum;

}
const numbers =[45,77,88,88];
const sum = sumOfNumber(numbers);
console.log("number Of",sum);