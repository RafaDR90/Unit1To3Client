var columnas=parseInt(prompt("Numero de columnas"));
var altura=parseInt(prompt("Altura"));
var anchura=parseInt(prompt("Anchura"));
var color="white";

document.write("<style>td { min-width: " + anchura + "px; }</style>");
document.write("<table border='0' cellspacing='2' bgcolor='black' width='200'>");
document.write(`<tr bgcolor='white' height='${altura}'>`);
for(let i=0;i<columnas;i++){
    color=(color=="white")?"black":"white";
    document.write(`<td bgcolor="${color}">&nbsp</td>`);
}
document.write("</tr></table>");