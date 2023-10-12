/* function sumaTodo(...a){
    let suma=0;
    for(i=0;i<a.length;i++){
        suma+=a;
    }
    return suma;
}

//2
function addOnlyNums(...a){
    for(i=0;i<a.length;i++){
        suma=0;
        num=parseInt(a);
        if (!isNaN(num)){
            suma+=a;
        }
    }
}

//3
function countTheArgs (...a){
    return a.length;
}

//4 (probar)
function combineTwoArrays(a,b){
    return array=[...a,...b];
}

//5 (probar)
function sumEveryOther(...a){
    suma=0;
    sumar="true";
    for(i=0;i<a.length;i++){}
        if(sumar){
            suma+=a;
            sumar?false:true;
        }
}
 */
//6 
function onlyUniques(...a){
    array=[];
    for(i=0;i<a.length;i++){
        if(!array.includes(a[i])){
            array.push(a[i]);
        }
    }
    return array;
    
}
var repetidos=onlyUniques("perro","perro","perro","gato","gato","pajaro","perro");
document.write(repetidos);

//7
/* function CombineAllArrays(...a){
    let todo=[];
    for(i=0;i<a.length;i++){
        for(j=0;j<a[i].length;j++){
            todo.push(a[i][j]);
        }
    }
    return todo;
}
arr1=["perro","gato"];
arr2=["elefante","leon"];
arr3=["caballo","cabra"];
let todo=CombineAllArrays(arr1,arr2,arr3);
console.log(todo);

//8
function squareAndSum(...a){
    let suma=0;
    for(i=0;i<a.length;i++){
        suma=suma+(a[i]*=a[i]);
    }
    return suma;
}
let prueba=squareAndSum(2,3);
console.log(prueba); */