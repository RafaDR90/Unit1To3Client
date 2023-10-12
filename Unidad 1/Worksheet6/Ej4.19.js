var ancho=parseInt(prompt("ancho"));
color="black";
document.write("<style>td { min-width: " + ancho + "px; }</style>");

document.write("<table border=`solid black`>");
    for(let i=0;i<8;i++){
        document.write(`<tr height='${ancho}px'>`);
        for(let j=0;j<8;j++){
            document.write(`<td bgcolor="${color}">&nbsp</td>`);
            color=(color=="black")?"white":"black";
        }
        color=(color=="black")?"white":"black";
        document.write("</tr>");
    }
    document.write("</table>");
