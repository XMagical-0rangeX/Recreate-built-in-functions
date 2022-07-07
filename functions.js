// DEFINE YOUR FUNCTIONS HERE BASED ON THE PROVIDED CRITERIA
function includes(search, array){
    for(i=0;i<array.length;i++){
        if (array[i] === search){
            return true;
        }
    }
    return false;
}
function indexOf(search, array){
    for(i=0;i<array.length;i++){
        if (array[i] === search){
            return i;
        }
    }
    return -1;
}
function reverse(array){
    for (i=array.length-1;i>-1;i--){
       array.push(array[i]);
    }
    for (i=0;i<array.length/2+1;i++){
        array.shift();
    }
    return array;
}
function slice(min,max,array){
    let val =[];
    let c = 0;
    for(i=0;i<array.length;i++){
        if(i>=min&&i<max){
            val[c] = array[i];
            c++;
        }
    }
    return val;
}
function concat(array1,array2){
    for(i=0;i<array2.length;i++){
        array1.push(array2[i]);
    }
    return array1;
}
function join(link,array){
    let string =array[0];
    for (i=1;i<array.length;i++){
         string += link;
        string += array[i];
    }
    return string;
}
function max(array){
    let val = array[0];
    for (i = 0;i<array.length;i++){
        if (val<array[i]){
            val = array[i];
        }
    }
    return val;
}