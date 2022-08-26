/*un caracol sube 7 pies cada dia y retrocede 2 cada noche
cuantos dias le tomaria salir del pozo?*/

function main() {
    var depth = parseInt(prompt("cuantos metros cayo?"));
    for(i=1;depth>0;i++) {
        if (depth-7<=0) {
            break;
        }else {
            depth-=5;
        }
        }
    document.write(i);
}
main();
