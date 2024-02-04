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
const numbers =[4,5,77,89,10,56];
const evens=evenNumberOnly(numbers);
console.log("Even is Number:",evens);
