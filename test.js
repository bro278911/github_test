//#01 clamp region
function clamp(number,lower,upper){
    if(lower< number && upper> number){
        return number;
    }else if(lower > number){
        return lower;
    }else{
        return upper;
    }
}
let clamp_value = clamp(7,0,9);
console.log(clamp_value)
//#endregion

//#02 inRange region
function  inRange(value,start,end=0){
    if(start > end){
        end = start;
        start = 0;
    }
    if(value > start && value < end){
        return true;
    }else{
        return false;
    }
}
let inRange_value1 = inRange(3, 2, 4);
let inRange_value2 = inRange(4,8);
let inRange_value3 = inRange(4,2);
let inRange_value4 = inRange(2,2);
let inRange_value5 = inRange(1.2,2);

console.log(inRange_value1)
console.log(inRange_value2)
console.log(inRange_value3)
console.log(inRange_value4)
console.log(inRange_value5)
//#endregion

//#03 compact region
function compact (arr){
   const compact_result = arr.filter((element) => !(!element || element === "") );//!element(包含所有 false,null,0,undefiend,NaN判斷)，只需再加上判斷""空值時的狀態
    return compact_result;
}

let compact_value1 = compact([0, 1, false, 2, '', 3, 'hello']);
let compact_value2 = compact([null, undefined, NaN, ' ']);
let compact_value3 = compact([{ name: 'Alice' }, null, { age: 30 }, undefined]); 

console.log(compact_value1)
console.log(compact_value2)
console.log(compact_value3)
//#endregion