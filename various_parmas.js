function stringCall(str) {
  const length = str.length;
  console.log(str, length);
  if (length % 2 === 0) {
    console.log("even size");
  } else {
    console.log("Odd Size");
  }
}
stringCall("Kushtia");
stringCall("Bheramara");
stringCall("Satbaria");
stringCall("Kazihata");
stringCall("Darampur");

function doubleOrTriple(number, double) {
  if (double === true) {
    const result = number * 3;
    return result;
  } else {
    const result = number * 7;
    return result;
  }
}
console.log(doubleOrTriple(22,true))
console.log(doubleOrTriple(22,false))

function getElement(array){
    const len = array.length;
    return len;
};
console.log(getElement([33,55,66,77,88,90,88]))

function personDetail(person){
//    const nam =nam;
//    const age =age;
//    return nam .age;
    const age =person.age;
    return age;
}
console.log(personDetail("mehebul"))
