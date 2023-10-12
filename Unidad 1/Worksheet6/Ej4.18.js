var columnas=parseInt(prompt("Nº columnas"));
var filas=parseInt(prompt("Nº Filas"));
var alto=parseInt(prompt("alto"));
var ancho=parseInt(prompt("ancho"));

document.write("<style>td { min-width: " + ancho + "px; }</style>");

document.write("<table border=`solid black`>");
    for(let i=0;i<filas;i++){
        document.write(`<tr height='${alto}px'>`);
        for(let j=0;j<columnas;j++){
            document.write("<td>&nbsp</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");