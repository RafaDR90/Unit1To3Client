var columnas=parseInt(prompt("Numero de columnas"));
var altura=parseInt(prompt("Altura"));
var anchura=parseInt(prompt("Anchura"));
var color="white";

document.write("<style>td { min-width: " + anchura + "px; }</style>");
document.write("<table border='0' cellspacing='2' bgcolor='black' width='200'>");
document.write(`<tr bgcolor='white' height='${altura}'>`);
while(columnas!=0){
    color=(color=="white")?"black":"white";
    document.write(`<td bgcolor="${color}">&nbsp</td>`);
    columnas-=1;
}
document.write("</tr></table>");