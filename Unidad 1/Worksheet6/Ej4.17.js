document.write(`<table border="solid black"><tr>`)
for(let i=1;i<=10;i++){
    document.write(`<th>Tabla del ${i}</th>`);
}
document.write("</tr>");
for(let i=1;i<=10;i++){
    document.write("<tr>")
    for(let j=1;j<=10;j++){
        document.write(`<td>${i}*${j}=${i*j}</td>`);
    }
    document.write("</tr>");
}
document.write("</table>");