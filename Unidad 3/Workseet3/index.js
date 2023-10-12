//1
arrayNum=[1,6,4,8,44,6,8,10,11,32,12];
arrayString=["guitarra", "isla", "feliz", "casa", "pelisa","pelusa"];
//find larges num
numeroMayor=Math.max(...arrayNum);
//find longest string
StringMayor=arrayString.reduce((ac,b)=>{return ac.length > b.length? ac:b},"");
//find even numbers(numeros pares)
pares=arrayNum.filter((a)=>a%2==0);
//find odd numbers
impares=arrayNum.filter((a)=>a%2!=0);
//find words that contain 'is'
tieneIS=arrayString.filter(x => x.includes("is"));
//assert all numbers are divisible by three
divisibleDeTres=arrayNum.filter(x=>x%3==0);
//zip two arrays together
arrayJuntar=arrayNum.concat(arrayString);
//sort joined array from smallest to largest
arrayJuntar.sort((a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return b - a; // Ordenar números de mayor a menor
  } else if (typeof a === 'string' && typeof b === 'string') {
    return b.localeCompare(a); // Ordenar cadenas de mayor a menor
  } else if (typeof a === 'number') {
    return -1; // Los números van antes que las cadenas
  } else {
    return 1; // Las cadenas van después que los números
  }
});
//remove th first word in the array;
arrayRemoveFirstWord=arrayString;
arrayRemoveFirstWord.shift();
//place a new word at the start of the array
arrayRemoveFirstWord.unshift("hola");
document.write(arrayRemoveFirstWord)
//replace some elements
arrayRemoveFirstWord.splice(2,1,"pepe")
arrayRemoveFirstWord.splice(4,1,"ramona");
document.write("<br>"+arrayRemoveFirstWord);

//2
nombres["Jhon Wick", "Pepito Lospalotes","Jessica Alba","Alguien Mas"];
nombresJ=nombres.filter(x=>x.startsWith("J"));
document.write("<br>"+nombresJ);